import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pathlib import Path

from app.config import get_config
from app.scheduler.jobs import CoverScheduler
from app.services.cover import CoverService
from app.webhook.handlers import router as webhook_router, set_cover_service
from app.api.config import router as config_router
from app.api.generate import router as generate_router, set_cover_service as set_api_service
from app.api.status import router as status_router

logger = logging.getLogger(__name__)

scheduler: CoverScheduler = None
cover_service: CoverService = None


@asynccontextmanager
async def lifespan(app: FastAPI):
    global scheduler, cover_service
    config = get_config()

    # 初始化封面服务
    cover_service = CoverService(config)

    # 初始化调度器
    scheduler = CoverScheduler(config)
    scheduler.set_service(cover_service)
    scheduler.start()

    # 设置全局服务实例
    set_cover_service(cover_service)
    set_api_service(cover_service)

    logger.info("Application started")
    yield

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


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


@app.get("/")
async def root():
    return {"message": "Library Poster API", "version": "1.0.0"}


# Serve frontend static files (if exists)
static_dir = Path(__file__).parent / "static"
if static_dir.exists():
    app.mount("/", StaticFiles(directory=str(static_dir), html=True), name="static")
