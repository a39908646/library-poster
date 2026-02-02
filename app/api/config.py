import logging
from typing import Dict, Any

from fastapi import APIRouter, HTTPException

from app.config import get_config, reload_config

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/config", tags=["config"])


@router.get("")
async def get_config_api():
    config = get_config()
    return {
        "app": config.app.model_dump(),
        "servers": [s.model_dump() for s in config.servers],
        "cover": config.cover.model_dump(),
        "scheduler": config.scheduler.model_dump(),
        "webhook": config.webhook.model_dump()
    }


@router.post("/reload")
async def reload_config_api():
    try:
        reload_config()
        return {"status": "ok", "message": "Configuration reloaded"}
    except Exception as e:
        logger.error(f"Failed to reload config: {e}")
        raise HTTPException(status_code=500, detail=str(e))
