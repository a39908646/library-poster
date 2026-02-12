import logging
import re
from typing import Any, Dict, List, Optional, Tuple

from apscheduler.triggers.cron import CronTrigger
from fastapi import APIRouter, Depends, HTTPException
from pydantic import ValidationError

from app.config import Config, get_config, reload_config, write_config_atomically
from app.api.deps import require_admin_token

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/config", tags=["config"])
MASKED_API_KEY = "***MASKED***"
MASK_PATTERN = re.compile(r"^\*+$")


def _deep_merge(base: Dict[str, Any], override: Dict[str, Any]):
    for key, value in override.items():
        if isinstance(value, dict) and isinstance(base.get(key), dict):
            _deep_merge(base[key], value)
        else:
            base[key] = value


def _mask_servers(servers: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    masked_servers: List[Dict[str, Any]] = []
    for server in servers:
        item = dict(server)
        if item.get("api_key"):
            item["api_key"] = MASKED_API_KEY
        masked_servers.append(item)
    return masked_servers


def _mask_config(config_data: Dict[str, Any]) -> Dict[str, Any]:
    masked = dict(config_data)
    masked["servers"] = _mask_servers(masked.get("servers", []))
    return masked


def _restore_masked_api_keys(payload: Dict[str, Any], current_config: Config) -> List[str]:
    current_api_keys = {server.name: server.api_key for server in current_config.servers}
    unresolved: List[str] = []

    for server in payload.get("servers", []):
        api_key = str(server.get("api_key", "") or "")
        if api_key == MASKED_API_KEY or MASK_PATTERN.fullmatch(api_key):
            server_name = server.get("name")
            if server_name in current_api_keys:
                server["api_key"] = current_api_keys[server_name]
            else:
                unresolved.append(str(server_name or "<unknown>"))

    return unresolved


def _format_validation_errors(exc: ValidationError) -> List[str]:
    messages: List[str] = []
    for error in exc.errors():
        location = ".".join(str(item) for item in error.get("loc", []))
        message = error.get("msg", "Invalid value")
        messages.append(f"{location}: {message}" if location else message)
    return messages or [str(exc)]


def _validate_config_payload(payload: Dict[str, Any]) -> Tuple[Optional[Config], List[str]]:
    try:
        config = Config(**payload)
    except ValidationError as exc:
        return None, _format_validation_errors(exc)

    errors: List[str] = []
    if config.scheduler.enabled:
        try:
            CronTrigger.from_crontab(config.scheduler.cron)
        except ValueError as exc:
            errors.append(f"scheduler.cron: {exc}")

    server_names = [server.name for server in config.servers]
    if len(server_names) != len(set(server_names)):
        errors.append("servers: duplicate server name is not allowed")

    return (config if not errors else None), errors


def _normalize_payload(payload: Dict[str, Any], current_config: Config) -> Dict[str, Any]:
    if not isinstance(payload, dict):
        raise ValueError("Payload must be a json object")

    normalized = current_config.model_dump()
    _deep_merge(normalized, payload)

    unresolved = _restore_masked_api_keys(normalized, current_config)
    if unresolved:
        raise ValueError(f"Cannot resolve masked api_key for servers: {', '.join(unresolved)}")

    return normalized


@router.get("")
async def get_config_api():
    config = get_config()
    return {
        "app": config.app.model_dump(),
        "servers": _mask_servers([s.model_dump() for s in config.servers]),
        "cover": config.cover.model_dump(),
        "scheduler": config.scheduler.model_dump(),
        "webhook": config.webhook.model_dump()
    }


@router.get("/full")
async def get_full_config_api():
    config_data = get_config().model_dump()
    return _mask_config(config_data)


@router.post("/validate")
async def validate_config_api(payload: Dict[str, Any], _: None = Depends(require_admin_token)):
    current_config = get_config()

    try:
        normalized_payload = _normalize_payload(payload, current_config)
    except ValueError as exc:
        return {"valid": False, "errors": [str(exc)]}

    _, errors = _validate_config_payload(normalized_payload)
    return {"valid": len(errors) == 0, "errors": errors}


@router.put("")
async def save_config_api(payload: Dict[str, Any], _: None = Depends(require_admin_token)):
    try:
        current_config = get_config()
        normalized_payload = _normalize_payload(payload, current_config)
        validated_config, errors = _validate_config_payload(normalized_payload)

        if errors or not validated_config:
            raise HTTPException(
                status_code=400,
                detail={
                    "message": "Configuration validation failed",
                    "errors": errors,
                }
            )

        write_config_atomically(validated_config.model_dump(mode="python"))
        reload_config()
        return {"status": "ok", "message": "Configuration saved and reloaded"}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Failed to save config: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/reload")
async def reload_config_api(_: None = Depends(require_admin_token)):
    try:
        reload_config()
        return {"status": "ok", "message": "Configuration reloaded"}
    except Exception as e:
        logger.error(f"Failed to reload config: {e}")
        raise HTTPException(status_code=500, detail=str(e))
