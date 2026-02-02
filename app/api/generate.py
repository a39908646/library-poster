import logging
from typing import Optional

from fastapi import APIRouter, HTTPException, BackgroundTasks
from pydantic import BaseModel

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/generate", tags=["generate"])

# 全局 CoverService 实例
_cover_service = None


def set_cover_service(service):
    global _cover_service
    _cover_service = service


class GenerateRequest(BaseModel):
    server_name: str
    library_name: Optional[str] = None


def _generate_task(server_name: str, library_name: Optional[str] = None):
    """后台任务：生成封面"""
    if not _cover_service:
        logger.error("CoverService not initialized")
        return

    try:
        # 查找服务器
        server = next(
            (s for s in _cover_service.config.servers if s.name == server_name),
            None
        )
        if not server:
            logger.error(f"Server not found: {server_name}")
            return

        if library_name:
            # 生成指定媒体库的封面
            client = _cover_service._create_client(server)
            try:
                libraries = client.get_libraries()
                library = next(
                    (lib for lib in libraries if lib.get("Name") == library_name),
                    None
                )
                if library:
                    _cover_service.update_library(client, server, library)
                else:
                    logger.error(f"Library not found: {library_name}")
            finally:
                client.close()
        else:
            # 生成服务器所有媒体库的封面
            _cover_service.update_server(server)

        logger.info(f"Cover generation completed for {server_name}/{library_name or 'all'}")
    except Exception as e:
        logger.error(f"Failed to generate cover: {e}", exc_info=True)


@router.post("")
async def generate_cover(request: GenerateRequest, background_tasks: BackgroundTasks):
    try:
        logger.info(f"Manual cover generation requested for {request.server_name}/{request.library_name}")
        background_tasks.add_task(_generate_task, request.server_name, request.library_name)
        return {"status": "ok", "message": "Cover generation started"}
    except Exception as e:
        logger.error(f"Failed to generate cover: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/history")
async def get_history():
    if not _cover_service:
        raise HTTPException(status_code=500, detail="Service not initialized")

    try:
        history_data = _cover_service.history._data
        return {"history": history_data}
    except Exception as e:
        logger.error(f"Failed to get history: {e}")
        raise HTTPException(status_code=500, detail=str(e))
