import base64
import logging
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

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

    def generate(self, server_name: str, library_name: Optional[str] = None):
        """生成封面（供外部调用）"""
        server = next(
            (s for s in self.config.servers if s.name == server_name),
            None
        )
        if not server:
            raise ValueError(f"Server not found: {server_name}")

        if library_name:
            client = self._create_client(server)
            try:
                libraries = client.get_libraries()
                library = next(
                    (lib for lib in libraries if lib.get("Name") == library_name),
                    None
                )
                if library:
                    self.update_library(client, server, library)
                else:
                    raise ValueError(f"Library not found: {library_name}")
            finally:
                client.close()
        else:
            self.update_server(server)

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
        if not self._prepare_library_images(client, library, library_dir, self.config):
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
            client.upload_cover(library_id, cover_base64)
            logger.info(f"Successfully uploaded cover for {library_name}")

            # 保存到本地（如果配置了）
            if self.config.cover.save_to_local:
                output_path = self.config.get_output_path()
                if output_path:
                    output_file = output_path / f"{library_name}.jpg"
                    output_file.write_bytes(base64.b64decode(cover_base64))
                    logger.info(f"Saved cover to: {output_file}")

            # 更新历史记录
            self.history.set(server.name, library_id, library_id, "generated")

        except Exception as e:
            logger.error(f"Failed to upload cover for {library_name}: {e}", exc_info=True)

    def _prepare_library_images(
        self,
        client,
        library: Dict[str, Any],
        library_dir: Path,
        config: Config
    ) -> bool:
        """准备媒体库图片（下载到本地）"""
        library_id = library.get("Id") or library.get("ItemId")
        if not library_id:
            return False

        # 确定需要的图片数量
        required_count = 1 if config.cover.style.startswith("single") else 9

        # 根据媒体库类型决定查询类型（参照原插件）
        collection_type = library.get("CollectionType", "")
        if collection_type == "music":
            include_types = "MusicAlbum,Audio"
        elif collection_type == "boxsets":
            include_types = "BoxSet,Movie"
        elif collection_type == "playlists":
            include_types = "Playlist"
        elif collection_type in ("movies", "tvshows"):
            include_types = "Movie,Series"
        else:
            # 混合内容、家庭视频等：不限制类型
            include_types = None

        # 清理旧图片
        for existing in library_dir.glob("*.jpg"):
            existing.unlink(missing_ok=True)

        # 获取媒体项
        items = []
        offset = 0
        max_attempts = 5

        # 需要更多候选项（有些项目可能没有图片）
        fetch_count = required_count * 5

        for _ in range(max_attempts):
            try:
                batch = client.get_items(
                    library_id=library_id,
                    offset=offset,
                    limit=20,
                    include_types=include_types,
                    sort_by=config.cover.sort_by
                )
                items.extend(batch)
                offset += len(batch)

                if len(items) >= fetch_count or len(batch) == 0:
                    break
            except Exception as e:
                logger.error(f"Failed to get items: {e}")
                break

        if not items:
            logger.warning(f"No items found in library")
            return False

        # 下载图片（遍历所有候选项，跳过没有图片的）
        downloaded = 0
        for item in items:
            try:
                image_url = self._get_image_url(client, item, config)
                if not image_url:
                    continue

                # 下载图片
                image_bytes, _ = download_image(
                    client.session,
                    image_url,
                    cache_dir=library_dir,
                    timeout=config.network.timeout,
                    retries=config.network.retries
                )

                # 保存图片（文件名从 1 开始：1.jpg, 2.jpg, ...）
                image_file = library_dir / f"{downloaded + 1}.jpg"
                image_file.write_bytes(image_bytes)
                downloaded += 1

                if downloaded >= required_count:
                    break
            except Exception as e:
                logger.error(f"Failed to download image: {e}")
                continue

        return downloaded >= required_count

    def _get_image_url(self, client, item: Dict[str, Any], config: Config) -> Optional[str]:
        """获取媒体项的图片 URL（参照原插件的完整回退链）"""
        use_primary = (
            config.style_params.single.use_primary
            if config.cover.style.startswith("single")
            else config.style_params.multi_1.use_primary
        )

        # 构建候选列表：(item_id, image_type, tag)
        candidates = []
        item_id = item.get("Id")

        if use_primary:
            # 优先海报图
            if item.get("ImageTags", {}).get("Primary"):
                candidates.append((item_id, "Primary", item["ImageTags"]["Primary"]))
            if item.get("ParentBackdropImageTags"):
                candidates.append((item.get("ParentBackdropItemId"), "Backdrop/0", item["ParentBackdropImageTags"][0]))
            if item.get("BackdropImageTags"):
                candidates.append((item_id, "Backdrop/0", item["BackdropImageTags"][0]))
        else:
            # 优先背景图
            if item.get("ParentBackdropImageTags"):
                candidates.append((item.get("ParentBackdropItemId"), "Backdrop/0", item["ParentBackdropImageTags"][0]))
            if item.get("BackdropImageTags"):
                candidates.append((item_id, "Backdrop/0", item["BackdropImageTags"][0]))
            if item.get("ImageTags", {}).get("Primary"):
                candidates.append((item_id, "Primary", item["ImageTags"]["Primary"]))

        # 取第一个有效候选
        for cid, img_type, tag in candidates:
            if cid and tag:
                path = client._path(f"/Items/{cid}/Images/{img_type}?tag={tag}")
                url = f"{client.base_url}{path}"
                separator = "&" if "?" in url else "?"
                return f"{url}{separator}api_key={client.api_key}"

        return None

    def _get_library_title(self, library_name: str, config: Optional[Config] = None) -> Tuple[str, str]:
        """获取媒体库标题（中文、英文）"""
        runtime_config = config or self.config
        if library_name in runtime_config.titles:
            title_config = runtime_config.titles[library_name]
            return title_config.zh, title_config.en
        return library_name, library_name.upper()
