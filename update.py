#!/usr/bin/env python3
"""
轻量级封面更新脚本
用途：供 cron 或 systemd timer 定时调用
"""
import sys
import logging
from pathlib import Path

# 添加项目根目录到 Python 路径
project_root = Path(__file__).parent
sys.path.insert(0, str(project_root))

from app.config import get_config
from app.services.cover import CoverService

# 配置日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('/tmp/library-poster.log'),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger(__name__)


def main():
    """主函数：更新所有服务器的封面"""
    try:
        logger.info("=== 开始封面更新 ===")

        # 加载配置
        config = get_config()

        # 创建封面服务
        service = CoverService(config)

        # 更新所有服务器
        service.update_all_servers()

        logger.info("=== 封面更新完成 ===")
        return 0

    except Exception as e:
        logger.error(f"更新失败: {e}", exc_info=True)
        return 1


if __name__ == "__main__":
    exit(main())