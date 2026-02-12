import logging
from typing import Optional

from fastapi import APIRouter, HTTPException, BackgroundTasks
from pydantic import BaseModel

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/generate", tags=["generate"])

_cover_service = None


def set_cover_service(service):
    global _cover_service
    _cover_service = service


class GenerateRequest(BaseModel):
    server_name: str
    library_name: Optional[str] = None


def _generate_task(server_name: str, library_name: Optional[str] = None):
    if not _cover_service:
        logger.error("CoverService not initialized")
        return

    try:
        _cover_service.generate(server_name, library_name)
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
