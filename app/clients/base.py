import logging
import time
from typing import Any, Dict, Optional

import requests
from requests import Response, Session
from requests.exceptions import RequestException

from app.utils.http import join_url


class HTTPClientError(RuntimeError):
    def __init__(
        self,
        message: str,
        status_code: Optional[int] = None,
        url: str = "",
        response_text: str = "",
    ) -> None:
        super().__init__(message)
        self.status_code = status_code
        self.url = url
        self.response_text = response_text


class BaseClient:
    def __init__(
        self,
        base_url: str,
        api_key: str,
        timeout: int = 30,
        proxies: Optional[Dict[str, str]] = None,
        retries: int = 3,
        backoff_factor: float = 1.0,
        user_agent: str = "library-poster/1.0",
        logger: Optional[logging.Logger] = None,
    ) -> None:
        self.base_url = base_url.rstrip("/")
        self.api_key = api_key
        self.timeout = timeout
        self.retries = max(1, retries)
        self.backoff_factor = max(0.0, backoff_factor)
        self.session: Session = requests.Session()
        self.session.headers.update({"User-Agent": user_agent})
        if proxies:
            self.session.proxies.update(proxies)
        self.logger = logger or logging.getLogger(self.__class__.__name__)

    def close(self) -> None:
        self.session.close()

    def _request(
        self,
        method: str,
        path: str,
        params: Optional[Dict[str, Any]] = None,
        data: Any = None,
        json: Any = None,
        headers: Optional[Dict[str, str]] = None,
        stream: bool = False,
    ) -> Response:
        url = join_url(self.base_url, path)
        request_params = dict(params or {})
        request_params.setdefault("api_key", self.api_key)
        request_headers = dict(headers or {})

        for attempt in range(1, self.retries + 1):
            if attempt > 1:
                delay = self.backoff_factor * (2 ** (attempt - 1))
                time.sleep(delay)
            try:
                response = self.session.request(
                    method=method,
                    url=url,
                    params=request_params,
                    data=data,
                    json=json,
                    headers=request_headers,
                    timeout=self.timeout,
                    stream=stream,
                )
            except RequestException as exc:
                self.logger.warning("HTTP request failed: %s", exc)
                if attempt >= self.retries:
                    raise HTTPClientError(
                        f"Request failed after {self.retries} attempts",
                        url=url,
                    ) from exc
                continue

            if response.status_code in {429, 500, 502, 503, 504} and attempt < self.retries:
                self.logger.warning(
                    "HTTP %s %s returned %s, body: %s, retrying (%s/%s)",
                    method,
                    url,
                    response.status_code,
                    response.text[:200],
                    attempt,
                    self.retries,
                )
                continue

            if not response.ok:
                raise HTTPClientError(
                    f"HTTP {response.status_code} for {url}: {response.text[:200]}",
                    status_code=response.status_code,
                    url=url,
                    response_text=response.text[:500],
                )

            return response

        raise HTTPClientError(f"Request failed for {url}", url=url)

    def get_json(
        self,
        path: str,
        params: Optional[Dict[str, Any]] = None,
    ) -> Dict[str, Any]:
        response = self._request("GET", path, params=params)
        try:
            return response.json()
        except ValueError as exc:
            raise HTTPClientError(
                "Failed to decode JSON response",
                status_code=response.status_code,
                url=response.url,
                response_text=response.text[:500],
            ) from exc
