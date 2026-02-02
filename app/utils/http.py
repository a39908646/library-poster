from typing import Dict, Optional


def standardize_base_url(url: str) -> str:
    cleaned = url.strip()
    if not cleaned:
        return ""
    if "://" not in cleaned:
        cleaned = f"http://{cleaned}"
    return cleaned.rstrip("/")


def join_url(base_url: str, path: str) -> str:
    base = standardize_base_url(base_url)
    if not path:
        return base
    suffix = path if path.startswith("/") else f"/{path}"
    return f"{base}{suffix}"


def build_proxies(proxy: str) -> Optional[Dict[str, str]]:
    cleaned = proxy.strip()
    if not cleaned:
        return None
    if "://" not in cleaned:
        cleaned = f"http://{cleaned}"
    return {"http": cleaned, "https": cleaned}


def apply_github_proxy(url: str, github_proxy: str) -> str:
    if not github_proxy:
        return url
    base = standardize_base_url(github_proxy)
    return f"{base}/{url.lstrip('/')}"
