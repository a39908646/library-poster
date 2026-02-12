import logging
from typing import List, Optional

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

from app.models.job import BatchTarget

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/batch", tags=["batch"])

_job_manager = None


def set_job_manager(manager):
    global _job_manager
    _job_manager = manager


class CreateBatchRequest(BaseModel):
    targets: List[BatchTarget] = Field(default_factory=list)
    max_concurrent: Optional[int] = Field(default=None, ge=1)


@router.post("")
async def create_batch_job(request: CreateBatchRequest):
    if not _job_manager:
        raise HTTPException(status_code=500, detail="JobManager not initialized")
    if not request.targets:
        raise HTTPException(status_code=400, detail="targets cannot be empty")

    try:
        job = await _job_manager.create_job(
            targets=request.targets,
            max_concurrent=request.max_concurrent,
        )
        return {"job": job.model_dump(mode="json")}
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    except Exception as exc:
        logger.error("Failed to create batch job: %s", exc, exc_info=True)
        raise HTTPException(status_code=500, detail=str(exc)) from exc


@router.get("")
async def list_batch_jobs():
    if not _job_manager:
        raise HTTPException(status_code=500, detail="JobManager not initialized")

    jobs = await _job_manager.list_jobs()
    return {"jobs": [job.model_dump(mode="json") for job in jobs]}


@router.get("/{job_id}")
async def get_batch_job(job_id: str):
    if not _job_manager:
        raise HTTPException(status_code=500, detail="JobManager not initialized")

    job = await _job_manager.get_job(job_id)
    if not job:
        raise HTTPException(status_code=404, detail="Job not found")

    return {"job": job.model_dump(mode="json")}


@router.post("/{job_id}/cancel")
async def cancel_batch_job(job_id: str):
    if not _job_manager:
        raise HTTPException(status_code=500, detail="JobManager not initialized")

    job = await _job_manager.get_job(job_id)
    if not job:
        raise HTTPException(status_code=404, detail="Job not found")

    canceled = await _job_manager.cancel_job(job_id)
    if not canceled:
        raise HTTPException(
            status_code=409,
            detail=f"Job cannot be canceled in status: {job.status}"
        )

    updated = await _job_manager.get_job(job_id)
    if not updated:
        raise HTTPException(status_code=404, detail="Job not found")

    return {"job": updated.model_dump(mode="json")}
