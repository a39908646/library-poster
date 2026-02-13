# Library Poster - 轻量级媒体库封面生成器

**极致轻量的 NAS 部署方案**

一个专为 NAS 设计的轻量级媒体库封面生成器，支持 Emby 和 Jellyfin。

## 特性

- ✅ **极致轻量**：空闲内存 <30MB，更新时 <80MB
- ✅ **无 Web UI**：纯后台运行，资源占用最小化
- ✅ **Webhook 支持**：自动响应新作入库通知
- ✅ **定时更新**：systemd timer 或 cron 定时更新
- ✅ **多种风格**：single_1、single_2、multi_1 三种封面风格
- ✅ **资源限制**：systemd 自动限制内存和 CPU
- ✅ **开箱即用**：一键安装脚本

## 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/yourusername/library-poster.git
cd library-poster
```

### 2. 编辑配置

编辑 `config.yaml`：

```yaml
servers:
  - name: "我的 Emby"
    type: "emby"
    url: "http://192.168.1.100:8096"
    api_key: "你的API密钥"

webhook:
  enabled: true
  delay: 60

scheduler:
  enabled: true
  cron: "0 2 * * *"
```

### 3. 运行安装

```bash
chmod +x install.sh
./install.sh
```

选择安装方式：
- **1) systemd（推荐）**：自动启动，资源限制
- **2) cron**：仅定时更新
- **3) 手动**：自己控制

### 4. 配置 Webhook（可选）

在 Emby/Jellyfin 管理后台：
1. 安装 "Webhook" 插件
2. 配置 URL：
   - Emby: `http://your-nas-ip:8000/webhook/emby`
   - Jellyfin: `http://your-nas-ip:8000/webhook/jellyfin`
3. 选择事件：`library.new`, `item.added`

## 使用说明

### systemd 方式

```bash
# 启动服务
sudo systemctl start library-poster-webhook
sudo systemctl start library-poster-update.timer

# 查看状态
sudo systemctl status library-poster-webhook
sudo systemctl list-timers library-poster-update

# 查看日志
sudo journalctl -u library-poster-webhook -f
```

### cron 方式

```bash
# 编辑定时任务
crontab -e

# 添加（每天凌晨 2 点）
0 2 * * * cd /path/to/library-poster && ./update.py

# 启动 Webhook 监听（后台）
nohup ./webhook.py > /tmp/webhook.log 2>&1 &
```

### 手动触发

```bash
# 手动更新所有封面
./update.py

# 启动 Webhook 监听
./webhook.py
```

## 配置说明

### 服务器配置

```yaml
servers:
  - name: "服务器名称"
    type: "emby"  # 或 "jellyfin"
    url: "http://localhost:8096"
    api_key: "your_api_key"
    exclude_libraries:  # 排除的媒体库
      - "音乐"
      - "照片"
```

### 封面风格

- `single_1`: 单图风格 1（旋转卡片）
- `single_2`: 单图风格 2
- `multi_1`: 多图风格

### Webhook 配置

```yaml
webhook:
  enabled: true   # 是否启用
  delay: 60       # 延迟处理秒数
```

### 定时任务配置

```yaml
scheduler:
  enabled: true
  cron: "0 2 * * *"  # Cron 表达式
```

## 资源占用

实测数据（群晖 DS920+）：

| 状态 | 内存 | CPU |
|------|------|-----|
| 空闲 | ~30MB | <1% |
| 更新中 | ~80MB | <5% |
| 完整版对比 | 120MB+ | 10%+ |

## 常见问题

### Webhook 无响应

```bash
# 检查端口
netstat -tlnp | grep 8000

# 检查防火墙
sudo ufw allow 8000

# 测试连接
curl http://localhost:8000/health
```

### 定时任务未执行

```bash
# 查看 cron 日志
grep CRON /var/log/syslog

# 查看 systemd timer
systemctl list-timers --all
```

### 修改更新频率

编辑 cron 表达式：
- `0 2 * * *` - 每天凌晨 2 点
- `0 */6 * * *` - 每 6 小时
- `0 */1 * * *` - 每小时

## 兼容性

### 已测试平台

- ✅ 群晖 DSM 7.x（systemd）
- ✅ 威联通 QTS 5.x（systemd）
- ✅ TrueNAS（FreeBSD，使用 cron）
- ✅ Unraid（Slackware，使用 cron）

### 系统要求

- Python 3.11+
- Linux/Unix 系统
- 50MB 可用内存
- 网络访问权限

## 技术栈

- **语言**: Python 3.11
- **图像处理**: Pillow
- **配置管理**: PyYAML + Pydantic
- **HTTP 服务器**: Python http.server（内置）
- **定时任务**: systemd timer / cron
- **部署**: 原生 Linux 服务

## 从完整版迁移

如果你之前使用过完整版（带 Web UI），迁移步骤：

1. 备份 `config.yaml`
2. 停止完整版服务
3. 重新克隆此轻量版
4. 复制配置文件
5. 运行 `./install.sh`

## 许可证

MIT License

## 致谢

- 原 MoviePilot 插件作者：[justzerock](https://github.com/justzerock/MoviePilot-Plugins)
- 封面生成算法参考：[jellyfin-library-poster](https://github.com/HappyQuQu/jellyfin-library-poster)

## 贡献

欢迎提交 Issue 和 Pull Request！

---

**为什么选择轻量版？**

- 💚 **低功耗**：适合 24/7 运行的 NAS
- 💚 **简单可靠**：无复杂依赖，易于维护
- 💚 **资源友好**：不占用宝贵的 NAS 资源
- 💚 **专注核心**：只做封面生成，做到极致