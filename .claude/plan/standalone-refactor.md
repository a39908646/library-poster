# 📋 实施计划：MediaCoverGenerator 独立化重构

## 任务类型
- [x] 后端 (→ Codex)
- [x] 前端 (→ Gemini)
- [x] 全栈 (→ 并行)

---

## 技术方案

### 核心架构
将 MoviePilot 插件改造为**轻量级 FastAPI 微服务**，直接连接 Emby/Jellyfin API，通过 Webhook + 定时任务实现自动化封面生成。

### 依赖替换映射

| MoviePilot 组件 | 替代方案 |
|----------------|---------|
| `_PluginBase` | 配置加载器 + 数据目录管理 |
| `settings` | Pydantic Settings (从 `config.yaml` 加载) |
| `MediaServerChain/Helper` | 自定义 `EmbyClient`/`JellyfinClient` |
| `eventmanager` | FastAPI Webhook 端点 |
| `RequestUtils` | `requests.Session` (带重试) |
| `UrlUtils` | 简单 URL 标准化函数 |
| `app.log.logger` | Python `logging` 模块 |
| 插件配置存储 | 本地 JSON 文件 (cover_history.json) |

### 新架构模块

```
library-poster/
├── app/
│   ├── __init__.py
│   ├── main.py              # FastAPI 应用入口
│   ├── config.py            # Pydantic 配置模型
│   ├── api/                 # API 路由
│   │   ├── __init__.py
│   │   ├── config.py        # 配置管理 API
│   │   ├── generate.py      # 封面生成 API
│   │   └── status.py        # 状态查询 API
│   ├── clients/             # Emby/Jellyfin API 客户端
│   │   ├── __init__.py
│   │   ├── base.py          # 基础客户端
│   │   ├── emby.py          # Emby 客户端
│   │   └── jellyfin.py      # Jellyfin 客户端
│   ├── scheduler/           # 定时任务调度
│   │   ├── __init__.py
│   │   └── jobs.py          # APScheduler 任务
│   ├── webhook/             # Webhook 处理器
│   │   ├── __init__.py
│   │   └── handlers.py      # 事件处理逻辑
│   ├── generator/           # 封面生成器
│   │   ├── __init__.py
│   │   ├── style_single_1.py
│   │   ├── style_single_2.py
│   │   └── style_multi_1.py
│   ├── storage/             # 持久化存储
│   │   ├── __init__.py
│   │   └── history.py       # 封面历史记录
│   └── utils/               # 工具函数
│       ├── __init__.py
│       ├── http.py          # HTTP 工具
│       └── image.py         # 图像处理工具
├── frontend/                # Web 配置界面
│   ├── src/
│   │   ├── main.js          # Vue 应用入口
│   │   ├── App.vue          # 根组件
│   │   ├── views/           # 页面组件
│   │   │   ├── Dashboard.vue    # 仪表盘
│   │   │   ├── Config.vue       # 配置页面
│   │   │   ├── Servers.vue      # 服务器管理
│   │   │   ├── Styles.vue       # 风格配置
│   │   │   └── History.vue      # 生成历史
│   │   ├── components/      # 通用组件
│   │   │   ├── ServerCard.vue
│   │   │   ├── StylePreview.vue
│   │   │   └── CronEditor.vue
│   │   ├── api/             # API 调用封装
│   │   │   └── client.js
│   │   └── router/          # 路由配置
│   │       └── index.js
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
├── config.yaml              # 主配置文件
├── requirements.txt         # Python 依赖
├── Dockerfile               # Docker 镜像
├── docker-compose.yml       # Docker Compose 配置
└── README.md                # 使用文档
```

---

## 实施步骤

### Phase 1: 项目结构初始化
**目标**：创建新的独立应用目录结构

1. **创建目录结构**
   - 创建 `app/` 及子目录（clients, scheduler, webhook, generator, storage, utils）
   - 创建配置文件模板 `config.yaml`
   - 创建 `requirements.txt`

