import asyncio
import logging
from typing import Any, Dict, Optional

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/preview", tags=["preview"])

_cover_service = None


def set_cover_service(service):
    global _cover_service
    _cover_service = service


class PreviewRequest(BaseModel):
    server_name: str
    library_name: Optional[str] = None
    config_override: Optional[Dict[str, Any]] = None


@router.post("")
async def create_preview(request: PreviewRequest):
    if not _cover_service:
        raise HTTPException(status_code=500, detail="Service not initialized")

    try:
        preview_base64 = await asyncio.to_thread(
            _cover_service.preview_cover,
            request.server_name,
            request.library_name,
            request.config_override,
        )
        return {"status": "ok", "preview_base64": preview_base64}
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    except Exception as exc:
        logger.error("Failed to generate preview: %s", exc, exc_info=True)
        raise HTTPException(status_code=500, detail=str(exc)) from exc
