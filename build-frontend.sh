#!/bin/bash

# 前端构建脚本

echo "=== Library Poster 前端构建 ==="

cd frontend

echo "检查 Node.js..."
node --version || { echo "错误：未找到 Node.js"; exit 1; }

echo "安装依赖..."
npm install

echo "构建前端..."
npm run build

echo "构建完成！静态文件已输出到 ../app/static/"

cd ..
