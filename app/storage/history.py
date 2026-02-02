import json
import logging
from datetime import datetime
from pathlib import Path
from typing import Dict, Optional

logger = logging.getLogger(__name__)


class CoverHistory:
    def __init__(self, history_file: Path):
        self.history_file = history_file
        self.history_file.parent.mkdir(parents=True, exist_ok=True)
        self._data: Dict = self._load()

    def _load(self) -> Dict:
        if self.history_file.exists():
            try:
                with open(self.history_file, "r", encoding="utf-8") as f:
                    return json.load(f)
            except Exception as e:
                logger.error(f"Failed to load history: {e}")
                return {}
        return {}

    def _save(self):
        try:
            with open(self.history_file, "w", encoding="utf-8") as f:
                json.dump(self._data, f, ensure_ascii=False, indent=2)
        except Exception as e:
            logger.error(f"Failed to save history: {e}")

    def get(self, server: str, library_id: str, item_id: str) -> Optional[Dict]:
        return self._data.get(server, {}).get(library_id, {}).get(item_id)

    def set(self, server: str, library_id: str, item_id: str, tag: str):
        if server not in self._data:
            self._data[server] = {}
        if library_id not in self._data[server]:
            self._data[server][library_id] = {}
        self._data[server][library_id][item_id] = {
            "tag": tag,
            "timestamp": datetime.now().isoformat()
        }
        self._save()

    def should_update(self, server: str, library_id: str, item_id: str, current_tag: str) -> bool:
        record = self.get(server, library_id, item_id)
        if not record:
            return True
        return record.get("tag") != current_tag

    def clear(self, server: Optional[str] = None, library_id: Optional[str] = None):
        if server is None:
            self._data = {}
        elif library_id is None:
            self._data.pop(server, None)
        else:
            self._data.get(server, {}).pop(library_id, None)
        self._save()
