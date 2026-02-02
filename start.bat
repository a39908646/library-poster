@echo off
REM Library Poster 快速启动脚本 (Windows)

echo === Library Poster 启动脚本 ===

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

REM 检查虚拟环境
if not exist "venv" (
    echo 创建虚拟环境...
    python -m venv venv
)

echo 激活虚拟环境...
call venv\Scripts\activate.bat

echo 安装依赖...
pip install -r requirements.txt

echo 启动应用...
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