2. **定义配置模型**
   - 使用 Pydantic 定义配置 Schema（`app/config.py`）
   - 映射原插件的所有配置项：
     - 服务器列表（Emby/Jellyfin URL、API Key）
     - 定时任务 Cron 表达式
     - 封面风格选择
     - 字体路径/URL
     - 自定义背景图目录
     - 排除的媒体库列表
     - 输出目录配置

**预期产物**：
- 完整的目录结构
- `config.yaml` 模板
- `app/config.py` 配置模型

---

### Phase 2: 核心依赖替换
**目标**：实现 Emby/Jellyfin API 客户端和工具函数

1. **实现 HTTP 客户端基类** (`app/clients/base.py`)
   - 封装 `requests.Session`
   - 实现重试机制（3 次重试，指数退避）
   - 支持代理配置
   - 统一错误处理

2. **实现 Emby 客户端** (`app/clients/emby.py`)
   - `get_libraries()`: 获取媒体库列表
   - `get_items(library_id, offset, limit)`: 获取媒体项
   - `get_item_details(item_id)`: 获取项目详情（含背景图）
   - `upload_cover(library_id, image_data)`: 上传封面

3. **实现 Jellyfin 客户端** (`app/clients/jellyfin.py`)
   - 继承 Emby 客户端，覆盖 API 路径差异
   - 处理 Jellyfin 特有的响应格式

4. **实现工具函数** (`app/utils/`)
   - `http.py`: URL 标准化、代理配置
   - `image.py`: 图片下载、缓存、格式转换

**预期产物**：
- 完整的 API 客户端实现
- 单元测试（可选）

---

### Phase 3: 封面生成器迁移
**目标**：将原插件的封面生成逻辑迁移到新架构

1. **迁移风格生成器**
   - 复制 `style_single_1.py`, `style_single_2.py`, `style_multi_1.py` 到 `app/generator/`
   - 移除所有 `app.*` 导入
   - 替换 `logger` 为标准 `logging`
   - 确保字体/图片路径从配置读取

2. **实现封面生成协调器** (`app/generator/__init__.py`)
   - `generate_cover(library, style, config)`: 统一入口
   - 根据风格选择调用对应生成器
   - 处理字体下载/缓存
   - 处理自定义背景图

3. **实现封面历史管理** (`app/storage/history.py`)
   - 使用 JSON 文件存储已生成封面的记录
   - 结构：`{server: {library_id: {item_id: {tag, timestamp}}}}`
   - 避免重复生成（通过 image tag 判断）

**预期产物**：
- 可独立运行的封面生成器
- 封面历史持久化

---

### Phase 4: 定时任务调度器
**目标**：实现 Cron 定时任务

1. **实现调度器** (`app/scheduler/jobs.py`)
   - 使用 APScheduler 的 `BackgroundScheduler`
   - 从配置读取 Cron 表达式
   - 定时任务逻辑：
     - 遍历所有配置的服务器
     - 获取媒体库列表（排除配置中的排除列表）
     - 为每个媒体库生成封面
     - 上传到服务器
     - 更新历史记录

2. **集成到 FastAPI 生命周期**
   - 在 `app/main.py` 的 `startup` 事件中启动调度器
   - 在 `shutdown` 事件中停止调度器

**预期产物**：
- 定时任务调度器
- 与 FastAPI 集成

---

### Phase 5: Webhook 事件处理
**目标**：实现 Webhook 接收器，替代 MoviePilot 事件系统

1. **定义 Webhook 端点** (`app/webhook/handlers.py`)
   - POST `/webhook/emby`: 接收 Emby 事件
   - POST `/webhook/jellyfin`: 接收 Jellyfin 事件
   - 解析事件类型（LibraryNew, ItemAdded 等）
   - 提取媒体项信息（item_id, library_id）

