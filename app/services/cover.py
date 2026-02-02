import base64
import logging
from pathlib import Path
from typing import Dict, List, Optional, Tuple

from app.clients.emby import EmbyClient
from app.clients.jellyfin import JellyfinClient
from app.config import Config, ServerConfig
from app.generator import generate_cover
from app.storage.history import CoverHistory
from app.utils.font import FontManager
from app.utils.image import download_image

logger = logging.getLogger(__name__)


class CoverService:
    def __init__(self, config: Config):
        self.config = config
        self.font_manager = FontManager(config)
        self.history = CoverHistory(config.get_data_path() / "cover_history.json")
        self.covers_cache_path = config.get_covers_path()

    def _create_client(self, server: ServerConfig):
        """创建媒体服务器客户端"""
        if server.type == "emby":
            return EmbyClient(server, self.config.network)
        elif server.type == "jellyfin":
            return JellyfinClient(server, self.config.network)
        else:
            raise ValueError(f"Unknown server type: {server.type}")

    def update_all_servers(self):
        """更新所有服务器的封面"""
        logger.info("Starting cover update for all servers")
        for server in self.config.servers:
            try:
                self.update_server(server)
            except Exception as e:
                logger.error(f"Failed to update server {server.name}: {e}", exc_info=True)

    def update_server(self, server: ServerConfig):
        """更新指定服务器的所有媒体库封面"""
        logger.info(f"Updating covers for server: {server.name}")
        client = self._create_client(server)

        try:
            libraries = client.get_libraries()
            logger.info(f"Found {len(libraries)} libraries in {server.name}")

            for library in libraries:
                library_name = library.get("Name")
                if library_name in server.exclude_libraries:
                    logger.info(f"Skipping excluded library: {library_name}")
                    continue

                try:
                    self.update_library(client, server, library)
                except Exception as e:
                    logger.error(f"Failed to update library {library_name}: {e}", exc_info=True)
        finally:
            client.close()

    def update_library(self, client, server: ServerConfig, library: Dict):
        """更新单个媒体库的封面"""
        library_name = library.get("Name")
        library_id = library.get("Id") or library.get("ItemId")

        logger.info(f"Updating library: {server.name}/{library_name}")

        # 获取标题配置
        title = self._get_library_title(library_name)

        # 准备图片目录
        library_dir = self.covers_cache_path / library_name
        library_dir.mkdir(parents=True, exist_ok=True)

        # 获取媒体项并下载图片
        if not self._prepare_library_images(client, library, library_dir):
            logger.warning(f"Failed to prepare images for {library_name}")
            return

        # 获取字体路径
        use_multi_1 = self.config.cover.style == "multi_1"
        font_paths = self.font_manager.get_font_paths(use_multi_1)

        # 生成封面
        cover_base64 = generate_cover(library_dir, title, font_paths, self.config)
        if not cover_base64:
            logger.error(f"Failed to generate cover for {library_name}")
            return

        # 上传封面
        try:
            cover_bytes = base64.b64decode(cover_base64)
            client.upload_cover(library_id, cover_bytes)
            logger.info(f"Successfully uploaded cover for {library_name}")

            # 保存到本地（如果配置了）
            if self.config.cover.save_to_local:
                output_path = self.config.get_output_path()
                if output_path:
                    output_file = output_path / f"{library_name}.jpg"
                    output_file.write_bytes(cover_bytes)
                    logger.info(f"Saved cover to: {output_file}")

            # 更新历史记录
            self.history.set(server.name, library_id, library_id, "generated")

        except Exception as e:
            logger.error(f"Failed to upload cover for {library_name}: {e}", exc_info=True)

    def _prepare_library_images(
        self,
        client,
        library: Dict,
        library_dir: Path
    ) -> bool:
        """准备媒体库图片（下载到本地）"""
        library_id = library.get("Id") or library.get("ItemId")
        library_type = library.get("CollectionType")

        # 确定需要的图片数量
        required_count = 1 if self.config.cover.style.startswith("single") else 9

        # 获取媒体项
        items = []
        offset = 0
        max_attempts = 5

        for attempt in range(max_attempts):
            try:
                batch = client.get_items(
                    library_id=library_id,
                    offset=offset,
                    limit=20,
                    sort_by=self.config.cover.sort_by
                )
                items.extend(batch)
                offset += len(batch)

                if len(items) >= required_count or len(batch) == 0:
                    break
            except Exception as e:
                logger.error(f"Failed to get items: {e}")
                break

        if len(items) < required_count:
            logger.warning(f"Not enough items: {len(items)}/{required_count}")
            return False

        # 下载图片
        downloaded = 0
        for item in items[:required_count]:
            try:
                image_url = self._get_image_url(client, item)
                if not image_url:
                    continue

                # 下载图片
                image_bytes, _ = download_image(
                    client.session,
                    image_url,
                    cache_dir=library_dir,
                    timeout=self.config.network.timeout,
                    retries=self.config.network.retries
                )

                # 保存图片
                image_file = library_dir / f"image_{downloaded}.jpg"
                image_file.write_bytes(image_bytes)
                downloaded += 1

                if downloaded >= required_count:
                    break
            except Exception as e:
                logger.error(f"Failed to download image: {e}")
                continue

        return downloaded >= required_count

    def _get_image_url(self, client, item: Dict) -> Optional[str]:
        """获取媒体项的图片 URL"""
        item_type = item.get("Type")
        item_id = item.get("Id")

        # 优先使用背景图（除非配置了优先使用海报）
        use_primary = (
            self.config.style_params.single.use_primary
            if self.config.cover.style.startswith("single")
            else self.config.style_params.multi_1.use_primary
        )

        if not use_primary:
            # 尝试背景图
            if item.get("BackdropImageTags") and len(item["BackdropImageTags"]) > 0:
                tag = item["BackdropImageTags"][0]
                return client._path(f"/Items/{item_id}/Images/Backdrop/0?tag={tag}")

        # 使用海报图
        if item.get("ImageTags", {}).get("Primary"):
            tag = item["ImageTags"]["Primary"]
            return client._path(f"/Items/{item_id}/Images/Primary?tag={tag}")

        return None

    def _get_library_title(self, library_name: str) -> Tuple[str, str]:
        """获取媒体库标题（中文、英文）"""
        if library_name in self.config.titles:
            title_config = self.config.titles[library_name]
            return title_config.zh, title_config.en
        return library_name, library_name.upper()
