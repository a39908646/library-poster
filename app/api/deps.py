import os
from typing import Optional

from fastapi import Header, HTTPException, status


def require_admin_token(
    x_admin_token: Optional[str] = Header(default=None, alias="X-Admin-Token"),
):
    """验证管理员 Token（可选启用）"""
    expected = os.getenv("LIBRARY_POSTER_ADMIN_TOKEN")
    if not expected:
        # 未配置 token 时跳过验证（开发模式）
        return
    if x_admin_token != expected:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthorized")