2. **实现事件处理逻辑**
   - 延迟处理（配置延迟时间，等待服务器扫描完成）
   - 查询媒体项详情
   - 生成封面
   - 上传封面
   - 更新历史记录

3. **配置 Emby/Jellyfin Webhook**
   - 文档说明如何在 Emby/Jellyfin 中配置 Webhook 插件
   - 推荐事件类型：`library.new`, `item.added`

**预期产物**：
- Webhook 端点实现
- 事件处理逻辑
- 配置文档

---

### Phase 6: FastAPI 应用构建
**目标**：构建完整的 FastAPI 应用

1. **实现主应用** (`app/main.py`)
   - 初始化 FastAPI 应用
   - 加载配置
   - 注册 Webhook 路由
   - 启动调度器
   - 健康检查端点：GET `/health`
   - 配置 CORS（允许前端访问）
   - 静态文件服务（托管前端构建产物）

2. **实现 API 路由** (`app/api/`)
   - **配置管理 API** (`config.py`):
     - GET `/api/config`: 获取当前配置
     - PUT `/api/config`: 更新配置
     - POST `/api/config/reload`: 重新加载配置
     - POST `/api/config/test-server`: 测试服务器连接
   - **封面生成 API** (`generate.py`):
     - POST `/api/generate`: 手动触发封面生成
     - GET `/api/generate/history`: 获取生成历史
     - DELETE `/api/generate/history/{id}`: 清除历史记录
   - **状态查询 API** (`status.py`):
     - GET `/api/status`: 查看调度器状态、资源占用
     - GET `/api/servers`: 获取已配置的服务器列表
     - GET `/api/libraries`: 获取指定服务器的媒体库列表

**预期产物**：
- 完整的 FastAPI 应用
- RESTful API 端点
- Swagger UI 文档（自动生成）

---

### Phase 7: Web 配置界面开发
**目标**：构建 Vue 3 前端配置界面

1. **项目初始化** (`frontend/`)
   - 使用 Vite + Vue 3 + Vue Router 创建项目
   - 安装 UI 组件库（推荐 Naive UI 或 Element Plus）
   - 配置 Axios 进行 API 调用
   - 配置代理（开发环境）

2. **核心页面开发**
   - **仪表盘** (`Dashboard.vue`):
     - 显示系统状态（运行时间、内存占用、任务统计）
     - 最近生成记录
     - 快速操作按钮（立即生成、重新加载配置）
   - **服务器管理** (`Servers.vue`):
     - 服务器列表（Emby/Jellyfin）
     - 添加/编辑/删除服务器
     - 测试连接功能
     - 媒体库选择（多选，支持排除）
   - **风格配置** (`Styles.vue`):
     - 封面风格选择（single_1, single_2, multi_1）
     - 风格预览（显示示例图片）
     - 字体配置（URL 或本地路径）
     - 自定义背景图目录
     - 标题配置（YAML 编辑器）
   - **定时任务** (`Config.vue`):
     - Cron 表达式编辑器（可视化）
     - 延迟时间配置
     - 事件监听开关
   - **生成历史** (`History.vue`):
     - 历史记录列表（表格）
     - 筛选（按服务器、媒体库、时间）
     - 预览生成的封面
     - 清除历史记录

3. **通用组件开发**
   - **ServerCard.vue**: 服务器卡片（显示状态、媒体库数量）
   - **StylePreview.vue**: 风格预览组件（显示示例封面）
   - **CronEditor.vue**: Cron 表达式可视化编辑器
   - **LogViewer.vue**: 实时日志查看器（WebSocket）

4. **API 客户端封装** (`api/client.js`)
   - 封装所有 API 调用
   - 统一错误处理
   - 请求/响应拦截器
   - Token 管理（如果需要认证）

5. **构建与集成**
   - 配置生产环境构建（`npm run build`）
   - 输出到 `app/static/` 目录
   - FastAPI 配置静态文件服务
   - 配置路由回退（SPA 路由支持）

