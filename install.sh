#!/bin/bash
# 轻量级部署脚本 - NAS 优化版

set -e

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SERVICE_USER="${SERVICE_USER:-$(whoami)}"

echo "=== Library Poster 轻量级安装 ==="
echo "项目目录: $PROJECT_DIR"
echo "运行用户: $SERVICE_USER"
echo ""

# 1. 检查 Python 环境
echo "[1/5] 检查 Python 环境..."
if ! command -v python3 &> /dev/null; then
    echo "错误: 未找到 python3"
    exit 1
fi
PYTHON_VERSION=$(python3 --version | awk '{print $2}')
echo "Python 版本: $PYTHON_VERSION"

# 2. 安装依赖
echo "[2/5] 安装 Python 依赖..."
cd "$PROJECT_DIR"
pip3 install -r requirements.txt --user

# 3. 检查配置文件
echo "[3/5] 检查配置文件..."
if [ ! -f "$PROJECT_DIR/config.yaml" ]; then
    echo "警告: config.yaml 不存在，从示例复制..."
    cp "$PROJECT_DIR/config.example.yaml" "$PROJECT_DIR/config.yaml"
    echo "请编辑 config.yaml 配置服务器信息"
fi

# 4. 创建 systemd 服务（可选）
echo "[4/5] 配置 systemd 服务..."
if command -v systemctl &> /dev/null; then
    # Webhook 监听服务
    cat > /tmp/library-poster-webhook.service <<EOF
[Unit]
Description=Library Poster Webhook Listener
After=network.target

[Service]
Type=simple
User=$SERVICE_USER
WorkingDirectory=$PROJECT_DIR
ExecStart=/usr/bin/python3 $PROJECT_DIR/webhook.py
Restart=on-failure
RestartSec=10

# 资源限制
MemoryMax=100M
CPUQuota=20%

[Install]
WantedBy=multi-user.target
EOF

    # 定时更新服务
    cat > /tmp/library-poster-update.service <<EOF
[Unit]
Description=Library Poster Cover Update
After=network.target

[Service]
Type=oneshot
User=$SERVICE_USER
WorkingDirectory=$PROJECT_DIR
ExecStart=/usr/bin/python3 $PROJECT_DIR/update.py
EOF

    # 定时器（每天凌晨 2 点）
    cat > /tmp/library-poster-update.timer <<EOF
[Unit]
Description=Library Poster Daily Update Timer

[Timer]
OnCalendar=daily
OnCalendar=02:00
Persistent=true

[Install]
WantedBy=timers.target
EOF

    echo "systemd 服务文件已生成在 /tmp/"
    echo "请手动复制到 /etc/systemd/system/ 并启用："
    echo ""
    echo "  sudo cp /tmp/library-poster-*.{service,timer} /etc/systemd/system/"
    echo "  sudo systemctl daemon-reload"
    echo "  sudo systemctl enable --now library-poster-webhook.service"
    echo "  sudo systemctl enable --now library-poster-update.timer"
    echo ""
else
    echo "未检测到 systemd，跳过服务配置"
fi

# 5. 创建 cron 任务（备选方案）
echo "[5/5] 配置 cron 任务（备选）..."
CRON_CMD="0 2 * * * cd $PROJECT_DIR && /usr/bin/python3 $PROJECT_DIR/update.py >> /tmp/library-poster.log 2>&1"
echo "建议的 cron 配置（每天凌晨 2 点）："
echo "  $CRON_CMD"
echo ""
echo "添加到 crontab: crontab -e"
echo ""

echo "=== 安装完成 ==="
echo ""
echo "下一步："
echo "1. 编辑配置: vi $PROJECT_DIR/config.yaml"
echo "2. 测试更新: python3 $PROJECT_DIR/update.py"
echo "3. 启动 Webhook: python3 $PROJECT_DIR/webhook.py"
echo "4. 配置 Emby/Jellyfin Webhook: http://your-nas-ip:8000/webhook/emby"
