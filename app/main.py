import logging
from contextlib import asynccontextmanager
from typing import Optional

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pathlib import Path

from app.config import (
    get_config,
    register_config_reload_callback,
    unregister_config_reload_callback,
)
from app.scheduler.jobs import CoverScheduler
from app.services.cover import CoverService
from app.services.job_manager import JobManager
from app.webhook.handlers import router as webhook_router, set_cover_service
from app.api.config import router as config_router
from app.api.generate import router as generate_router, set_cover_service as set_api_service
from app.api.status import router as status_router, set_cover_service as set_status_service
from app.api.preview import router as preview_router, set_cover_service as set_preview_service
from app.api.batch import router as batch_router, set_job_manager

logger = logging.getLogger(__name__)

scheduler: Optional[CoverScheduler] = None
cover_service: Optional[CoverService] = None
job_manager: Optional[JobManager] = None


def _on_config_reloaded(config):
    global scheduler, cover_service, job_manager
    if not cover_service:
        return

    cover_service.refresh_config(config)
    if scheduler:
        scheduler.set_service(cover_service)
        scheduler.reload(config)
    if job_manager:
        job_manager.bind_cover_service(cover_service)


@asynccontextmanager
async def lifespan(app: FastAPI):
    global scheduler, cover_service, job_manager
    config = get_config()

    cover_service = CoverService(config)
    scheduler = CoverScheduler(config)
    scheduler.set_service(cover_service)
    scheduler.start()
    job_manager = JobManager(cover_service)

    register_config_reload_callback(_on_config_reloaded)
    set_cover_service(cover_service)
    set_api_service(cover_service)
    set_preview_service(cover_service)
    set_status_service(cover_service)
    set_job_manager(job_manager)

    logger.info("Application started")
    yield

    unregister_config_reload_callback(_on_config_reloaded)
    if scheduler:
        scheduler.stop()
    logger.info("Application stopped")


app = FastAPI(
    title="Library Poster",
    description="独立媒体库封面生成器",
    version="1.0.0",
    lifespan=lifespan
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(webhook_router)
app.include_router(config_router)
app.include_router(generate_router)
app.include_router(status_router)
app.include_router(preview_router)
app.include_router(batch_router)


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


# Serve frontend static files (if exists)
static_dir = Path(__file__).parent / "static"
if static_dir.exists():
    app.mount("/", StaticFiles(directory=str(static_dir), html=True), name="static")
