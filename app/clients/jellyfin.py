from typing import Any, Dict, List

from app.clients.emby import EmbyClient


class JellyfinClient(EmbyClient):
    api_prefix = ""

    def get_libraries(self) -> List[Dict[str, Any]]:
        data = self.get_json(self._path("/Library/VirtualFolders"))
        if isinstance(data, list):
            return data
        return data.get("Items", [])
