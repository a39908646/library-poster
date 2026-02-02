# Library Poster - 前端

基于 Vue 3 + Vite + Naive UI 的现代化配置界面。

## 功能特性

- ✅ 仪表盘：系统状态监控、快速操作
- ✅ 服务器管理：查看已配置的媒体服务器
- ✅ 风格配置：查看当前封面风格设置
- ✅ 定时任务：查看定时任务配置
- ✅ 生成历史：查看封面生成历史记录
- ✅ 响应式设计：支持桌面和移动端
- ✅ 暗色主题：Naive UI 暗色主题

## 开发

### 安装依赖

```bash
npm install
```

### 开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `../app/static/` 目录。

## 技术栈

- **Vue 3**: 渐进式 JavaScript 框架
- **Vite**: 下一代前端构建工具
- **Naive UI**: Vue 3 组件库
- **Vue Router**: 官方路由管理器
- **Axios**: HTTP 客户端
- **Vicons**: 图标库（Ionicons 5）

## 项目结构

```
frontend/
├── src/
│   ├── api/              # API 客户端
│   │   └── client.js
│   ├── views/            # 页面组件
│   │   ├── Dashboard.vue
│   │   ├── Servers.vue
│   │   ├── Styles.vue
│   │   ├── Config.vue
│   │   └── History.vue
│   ├── router/           # 路由配置
│   │   └── index.js
│   ├── App.vue           # 根组件
│   └── main.js           # 入口文件
├── public/               # 静态资源
├── index.html            # HTML 模板
├── vite.config.js        # Vite 配置
└── package.json          # 依赖配置
```

## API 集成

前端通过 Axios 与后端 FastAPI 通信：

- `/api/config` - 配置管理
- `/api/generate` - 封面生成
- `/api/status` - 系统状态
- `/health` - 健康检查

开发环境下，Vite 会自动代理 API 请求到 `http://localhost:8000`。

## 配置说明

### 当前版本限制

当前版本（v1.0.0）的 Web UI 主要用于**查看和监控**，配置修改仍需通过编辑 `config.yaml` 文件完成。

未来版本将支持：
- 在线编辑服务器配置
- 可视化 Cron 表达式编辑器
- 封面风格在线切换
- 字体配置管理

## 开发指南

### 添加新页面

1. 在 `src/views/` 创建新的 Vue 组件
2. 在 `src/router/index.js` 添加路由
3. 在 `App.vue` 的菜单中添加导航项

### 添加新 API

1. 在 `src/api/client.js` 添加 API 方法
2. 在组件中导入并使用

### 样式定制

Naive UI 支持主题定制，可以在 `App.vue` 中修改 `darkTheme` 配置。

## 故障排查

### 开发服务器无法启动

```bash
# 清除缓存
rm -rf node_modules
npm install
```

### API 请求失败

检查后端服务是否运行：
```bash
curl http://localhost:8000/health
```

### 构建失败

确保 Node.js 版本 >= 18：
```bash
node --version
```

## 许可证

MIT License
