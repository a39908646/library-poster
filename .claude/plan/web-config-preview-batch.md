# 📋 实施计划：Web 配置编辑、封面预览、批量操作

## 任务类型
- [x] 前端 (→ Gemini)
- [x] 后端 (→ Codex)
- [x] 全栈 (→ 并行)

---

## 技术方案

综合 Codex 分析，采用 **方案 B（服务层重构，分阶段落地）**：

1. **ConfigManager** - 配置校验、原子写盘、热切换
2. **CoverPipeline** - 拆分 fetch/generate/upload，支持 preview 模式
3. **JobManager** - 持久化任务状态 + 进度跟踪

### 核心设计原则

- **配置编辑**：草稿校验 → 原子写入 config.yaml → 触发服务重绑
- **预览**：复用真实生成流程，但禁用 upload/history/local-save，使用临时目录隔离
- **批量**：任务状态机 `pending → running → success/failed/canceled`，支持进度查询和取消

---

## 实施步骤

### Phase 0：基线修复（前置依赖）

#### 0.1 修复配置热更新问题
- **文件**：`app/main.py`
- **问题**：`reload_config()` 只替换 `_config`，但 `CoverService`/`scheduler` 持有旧配置
- **方案**：在 `reload_config_api()` 中重新绑定服务实例

```python
# app/api/config.py - 伪代码
@router.post("/reload")
async def reload_config_api():
    reload_config()
    # 重新绑定服务
    new_config = get_config()
    cover_service.config = new_config
    scheduler.update_config(new_config)
```

#### 0.2 定义任务状态模型
- **新增文件**：`app/models/job.py`
- **字段**：`job_id, status, progress, total, completed, failed, started_at, finished_at, error`
- **状态枚举**：`pending, running, success, failed, canceled`

---

### Phase 1：在线配置编辑

#### 1.1 后端 API

| 端点 | 方法 | 说明 |
|------|------|------|
| `/api/config/full` | GET | 返回完整配置（含 fonts/style_params/titles 等） |
| `/api/config/validate` | POST | 校验配置有效性，返回错误列表 |
| `/api/config` | PUT | 保存配置（原子写入 + 热更新） |

**关键实现**：
```python
# app/api/config.py - 伪代码

@router.get("/full")
async def get_full_config():
    config = get_config()
    return config.model_dump(exclude={"servers": {"__all__": {"api_key"}}})  # 脱敏

@router.post("/validate")
async def validate_config(data: dict):
    try:
        Config(**data)
        return {"valid": True, "errors": []}
    except ValidationError as e:
        return {"valid": False, "errors": e.errors()}

@router.put("")
async def save_config(data: dict):
    # 1. 校验
    # 2. 备份 config.yaml.bak
    # 3. 原子写入（temp + fsync + rename）
    # 4. 触发热更新
```

#### 1.2 前端 UI

**修改文件**：`frontend/src/views/Config.vue`

**UI 设计**：
- 使用 Naive UI 的 `n-tabs` 分组配置（服务器、封面、定时任务、网络等）
- 每个配置项使用对应表单控件（n-input, n-select, n-switch, n-input-number）
- 底部固定保存按钮栏，显示"未保存更改"状态
- 保存前调用 `/api/config/validate`，显示校验错误

**新增 API 方法**：
```javascript
// frontend/src/api/client.js
getFullConfig() { return client.get('/config/full') }
validateConfig(data) { return client.post('/config/validate', data) }
saveConfig(data) { return client.put('/config', data) }
```

---

### Phase 2：封面预览

#### 2.1 后端 API

| 端点 | 方法 | 说明 |
|------|------|------|
| `/api/preview` | POST | 生成预览图，返回 Base64 图片 |

**请求体**：
```json
{
  "server_name": "我的 Emby",
  "library_name": "电影",
  "config_override": {  // 可选：使用未保存的临时配置
    "cover": { "style": "multi_1" }
  }
}
```

**关键实现**：
```python
# app/api/preview.py - 伪代码

@router.post("")
async def preview_cover(request: PreviewRequest):
    # 1. 合并 config_override 到当前配置
    # 2. 使用临时目录下载图片
    # 3. 调用 generate_cover()
    # 4. 返回 Base64 图片（不上传、不写历史）
    # 5. 清理临时目录
    return {"image": "data:image/jpeg;base64,xxxxx"}
```

**CoverService 重构**：
```python
# app/services/cover.py - 伪代码

def generate_preview(self, server: ServerConfig, library: Dict, config_override: dict = None):
    """预览模式：生成但不上传"""
    with tempfile.TemporaryDirectory() as temp_dir:
        # 复用 _prepare_library_images 但使用临时目录
        # 调用 generate_cover()
        # 返回 Base64，不调用 upload_cover()
```

#### 2.2 前端 UI

**新增文件**：`frontend/src/views/Preview.vue`（或集成到 Styles.vue）

**UI 设计**：
- 选择服务器 + 媒体库（下拉框）
- 选择预览风格（radio group：single_1 / single_2 / multi_1）
- 可选：调整参数（blur_size, color_ratio 等）
- 点击"生成预览"按钮
- 预览区域使用 `n-image` 组件展示，支持放大

