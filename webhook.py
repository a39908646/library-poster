#!/usr/bin/env python3
"""
轻量级 Webhook 监听器
用途：监听 Emby/Jellyfin 的新作入库通知，触发封面更新
"""
import sys
import json
import logging
import asyncio
import time
from pathlib import Path
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse

# 添加项目根目录到 Python 路径
project_root = Path(__file__).parent.parent
sys.path.insert(0, str(project_root))

from app.config import get_config
from app.services.cover import CoverService

# 配置日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('/tmp/library-poster-webhook.log'),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger(__name__)

# 全局变量
config = None
cover_service = None
processing_lock = asyncio.Lock()


def process_webhook(server_type: str, event_data: dict):
    """处理 Webhook 事件（同步版本）"""
    try:
        logger.info(f"收到 {server_type} Webhook: {event_data.get('Event') or event_data.get('NotificationType')}")

        # 延迟处理（等待媒体服务器扫描完成）
        delay = config.webhook.delay
        if delay > 0:
            logger.info(f"等待 {delay} 秒后处理...")
            time.sleep(delay)

        # 找到对应服务器并更新
        servers = [s for s in config.servers if s.type == server_type]
        if not servers:
            logger.warning(f"未找到 {server_type} 服务器配置")
            return

        server = servers[0]
        logger.info(f"开始更新服务器: {server.name}")
        cover_service.update_server(server)
        logger.info(f"服务器更新完成: {server.name}")

    except Exception as e:
        logger.error(f"Webhook 处理失败: {e}", exc_info=True)


class WebhookHandler(BaseHTTPRequestHandler):
    """HTTP 请求处理器"""

    def log_message(self, format, *args):
        """重写日志方法，使用 logger"""
        logger.info(f"{self.address_string()} - {format % args}")

    def do_POST(self):
        """处理 POST 请求"""
        try:
            # 解析路径
            path = urlparse(self.path).path

            # 读取请求体
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length)
            data = json.loads(body) if body else {}

            # 根据路径判断服务器类型
            if '/webhook/emby' in path:
                process_webhook('emby', data)
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "ok"}).encode())

            elif '/webhook/jellyfin' in path:
                process_webhook('jellyfin', data)
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "ok"}).encode())

            else:
                self.send_error(404, "Not Found")

        except Exception as e:
            logger.error(f"请求处理失败: {e}", exc_info=True)
            self.send_error(500, str(e))

    def do_GET(self):
        """处理 GET 请求（健康检查）"""
        if self.path == '/health':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"status": "healthy"}).encode())
        else:
            self.send_error(404, "Not Found")


def main():
    """主函数"""
    global config, cover_service

    try:
        logger.info("=== 启动 Webhook 监听器 ===")

        # 加载配置
        config = get_config()

        if not config.webhook.enabled:
            logger.warning("Webhook 功能已禁用，退出")
            return 1

        # 创建封面服务
        cover_service = CoverService(config)

        # 启动 HTTP 服务器
        port = 8000
        server = HTTPServer(('0.0.0.0', port), WebhookHandler)

        logger.info(f"Webhook 监听器已启动，端口: {port}")
        logger.info(f"Emby URL: http://your-ip:{port}/webhook/emby")
        logger.info(f"Jellyfin URL: http://your-ip:{port}/webhook/jellyfin")
        logger.info("按 Ctrl+C 停止...")

        server.serve_forever()

    except KeyboardInterrupt:
        logger.info("收到停止信号，正在退出...")
        return 0
    except Exception as e:
        logger.error(f"启动失败: {e}", exc_info=True)
        return 1


if __name__ == "__main__":
    exit(main())