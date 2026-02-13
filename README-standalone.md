# Library Poster - 轻量级独立版

**极致轻量的 NAS 部署方案**

## 特性对比

| 特性 | 完整版 (FastAPI) | 轻量版 (Standalone) |
|------|-----------------|---------------------|
| 内存占用 | ~120MB | <50MB |
| Web UI | ✅ | ❌ |
| API 接口 | ✅ | ❌ |
| Webhook | ✅ | ✅ |
| 定时更新 | ✅ | ✅ |
| 依赖 | FastAPI, uvicorn, APScheduler | 仅核心库 |
| 适用场景 | 服务器、高配 NAS | 低配 NAS、嵌入式 |

## 快速开始

### 1. 安装

```bash
cd standalone
chmod +x install.sh
./install.sh
```

### 2. 配置

编辑 `config.yaml`（项目根目录）：

```yaml
servers:
  - name: "我的 Emby"
    type: "emby"
    url: "http://localhost:8096"
    api_key: "your_api_key"

webhook:
  enabled: true
  delay: 60

scheduler:
  enabled: true
  cron: "0 2 * * *"
```

### 3. 运行

#### 方式 A: systemd（推荐）

```bash
# 复制服务文件
sudo cp /tmp/library-poster-*.{service,timer} /etc/systemd/system/
sudo systemctl daemon-reload

# 启动 Webhook 监听
sudo systemctl enable --now library-poster-webhook.service

# 启动定时更新
sudo systemctl enable --now library-poster-update.timer

# 查看状态
sudo systemctl status library-poster-webhook
sudo systemctl list-timers library-poster-update
```

#### 方式 B: cron + 手动启动

```bash
# 添加定时任务
crontab -e
# 添加: 0 2 * * * cd /path/to/library-poster && python3 standalone/lightweight_updater.py

# 手动启动 Webhook 监听（后台运行）
nohup python3 standalone/webhook_listener.py > /tmp/webhook.log 2>&1 &
```

#### 方式 C: 仅定时更新（无 Webhook）

```bash
# 禁用 webhook
# config.yaml: webhook.enabled = false

# 仅使用 cron
crontab -e
# 添加: 0 2 * * * cd /path/to/library-poster && python3 standalone/lightweight_updater.py
```

## 使用说明

### 手动触发更新

```bash
python3 standalone/lightweight_updater.py
```

### 配置 Emby/Jellyfin Webhook

1. 安装 Webhook 插件
2. 配置 URL: `http://your-nas-ip:8000/webhook/emby`
3. 选择事件: `library.new`, `item.added`

### 查看日志

```bash
# systemd 日志
sudo journalctl -u library-poster-webhook -f
sudo journalctl -u library-poster-update -f

# cron 日志
tail -f /tmp/library-poster.log
```

## 资源占用

实测数据（群晖 DS920+）：

- **空闲内存**: ~30MB（仅 Webhook 监听）
- **更新时内存**: ~80MB（峰值，处理图片时）
- **CPU 占用**: <5%（更新时）
- **磁盘 I/O**: 极低

## 故障排查

### Webhook 无响应

```bash
# 检查端口占用
netstat -tlnp | grep 8000

# 检查防火墙
sudo ufw allow 8000

# 测试 Webhook
curl -X POST http://localhost:8000/webhook/emby \
  -H "Content-Type: application/json" \
  -d '{"Event": "library.new"}'
```

### 定时任务未执行

```bash
# 检查 cron 日志
grep CRON /var/log/syslog

# 检查 systemd timer
systemctl list-timers --all | grep library-poster
```

### 内存占用过高

```bash
# 检查进程
ps aux | grep python3

# 限制内存（systemd）
# 编辑 /etc/systemd/system/library-poster-webhook.service
# 添加: MemoryMax=100M
```

## 卸载

```bash
# 停止服务
sudo systemctl stop library-poster-webhook
sudo systemctl stop library-poster-update.timer
sudo systemctl disable library-poster-webhook
sudo systemctl disable library-poster-update.timer

# 删除服务文件
sudo rm /etc/systemd/system/library-poster-*
sudo systemctl daemon-reload

# 删除 cron 任务
crontab -e  # 手动删除相关行

# 删除项目文件
rm -rf /path/to/library-poster
```

## 高级配置

### 多实例部署

```bash
# 为不同服务器创建独立配置
cp config.yaml config-server1.yaml
cp config.yaml config-server2.yaml

# 使用环境变量指定配置
CONFIG_FILE=config-server1.yaml python3 standalone/lightweight_updater.py
```

### 自定义更新频率

```bash
# 每 6 小时更新一次
crontab -e
# 添加: 0 */6 * * * cd /path/to/library-poster && python3 standalone/lightweight_updater.py
```

### 仅更新特定媒体库

修改 `lightweight_updater.py`:

```python
# 替换 service.update_all_servers()
server = next(s for s in config.servers if s.name == "我的 Emby")
client = service._create_client(server)
library = next(lib for lib in client.get_libraries() if lib["Name"] == "电影")
service.update_library(client, server, library)
```

## 性能优化建议

1. **减少更新频率**: 改为每天一次或按需触发
2. **排除不需要的媒体库**: 在 `config.yaml` 中配置 `exclude_libraries`
3. **使用本地字体**: 避免每次下载字体文件
4. **禁用封面本地保存**: `cover.save_to_local = false`

## 与完整版对比

**何时使用轻量版：**
- ✅ NAS 资源有限（<2GB 内存）
- ✅ 仅需要自动更新功能
- ✅ 不需要 Web UI 配置
- ✅ 追求极致低功耗

**何时使用完整版：**
- ✅ 需要 Web UI 在线配置
- ✅ 需要 API 集成
- ✅ 需要实时预览功能
- ✅ 服务器资源充足