**预期产物**：
- 完整的 Vue 3 前端应用
- 响应式设计（支持桌面和移动端）
- 与后端 API 完全集成

---

### Phase 8: Docker 化与部署
**目标**：提供 Docker 镜像和部署文档

1. **编写 Dockerfile（多阶段构建）**
   - **Stage 1: 前端构建**
     - 基础镜像：`node:18-alpine`
     - 复制 `frontend/` 目录
     - 安装依赖：`npm ci`
     - 构建前端：`npm run build`
     - 输出到 `/app/static`
   - **Stage 2: Python 应用**
     - 基础镜像：`python:3.11-slim`
     - 安装系统依赖（图像处理库）
     - 复制 Python 依赖：`requirements.txt`
     - 安装 Python 依赖
     - 复制应用代码
     - 从 Stage 1 复制前端构建产物到 `app/static/`
     - 暴露端口：8000
     - 启动命令：`uvicorn app.main:app --host 0.0.0.0 --port 8000`

2. **编写 docker-compose.yml**
   - 服务定义：`library-poster`
   - 挂载配置文件：`./config.yaml:/app/config.yaml`
   - 挂载数据目录：`./data:/app/data`（字体、封面、历史记录）
   - 环境变量支持（可选覆盖配置）
   - 端口映射：`8000:8000`
   - 重启策略：`unless-stopped`

3. **编写部署文档** (`README.md`)
   - 快速开始指南
   - Docker 部署步骤
   - 配置说明（每个配置项的含义）
   - Web UI 使用教程
   - Webhook 配置教程（Emby/Jellyfin）
   - 故障排查
   - 从 MoviePilot 插件迁移指南

**预期产物**：
- 多阶段 Dockerfile（优化镜像大小）
- docker-compose.yml
- 完整的 README.md

---

### Phase 9: 测试与优化
**目标**：验证功能完整性和资源占用

1. **功能测试**
   - Web UI 功能测试（所有页面和操作）
   - 定时任务触发测试
   - Webhook 事件触发测试
   - 手动触发测试
   - 多服务器支持测试
   - 封面风格切换测试
   - 配置保存/加载测试

2. **资源占用测试**
   - 空闲状态内存占用（目标：<120MB，含前端资源）
   - 生成封面时 CPU/内存峰值
   - 与 MoviePilot 插件对比
   - 前端资源加载性能

3. **优化**
   - 字体/图片缓存优化
   - HTTP 连接池复用
   - 并发控制（避免同时生成过多封面）
   - 日志级别配置
   - 前端代码分割（按需加载）
   - 前端资源压缩（Gzip/Brotli）

**预期产物**：
- 测试报告
- 性能对比数据
- 优化后的代码

---

## 关键文件

