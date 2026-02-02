# Library Poster - 独立媒体库封面生成器

一个轻量级、独立运行的媒体库封面生成器，支持 Emby 和 Jellyfin。

## 特性

- ✅ **独立运行**：无需 MoviePilot，直接连接 Emby/Jellyfin API
- ✅ **轻量级**：空闲内存占用 <120MB（vs MoviePilot >500MB）
- ✅ **多种风格**：支持 single_1、single_2、multi_1 三种封面风格
- ✅ **定时任务**：支持 Cron 表达式定时更新封面
- ✅ **Webhook 支持**：监听 Emby/Jellyfin 事件自动更新
- ✅ **RESTful API**：提供完整的 API 接口
- ✅ **Web UI**：Vue 3 现代化配置界面
- ✅ **Docker 部署**：一键部署，开箱即用

## 快速开始

### 使用 Docker Compose（推荐）

1. 克隆仓库：
```bash
git clone https://github.com/yourusername/library-poster.git
cd library-poster
```

2. 编辑配置文件 `config.yaml`：
```yaml
servers:
  - name: "我的 Emby"
    type: "emby"
    url: "http://localhost:8096"
    api_key: "your_api_key_here"
```

3. 启动服务：
```bash
docker-compose up -d
```

4. 访问 Web UI：
```
http://localhost:8000
```

或访问 API 文档：
```
http://localhost:8000/docs
```

### 本地运行

1. 安装依赖：
```bash
pip install -r requirements.txt
```

2. 编辑 `config.yaml` 配置文件

3. 启动应用：
```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

## 配置说明

### 服务器配置

```yaml
servers:
  - name: "服务器名称"
    type: "emby"  # 或 "jellyfin"
    url: "http://localhost:8096"
    api_key: "your_api_key_here"
    exclude_libraries:  # 可选，排除的媒体库
      - "音乐"
      - "照片"
```

### 封面风格

- `single_1`: 单图风格 1（旋转卡片）
- `single_2`: 单图风格 2
- `multi_1`: 九宫格风格

### 定时任务

```yaml
scheduler:
  enabled: true
  cron: "0 2 * * *"  # 每天凌晨 2 点执行
```

### Webhook 配置

1. 在 Emby/Jellyfin 中安装 Webhook 插件
2. 配置 Webhook URL：`http://your-server:8000/webhook/emby` 或 `/webhook/jellyfin`
3. 选择事件类型：`library.new`, `item.added`

## API 接口

### 健康检查
```
GET /health
```

### 手动触发封面生成
```
POST /api/generate
{
  "server_name": "我的 Emby",
  "library_name": "电影"  # 可选
}
```

### 获取配置
```
GET /api/config
```

### 重新加载配置
```
POST /api/config/reload
```

### 查看状态
```
GET /api/status
```

## 从 MoviePilot 插件迁移

1. 导出 MoviePilot 插件配置
2. 将配置映射到 `config.yaml`：
   - `selected_servers` → `servers`
   - `exclude_libraries` → `servers[].exclude_libraries`
   - `cover_style` → `cover.style`
   - `cron` → `scheduler.cron`
3. 启动 Library Poster
4. 禁用 MoviePilot 中的封面生成插件

## 开发状态

### 已完成
- ✅ Phase 1: 项目结构初始化
- ✅ Phase 2: 核心依赖替换（API 客户端）
- ✅ Phase 3: 封面生成器迁移
- ✅ Phase 4-6: FastAPI 应用完整实现
- ✅ Phase 7: Web 配置界面（Vue 3）
- ✅ Phase 8: Docker 化
- ✅ Phase 9: 核心功能完善

### 进行中
- 🚧 性能优化和压力测试
- 🚧 更多封面风格

### 待实现
- ⏳ Web UI 在线配置编辑
- ⏳ 封面预览功能
- ⏳ 批量操作支持

## 技术栈

- **后端**: FastAPI + Python 3.11
- **图像处理**: Pillow + NumPy
- **调度**: APScheduler
- **前端**: Vue 3 + Vite（开发中）
- **部署**: Docker + Docker Compose

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License

## 致谢

- 原 MoviePilot 插件作者：[justzerock](https://github.com/justzerock/MoviePilot-Plugins)
- 封面生成算法参考：[jellyfin-library-poster](https://github.com/HappyQuQu/jellyfin-library-poster)
