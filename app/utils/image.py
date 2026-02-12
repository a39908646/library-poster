import base64
import hashlib
import time
from io import BytesIO
from pathlib import Path
from typing import Optional, Tuple

from requests import Session
from requests.exceptions import RequestException


def cache_key(url: str) -> str:
    return hashlib.md5(url.encode("utf-8")).hexdigest()


def get_cache_path(cache_dir: Path, url: str, ext: str = ".jpg") -> Path:
    cache_dir.mkdir(parents=True, exist_ok=True)
    return cache_dir / f"{cache_key(url)}{ext}"


def download_image(
    session: Session,
    url: str,
    cache_dir: Optional[Path] = None,
    timeout: int = 30,
    retries: int = 3,
    backoff_factor: float = 1.0,
) -> Tuple[bytes, Optional[Path]]:
    if cache_dir:
        cache_path = get_cache_path(cache_dir, url)
        if cache_path.exists():
            return cache_path.read_bytes(), cache_path
    else:
        cache_path = None

    for attempt in range(1, max(1, retries) + 1):
        if attempt > 1:
            time.sleep(backoff_factor * (2 ** (attempt - 1)))
        try:
            response = session.get(url, timeout=timeout)
            response.raise_for_status()
            data = response.content
            if cache_path:
                cache_path.write_bytes(data)
            return data, cache_path
        except RequestException:
            if attempt >= retries:
                raise
    raise RuntimeError(f"Failed to download image: {url}")


def convert_image_bytes(image_bytes: bytes, fmt: str = "PNG") -> bytes:
    from PIL import Image
    with Image.open(BytesIO(image_bytes)) as img:
        buffer = BytesIO()
        img.save(buffer, format=fmt)
        return buffer.getvalue()


def image_bytes_to_base64(image_bytes: bytes) -> str:
    return base64.b64encode(image_bytes).decode("ascii")