**交互流程**：
1. 用户选择服务器/媒体库/风格
2. 点击预览 → 显示加载状态
3. 返回后展示图片，用户可调整参数重新预览
4. 满意后点击"应用到媒体库"执行真实生成

---

### Phase 3：批量操作

#### 3.1 后端 API

| 端点 | 方法 | 说明 |
|------|------|------|
| `/api/batch` | POST | 创建批量任务，返回 job_id |
| `/api/batch/{job_id}` | GET | 查询任务状态和进度 |
| `/api/batch/{job_id}/cancel` | POST | 取消任务 |
| `/api/batch` | GET | 列出所有任务 |

**请求体**：
```json
{
  "targets": [
    { "server_name": "Emby", "library_name": null },  // 整个服务器
    { "server_name": "Jellyfin", "library_name": "电影" }
  ]
}
```

**响应**：
```json
{
  "job_id": "uuid",
  "status": "running",
  "progress": { "total": 10, "completed": 3, "failed": 1 },
  "started_at": "2026-02-10T12:00:00Z",
  "errors": [{ "target": "...", "error": "..." }]
}
```

**关键实现**：
```python
# app/services/job_manager.py - 伪代码

class JobManager:
    def __init__(self):
        self.jobs: Dict[str, Job] = {}
        self.semaphore = asyncio.Semaphore(config.performance.max_concurrent)

    async def create_batch_job(self, targets: List[Target]) -> str:
        job_id = str(uuid4())
        # 后台执行，每完成一个 target 更新进度
        asyncio.create_task(self._run_batch(job_id, targets))
        return job_id

    async def _run_batch(self, job_id, targets):
        for target in targets:
            if self.jobs[job_id].canceled:
                break
            async with self.semaphore:
                try:
                    await self._generate_one(target)
                    self.jobs[job_id].completed += 1
                except Exception as e:
                    self.jobs[job_id].failed += 1
                    self.jobs[job_id].errors.append(...)
```

#### 3.2 前端 UI

**修改文件**：`frontend/src/views/Dashboard.vue`（或新增 Batch.vue）

**UI 设计**：
- 多选服务器/媒体库列表（n-checkbox-group 或 n-tree）
- 选中后显示"批量生成 X 个目标"
- 点击执行后显示进度面板：
  - 总进度条（n-progress）
  - 当前任务状态列表
  - 失败项可重试
  - 取消按钮
- 轮询 `/api/batch/{job_id}` 更新进度（3秒间隔）

---

### Phase 4：安全与可观测性（可选增强）

#### 4.1 API 响应脱敏
- 所有返回 `api_key` 的接口改为返回 `***masked***`
- 前端编辑时，空值表示不修改

#### 4.2 SSE 实时进度（可选）
- 端点：`GET /api/batch/{job_id}/events`
- 替代高频轮询，实时推送进度

---

## 关键文件

| 文件 | 操作 | 说明 |
|------|------|------|
| `app/api/config.py` | 修改 | 新增 /full, /validate, PUT 端点 |
| `app/api/preview.py` | 新增 | 预览 API |
| `app/api/batch.py` | 新增 | 批量操作 API |
| `app/services/cover.py` | 修改 | 拆分预览逻辑，支持 dry-run |
| `app/services/job_manager.py` | 新增 | 任务管理器 |
| `app/models/job.py` | 新增 | 任务状态模型 |
| `app/main.py` | 修改 | 注册新路由，初始化 JobManager |
| `frontend/src/views/Config.vue` | 修改 | 配置编辑表单 |
| `frontend/src/views/Preview.vue` | 新增 | 预览页面（或集成到 Styles） |
| `frontend/src/views/Dashboard.vue` | 修改 | 批量操作入口 |
| `frontend/src/api/client.js` | 修改 | 新增 API 方法 |
| `frontend/src/router/index.js` | 修改 | 新增路由（如 Preview） |

---

## 风险与缓解

| 风险 | 缓解措施 |
|------|----------|
| 配置写入后服务未生效 | Phase 0 先修复热更新问题 |
| 预览污染正式缓存 | 使用 tempfile.TemporaryDirectory |
| 批量任务进程重启丢失 | 可选：任务状态持久化到 SQLite/JSON |
| API 暴露 api_key | 响应统一脱敏 |
| 并发批量超载 | 使用 Semaphore 限制并发数 |

---

## 依赖顺序

```
Phase 0 (基线修复)
    ↓
Phase 1 (配置编辑) ←── Phase 2 (预览) 可并行
    ↓                      ↓
Phase 3 (批量操作) ←── 依赖 Phase 0 的任务模型
    ↓
Phase 4 (安全增强) ←── 可选
```

---

## SESSION_ID（供 /ccg:execute 使用）

- CODEX_SESSION: 019c4797-b03d-7ae0-abde-a3dee3fbc7ca
- GEMINI_SESSION: (调用失败，无 Session)

---

## 工期估算

| Phase | 工作量 |
|-------|--------|
| Phase 0 | 1-2 小时 |
| Phase 1 | 4-6 小时（后端 2h + 前端 3h） |
| Phase 2 | 3-4 小时（后端 1.5h + 前端 2h） |
| Phase 3 | 4-6 小时（后端 3h + 前端 2h） |
| Phase 4 | 1-2 小时（可选） |

**总计**：约 12-18 小时开发工作
