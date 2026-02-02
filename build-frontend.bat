@echo off
REM 前端构建脚本 (Windows)

echo === Library Poster 前端构建 ===

cd frontend

echo 检查 Node.js...
node --version
if errorlevel 1 (
    echo 错误：未找到 Node.js
    exit /b 1
)

echo 安装依赖...
call npm install

echo 构建前端...
call npm run build

echo 构建完成！静态文件已输出到 ../app/static/

cd ..
