@echo off
REM Library Poster 快速启动脚本 (Windows, Webhook 模式)

echo === Library Poster 启动 ===

REM 检查配置文件
if not exist "config.yaml" (
    echo 错误：config.yaml 不存在
    echo 请复制 config.example.yaml 为 config.yaml 并修改配置
    exit /b 1
)

REM 检查 Python
python --version
if errorlevel 1 (
    echo 错误：未找到 Python
    exit /b 1
)

echo 安装依赖...
pip install -r requirements.txt

echo 启动 Webhook 监听器...
python webhook.py
