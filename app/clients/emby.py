from typing import Any, Dict, List

from app.clients.base import BaseClient
from app.config import NetworkConfig, ServerConfig
from app.utils.http import build_proxies, standardize_base_url


class EmbyClient(BaseClient):
    api_prefix = "/emby"

    def __init__(self, server: ServerConfig, network: NetworkConfig) -> None:
        base_url = standardize_base_url(server.url)
        proxies = build_proxies(network.proxy)
        super().__init__(
            base_url=base_url,
            api_key=server.api_key,
            timeout=network.timeout,
            proxies=proxies,
            retries=network.retries or 3,
        )
        self.server_name = server.name
        self.server_type = server.type

    def _path(self, path: str) -> str:
        prefix = self.api_prefix.rstrip("/")
        suffix = path if path.startswith("/") else f"/{path}"
        return f"{prefix}{suffix}" if prefix else suffix

    def get_libraries(self) -> List[Dict[str, Any]]:
        data = self.get_json(self._path("/Library/VirtualFolders/Query"))
        return data.get("Items", [])

    def get_items(
        self,
        library_id: str,
        offset: int = 0,
        limit: int = 20,
        include_types: str = None,
        sort_by: str = "Random",
        sort_order: str = "Descending",
        recursive: bool = True,
    ) -> List[Dict[str, Any]]:
        params = {
            "ParentId": library_id,
            "SortBy": sort_by,
            "Limit": limit,
            "StartIndex": offset,
            "Recursive": str(recursive).lower(),
            "SortOrder": sort_order,
        }
        if include_types:
            params["IncludeItemTypes"] = include_types
        data = self.get_json(self._path("/Items"), params=params)
        return data.get("Items", [])

    def get_item_details(self, item_id: str) -> Dict[str, Any]:
        return self.get_json(self._path(f"/Items/{item_id}"))

    def upload_cover(self, library_id: str, image_base64: str, content_type: str = "image/png") -> None:
        self._request(
            "POST",
            self._path(f"/Items/{library_id}/Images/Primary"),
            data=image_base64,
            headers={"Content-Type": content_type},
        )
