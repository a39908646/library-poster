import asyncio
import logging
from typing import Dict, Any

from fastapi import APIRouter, Request, BackgroundTasks

logger = logging.getLogger(__name__)

router = APIRouter()

# 全局 CoverService 实例（由 main.py 设置）
_cover_service = None


def set_cover_service(service):
    global _cover_service
    _cover_service = service


async def process_webhook_event(server_name: str, event_data: Dict[str, Any]):
    """后台处理 Webhook 事件"""
    if not _cover_service:
        logger.error("CoverService not initialized")
        return

    try:
        # 延迟处理（等待媒体服务器扫描完成）
        delay = _cover_service.config.webhook.delay
        if delay > 0:
            logger.info(f"Waiting {delay} seconds before processing webhook")
            await asyncio.sleep(delay)

        # 查找对应的服务器配置
        server = next(
            (s for s in _cover_service.config.servers if s.name == server_name),
            None
        )
        if not server:
            logger.error(f"Server not found: {server_name}")
            return

        # 更新服务器封面
        _cover_service.update_server(server)
        logger.info(f"Webhook processing completed for {server_name}")

    except Exception as e:
        logger.error(f"Failed to process webhook: {e}", exc_info=True)


@router.post("/webhook/emby")
async def emby_webhook(request: Request, background_tasks: BackgroundTasks):
    try:
        data = await request.json()
        logger.info(f"Received Emby webhook: {data.get('Event', 'Unknown')}")

        # 提取服务器名称（从 URL 或配置推断）
        # 这里简化处理，使用第一个 Emby 服务器
        if _cover_service:
            emby_servers = [s for s in _cover_service.config.servers if s.type == "emby"]
            if emby_servers:
                background_tasks.add_task(
                    process_webhook_event,
                    emby_servers[0].name,
                    data
                )

        return {"status": "ok"}
    except Exception as e:
        logger.error(f"Failed to process Emby webhook: {e}")
        return {"status": "error", "message": str(e)}


@router.post("/webhook/jellyfin")
async def jellyfin_webhook(request: Request, background_tasks: BackgroundTasks):
    try:
        data = await request.json()
        logger.info(f"Received Jellyfin webhook: {data.get('NotificationType', 'Unknown')}")

        # 提取服务器名称
        if _cover_service:
            jellyfin_servers = [s for s in _cover_service.config.servers if s.type == "jellyfin"]
            if jellyfin_servers:
                background_tasks.add_task(
                    process_webhook_event,
                    jellyfin_servers[0].name,
                    data
                )

        return {"status": "ok"}
    except Exception as e:
        logger.error(f"Failed to process Jellyfin webhook: {e}")
        return {"status": "error", "message": str(e)}
