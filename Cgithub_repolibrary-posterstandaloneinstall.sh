#!/bin/bash
# Library Poster 轻量版安装脚本

set -e

echo "=== Library Poster 轻量版安装 ==="
echo ""

# 检查 Python
if ! command -v python3 &> /dev/null; then
    echo "错误: 未找到 python3，请先安装 Python 3.11+"
    exit 1
fi

# 获取项目路径
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_DIR="$( cd "$SCRIPT_DIR/.." && pwd )"

echo "项目路径: $PROJECT_DIR"
echo ""

# 安装依赖
echo "正在安装 Python 依赖..."
pip3 install -r "$PROJECT_DIR/requirements.txt" --user
echo "依赖安装完成"
echo ""

# 赋予执行权限
chmod +x "$SCRIPT_DIR/update.py"
chmod +x "$SCRIPT_DIR/webhook.py"

# 选择安装方式
echo "请选择安装方式:"
echo "1) systemd（推荐，自动启动）"
echo "2) cron（仅定时更新）"
echo "3) 手动（不配置自动启动）"
read -p "请输入选项 [1-3]: " choice

case $choice in
    1)
        echo ""
        echo "=== 配置 systemd 服务 ==="
        
        cat > /tmp/library-poster-webhook.service << SEOF
[Unit]
Description=Library Poster Webhook Listener
After=network.target

[Service]
Type=simple
User=$USER
WorkingDirectory=$PROJECT_DIR
ExecStart=$SCRIPT_DIR/webhook.py
Restart=always
RestartSec=10
StandardOutput=journal
StandardError=journal
MemoryMax=100M
CPUQuota=20%

[Install]
WantedBy=multi-user.target
SEOF

        cat > /tmp/library-poster-update.service << SEOF
[Unit]
Description=Library Poster Cover Update
After=network.target

[Service]
Type=oneshot
User=$USER
WorkingDirectory=$PROJECT_DIR
ExecStart=$SCRIPT_DIR/update.py
StandardOutput=journal
StandardError=journal
SEOF

        cat > /tmp/library-poster-update.timer << SEOF
[Unit]
Description=Library Poster Update Timer
Requires=library-poster-update.service

[Timer]
OnCalendar=daily
OnCalendar=02:00
Persistent=true

[Install]
WantedBy=timers.target
SEOF

        echo "服务文件已生成在 /tmp/"
        echo ""
        echo "请以 root 权限执行以下命令完成安装:"
        echo "  sudo cp /tmp/library-poster-*.* /etc/systemd/system/"
        echo "  sudo systemctl daemon-reload"
        echo "  sudo systemctl enable --now library-poster-webhook.service"
        echo "  sudo systemctl enable --now library-poster-update.timer"
        ;;

    2)
        echo ""
        echo "=== 配置 cron 定时任务 ==="
        echo "请添加到 crontab (crontab -e):"
        echo "  0 2 * * * cd $PROJECT_DIR && $SCRIPT_DIR/update.py"
        ;;

    3)
        echo ""
        echo "=== 手动使用 ==="
        echo "定时更新: $SCRIPT_DIR/update.py"
        echo "Webhook: $SCRIPT_DIR/webhook.py"
        ;;
esac

echo ""
echo "=== 安装完成 ==="
