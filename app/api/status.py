import logging
import psutil
from datetime import datetime

from fastapi import APIRouter

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/status", tags=["status"])


@router.get("")
async def get_status():
    process = psutil.Process()
    memory_info = process.memory_info()

    return {
        "status": "running",
        "uptime": datetime.now().isoformat(),
        "memory_mb": memory_info.rss / 1024 / 1024,
        "cpu_percent": process.cpu_percent()
    }


@router.get("/servers")
async def get_servers():
    from app.config import get_config
    config = get_config()
    return {"servers": [s.model_dump() for s in config.servers]}
