from datetime import datetime
from enum import Enum
from typing import List, Optional

from pydantic import BaseModel, Field


class JobStatus(str, Enum):
    PENDING = "pending"
    RUNNING = "running"
    CANCELING = "canceling"
    CANCELED = "canceled"
    COMPLETED = "completed"
    FAILED = "failed"


class JobResultStatus(str, Enum):
    SUCCESS = "success"
    FAILED = "failed"
    CANCELED = "canceled"


class BatchTarget(BaseModel):
    server_name: str
    library_name: Optional[str] = None


class JobTargetResult(BaseModel):
    target: BatchTarget
    status: JobResultStatus
    message: str = ""
    started_at: Optional[datetime] = None
    finished_at: Optional[datetime] = None


class JobInfo(BaseModel):
    job_id: str
    status: JobStatus = JobStatus.PENDING
    created_at: datetime
    started_at: Optional[datetime] = None
    finished_at: Optional[datetime] = None
    total: int = 0
    completed: int = 0
    failed: int = 0
    canceled: int = 0
    progress: float = 0.0
    max_concurrent: int = Field(default=1, ge=1)
    cancel_requested: bool = False
    targets: List[BatchTarget] = Field(default_factory=list)
    results: List[JobTargetResult] = Field(default_factory=list)
