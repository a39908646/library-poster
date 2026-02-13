"""测量每个依赖的内存增量"""
import os

def get_rss_kb():
    with open(f"/proc/{os.getpid()}/status") as f:
        for line in f:
            if line.startswith("VmRSS:"):
                return int(line.split()[1])
    return 0

results = []
baseline = get_rss_kb()

# 按 main.py 的实际 import 顺序逐个测量
imports = [
    ("logging", "import logging"),
    ("pathlib", "from pathlib import Path"),
    ("contextlib", "from contextlib import asynccontextmanager"),
    ("pydantic", "import pydantic"),
    ("pydantic-settings", "import pydantic_settings"),
    ("yaml", "import yaml"),
    ("fastapi", "from fastapi import FastAPI"),
    ("starlette (ASGI)", "from starlette.responses import JSONResponse"),
    ("uvicorn", "import uvicorn"),
    ("requests", "import requests"),
    ("apscheduler", "from apscheduler.schedulers.background import BackgroundScheduler"),
    ("pytz", "import pytz"),
    ("python-multipart", "import multipart"),
    ("asyncio", "import asyncio"),
    # lazy-loaded (测量但标注)
    ("pillow (lazy)", "from PIL import Image"),
    ("numpy (lazy)", "import numpy"),
]

prev = get_rss_kb()
for name, stmt in imports:
    try:
        exec(stmt)
    except ImportError:
        results.append((name, 0, stmt, "NOT INSTALLED"))
        continue
    curr = get_rss_kb()
    delta = curr - prev
    results.append((name, delta, stmt, ""))
    prev = curr

total = get_rss_kb() - baseline

# 按内存占用从高到低排序
results.sort(key=lambda x: x[1], reverse=True)

print(f"{'排名':<4} {'依赖':<22} {'增量(KB)':<12} {'增量(MB)':<10} {'备注'}")
print("-" * 75)
for i, (name, delta, stmt, note) in enumerate(results, 1):
    mb = delta / 1024
    print(f"{i:<4} {name:<22} {delta:<12} {mb:<10.1f} {note}")

print("-" * 75)
print(f"     {'合计':<22} {total:<12} {total/1024:<10.1f}")