| 文件 | 操作 | 说明 |
|------|------|------|
| `plugins.v2/mediacovergenerator/__init__.py` | 参考 | 原插件主逻辑，提取业务流程 |
| `plugins.v2/mediacovergenerator/style_*.py` | 迁移 | 封面生成器，移除框架依赖 |
| `plugins.v2/mediacovergenerator/requirements.txt` | 参考 | 依赖列表 |
| `app/main.py` | 创建 | FastAPI 应用入口 |
| `app/config.py` | 创建 | Pydantic 配置模型 |
| `app/api/config.py` | 创建 | 配置管理 API |
| `app/api/generate.py` | 创建 | 封面生成 API |
| `app/api/status.py` | 创建 | 状态查询 API |
| `app/clients/emby.py` | 创建 | Emby API 客户端 |
| `app/clients/jellyfin.py` | 创建 | Jellyfin API 客户端 |
| `app/scheduler/jobs.py` | 创建 | 定时任务调度器 |
| `app/webhook/handlers.py` | 创建 | Webhook 事件处理器 |
| `app/generator/__init__.py` | 创建 | 封面生成协调器 |
| `app/storage/history.py` | 创建 | 封面历史管理 |
| `frontend/src/App.vue` | 创建 | Vue 根组件 |
| `frontend/src/views/Dashboard.vue` | 创建 | 仪表盘页面 |
| `frontend/src/views/Servers.vue` | 创建 | 服务器管理页面 |
| `frontend/src/views/Styles.vue` | 创建 | 风格配置页面 |
| `frontend/src/views/Config.vue` | 创建 | 定时任务配置页面 |
| `frontend/src/views/History.vue` | 创建 | 生成历史页面 |
| `frontend/package.json` | 创建 | 前端依赖配置 |
| `frontend/vite.config.js` | 创建 | Vite 构建配置 |
| `config.yaml` | 创建 | 主配置文件 |
| `requirements.txt` | 创建 | Python 依赖列表 |
| `Dockerfile` | 创建 | Docker 镜像定义（多阶段构建） |
| `docker-compose.yml` | 创建 | Docker Compose 配置 |
| `README.md` | 更新 | 独立应用使用文档 |

---

## 风险与缓解

| 风险 | 缓解措施 |
|------|----------|
| **Emby/Jellyfin API 兼容性差异** | 实现基类 + 子类覆盖模式，隔离差异；参考官方 API 文档验证 |
| **Webhook 事件格式不一致** | 实现灵活的事件解析器，支持多种事件格式；提供配置选项 |
| **字体下载失败** | 实现重试机制；支持本地字体路径；提供默认字体 fallback |
| **封面生成失败** | 详细错误日志；跳过失败项继续处理；提供手动重试接口 |
| **资源占用过高** | 限制并发生成数量；实现图片缓存；优化图像处理算法 |
| **配置迁移困难** | 提供配置迁移脚本，从 MoviePilot 插件配置转换为新格式 |
| **前端构建失败** | 提供预构建的前端资源；详细的构建文档；CI/CD 自动化 |
| **跨域问题** | 正确配置 CORS；提供反向代理配置示例（Nginx） |

---

## 资源优化策略

1. **HTTP 连接复用**：使用 `requests.Session` 复用连接池
2. **字体缓存**：首次下载后缓存到本地，避免重复下载
3. **图片缓存**：根据 image tag 判断是否需要重新下载
4. **并发控制**：使用信号量限制同时生成的封面数量（默认 3）
5. **增量更新**：通过历史记录避免重复生成未变化的封面
6. **按需加载**：仅在需要时加载图像处理库（lazy import）

---

## SESSION_ID（供 /ccg:execute 使用）

- **CODEX_SESSION**: `019c0d26-f8ea-7fc0-82a9-ed8304bdf924`
- **GEMINI_SESSION**: `d1d6ccf4-0c4f-4571-ad81-bc5e41bfd8da`

---

## 预期成果

1. **轻量级独立应用**：空闲内存占用 <120MB（vs MoviePilot 完整环境 >500MB）
2. **功能完整性**：保留所有原插件功能（定时、事件、手动触发、多风格）
3. **现代化 Web UI**：Vue 3 + Vite 构建的响应式配置界面
4. **易部署**：Docker 一键部署，配置文件化
5. **可维护性**：模块化架构，清晰的代码结构
6. **文档完善**：详细的配置说明和故障排查指南

---

## 后续扩展方向

1. **认证系统**：添加用户登录和权限管理（可选）
2. **多语言支持**：国际化配置和日志（中文/英文）
3. **插件系统**：支持自定义封面风格插件
4. **性能监控**：集成 Prometheus metrics
5. **通知系统**：生成完成后发送通知（Telegram、邮件等）
6. **批量操作**：支持批量生成、批量删除历史记录
7. **主题切换**：Web UI 支持亮色/暗色主题
8. **实时日志**：WebSocket 实时推送日志到前端
