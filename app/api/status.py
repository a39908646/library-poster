import asyncio
import logging
import os
from datetime import datetime

from fastapi import APIRouter, HTTPException

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/status", tags=["status"])

_cover_service = None


def set_cover_service(service):
    global _cover_service
    _cover_service = service


def _get_memory_mb() -> float:
    """读取当前进程 RSS（兼容 Linux /proc 和其他平台）"""
    try:
        with open(f"/proc/{os.getpid()}/status") as f:
            for line in f:
                if line.startswith("VmRSS:"):
                    return int(line.split()[1]) / 1024  # kB -> MB
    except (FileNotFoundError, OSError):
        pass
    # fallback: resource 模块（macOS/Linux）
    try:
        import resource
        usage = resource.getrusage(resource.RUSAGE_SELF)
        return usage.ru_maxrss / 1024  # kB -> MB (Linux)
    except (ImportError, AttributeError):
        pass
    return 0.0


@router.get("")
async def get_status():
    return {
        "status": "running",
        "uptime": datetime.now().isoformat(),
        "memory_mb": round(_get_memory_mb(), 2),
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
