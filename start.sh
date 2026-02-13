#!/bin/bash

# Library Poster 快速启动脚本（Webhook 模式）

echo "=== Library Poster 启动 ==="

# 检查配置文件
if [ ! -f "config.yaml" ]; then
    echo "错误：config.yaml 不存在"
    echo "请复制 config.example.yaml 为 config.yaml 并修改配置"
    exit 1
fi

# 检查 Python 版本
python3 --version

# 安装依赖（首次运行）
if ! python3 -c "import pydantic" 2>/dev/null; then
    echo "安装依赖..."
    pip3 install -r requirements.txt
fi

echo "启动 Webhook 监听器..."
python3 webhook.py
