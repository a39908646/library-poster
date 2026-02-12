import asyncio
import logging
import uuid
from datetime import datetime, timezone
from typing import Dict, List, Optional

from app.models.job import (
    BatchTarget,
    JobInfo,
    JobResultStatus,
    JobStatus,
    JobTargetResult,
)

logger = logging.getLogger(__name__)


class JobManager:
    _TERMINAL_STATUSES = {JobStatus.COMPLETED, JobStatus.FAILED, JobStatus.CANCELED}

    def __init__(self, cover_service):
        self.cover_service = cover_service
        self._jobs: Dict[str, JobInfo] = {}
        self._job_tasks: Dict[str, asyncio.Task] = {}
        self._lock = asyncio.Lock()

    def bind_cover_service(self, cover_service):
        self.cover_service = cover_service

    async def create_job(
        self,
        targets: List[BatchTarget],
        max_concurrent: Optional[int] = None,
    ) -> JobInfo:
        if not targets:
            raise ValueError("Batch targets cannot be empty")
        if not self.cover_service:
            raise RuntimeError("CoverService not initialized")

        configured_limit = getattr(self.cover_service.config.performance, "max_concurrent", 1)
        concurrent_limit = max(1, int(max_concurrent or configured_limit or 1))

        job = JobInfo(
            job_id=uuid.uuid4().hex,
            created_at=datetime.now(timezone.utc),
            total=len(targets),
            max_concurrent=concurrent_limit,
            targets=targets,
        )

        async with self._lock:
            self._jobs[job.job_id] = job
            self._job_tasks[job.job_id] = asyncio.create_task(self._run_job(job.job_id))

        return job.model_copy(deep=True)

    async def list_jobs(self) -> List[JobInfo]:
        async with self._lock:
            jobs = [job.model_copy(deep=True) for job in self._jobs.values()]
        return sorted(jobs, key=lambda item: item.created_at, reverse=True)

    async def get_job(self, job_id: str) -> Optional[JobInfo]:
        async with self._lock:
            job = self._jobs.get(job_id)
            if not job:
                return None
            return job.model_copy(deep=True)

    async def cancel_job(self, job_id: str) -> bool:
        async with self._lock:
            job = self._jobs.get(job_id)
            if not job:
                return False
            if job.status in self._TERMINAL_STATUSES:
                return False
            job.cancel_requested = True
            if job.status in {JobStatus.PENDING, JobStatus.RUNNING}:
                job.status = JobStatus.CANCELING
            return True

    async def _run_job(self, job_id: str):
        async with self._lock:
            job = self._jobs.get(job_id)
            if not job:
                return
            job.status = JobStatus.RUNNING
            job.started_at = datetime.now(timezone.utc)
            targets = list(job.targets)
            semaphore = asyncio.Semaphore(job.max_concurrent)

        tasks = [
            asyncio.create_task(self._run_target(job_id, target, semaphore))
            for target in targets
        ]
        if tasks:
            await asyncio.gather(*tasks, return_exceptions=True)

        async with self._lock:
            job = self._jobs.get(job_id)
            if not job:
                return

            if job.cancel_requested:
                job.status = JobStatus.CANCELED
            elif job.failed > 0:
                job.status = JobStatus.FAILED
            else:
                job.status = JobStatus.COMPLETED

            job.finished_at = datetime.now(timezone.utc)
            job.progress = 100.0
            self._job_tasks.pop(job_id, None)

    async def _run_target(self, job_id: str, target: BatchTarget, semaphore: asyncio.Semaphore):
        if await self._is_cancel_requested(job_id):
            await self._record_result(
                job_id,
                JobTargetResult(
                    target=target,
                    status=JobResultStatus.CANCELED,
                    message="Canceled before execution",
                    started_at=datetime.now(timezone.utc),
                    finished_at=datetime.now(timezone.utc),
                ),
            )
            return

        async with semaphore:
            if await self._is_cancel_requested(job_id):
                await self._record_result(
                    job_id,
                    JobTargetResult(
                        target=target,
                        status=JobResultStatus.CANCELED,
                        message="Canceled before execution",
                        started_at=datetime.now(timezone.utc),
                        finished_at=datetime.now(timezone.utc),
                    ),
                )
                return

            started_at = datetime.now(timezone.utc)
            try:
                await asyncio.to_thread(
                    self.cover_service.generate,
                    target.server_name,
                    target.library_name,
                )
                result = JobTargetResult(
                    target=target,
                    status=JobResultStatus.SUCCESS,
                    message="Completed",
                    started_at=started_at,
                    finished_at=datetime.now(timezone.utc),
                )
            except Exception as exc:
                logger.error("Batch target failed: %s", exc, exc_info=True)
                result = JobTargetResult(
                    target=target,
                    status=JobResultStatus.FAILED,
                    message=str(exc),
                    started_at=started_at,
                    finished_at=datetime.now(timezone.utc),
                )

            await self._record_result(job_id, result)

    async def _is_cancel_requested(self, job_id: str) -> bool:
        async with self._lock:
            job = self._jobs.get(job_id)
            return bool(job and job.cancel_requested)

    async def _record_result(self, job_id: str, result: JobTargetResult):
        async with self._lock:
            job = self._jobs.get(job_id)
            if not job:
                return

            job.results.append(result)
            if result.status == JobResultStatus.SUCCESS:
                job.completed += 1
            elif result.status == JobResultStatus.FAILED:
                job.failed += 1
            else:
                job.canceled += 1

            processed = job.completed + job.failed + job.canceled
            job.progress = round((processed / job.total) * 100, 2) if job.total else 100.0
