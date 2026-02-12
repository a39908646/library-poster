import logging
from pathlib import Path
from typing import Optional, Tuple

import requests
from requests import Session

from app.config import Config, FontSetConfig
from app.utils.http import apply_github_proxy

logger = logging.getLogger(__name__)


class FontManager:
    def __init__(self, config: Config):
        self.config = config
        self.fonts_path = config.get_fonts_path()
        self.session = Session()
        if config.network.proxy:
            self.session.proxies.update({
                "http": config.network.proxy,
                "https": config.network.proxy
            })

    def get_font_paths(self, use_multi_1: bool = False) -> Tuple[str, str]:
        """
        获取字体路径（中文、英文）

        Args:
            use_multi_1: 是否使用 multi_1 专用字体

        Returns:
            (中文字体路径, 英文字体路径)
        """
        if use_multi_1 and not self.config.fonts.multi_1.use_main_font:
            font_config = self.config.fonts.multi_1
        else:
            font_config = self.config.fonts.main

        zh_path = self._get_font_path(
            font_config.zh_local,
            font_config.zh_url,
            "zh_font.ttf"
        )
        en_path = self._get_font_path(
            font_config.en_local,
            font_config.en_url,
            "en_font.ttf"
        )

        return zh_path, en_path

    def _get_font_path(
        self,
        local_path: str,
        url: str,
        default_name: str
    ) -> str:
        """
        获取单个字体路径，优先使用本地路径，否则下载
        """
        # 优先使用本地路径
        if local_path:
            local_file = Path(local_path)
            if local_file.exists():
                logger.info(f"Using local font: {local_path}")
                return str(local_file)
            else:
                logger.warning(f"Local font not found: {local_path}")

        # 从 URL 下载
        if url:
            cache_path = self.fonts_path / default_name
            if cache_path.exists():
                logger.info(f"Using cached font: {cache_path}")
                return str(cache_path)

            logger.info(f"Downloading font from: {url}")
            try:
                # 先直接下载（通过 session 配置的 HTTP 代理）
                self._download_font(url, cache_path)
                return str(cache_path)
            except Exception:
                # 如果配置了 github_proxy 镜像，再尝试通过镜像下载
                if self.config.network.github_proxy:
                    try:
                        mirror_url = apply_github_proxy(url, self.config.network.github_proxy)
                        logger.info(f"Retrying with github_proxy: {mirror_url}")
                        self._download_font(mirror_url, cache_path)
                        return str(cache_path)
                    except Exception as e:
                        logger.error(f"Failed to download font via mirror: {e}")
                else:
                    logger.error(f"Failed to download font: {url}")

        # 使用默认字体（系统字体）
        logger.warning("No font available, using system default")
        return self._get_system_font()

    def _download_font(self, url: str, save_path: Path, retries: int = 3):
        """下载字体文件"""
        for attempt in range(1, retries + 1):
            try:
                response = self.session.get(
                    url,
                    timeout=self.config.network.timeout,
                    stream=True
                )
                response.raise_for_status()

                save_path.parent.mkdir(parents=True, exist_ok=True)
                with open(save_path, 'wb') as f:
                    for chunk in response.iter_content(chunk_size=8192):
                        f.write(chunk)

                logger.info(f"Font downloaded successfully: {save_path}")
                return
            except Exception as e:
                logger.warning(f"Download attempt {attempt}/{retries} failed: {e}")
                if attempt >= retries:
                    raise

    def _get_system_font(self) -> str:
        """获取系统默认字体"""
        import platform
        system = platform.system()

        if system == "Windows":
            return "C:/Windows/Fonts/msyh.ttc"  # 微软雅黑
        elif system == "Darwin":  # macOS
            return "/System/Library/Fonts/PingFang.ttc"
        else:  # Linux
            candidates = [
                "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
                "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
            ]
            for font in candidates:
                if Path(font).exists():
                    return font

        # 最后的回退
        return ""
