#!/bin/bash

# Library Poster 快速启动脚本

echo "=== Library Poster 启动脚本 ==="

# 检查配置文件
if [ ! -f "config.yaml" ]; then
    echo "错误：config.yaml 不存在"
    echo "请复制 config.example.yaml 为 config.yaml 并修改配置"
    exit 1
fi

# 检查 Python 版本
python_version=$(python3 --version 2>&1 | awk '{print $2}')
echo "Python 版本: $python_version"

# 检查依赖
if [ ! -d "venv" ]; then
    echo "创建虚拟环境..."
    python3 -m venv venv
fi

echo "激活虚拟环境..."
source venv/bin/activate

echo "安装依赖..."
pip install -r requirements.txt

echo "启动应用..."
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
