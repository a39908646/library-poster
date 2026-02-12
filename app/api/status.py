import asyncio
import logging
import psutil
from datetime import datetime

from fastapi import APIRouter, HTTPException

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/status", tags=["status"])

_cover_service = None


def set_cover_service(service):
    global _cover_service
    _cover_service = service


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


@router.get("/servers/{server_name}/libraries")
async def get_server_libraries(server_name: str):
    """获取指定服务器的媒体库列表"""
    if not _cover_service:
        raise HTTPException(status_code=500, detail="Service not initialized")

    server = next(
        (s for s in _cover_service.config.servers if s.name == server_name),
        None
    )
    if not server:
        raise HTTPException(status_code=404, detail=f"Server not found: {server_name}")

    try:
        client = _cover_service._create_client(server)
        try:
            libraries = await asyncio.to_thread(client.get_libraries)
            return {"libraries": libraries}
        finally:
            client.close()
    except Exception as e:
        logger.error(f"Failed to get libraries: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=str(e))
