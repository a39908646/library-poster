# 📋 实施计划：内存优化重构

## 目标
- 空载（无封面生成任务）RSS ≤ 30MB
- 峰值（封面生成期间）RSS ≤ 100MB

## 任务类型
- [x] 后端 (→ Codex)
- [ ] 前端
- [ ] 全栈

## 技术方案

当前启动链 `uvicorn → app.main:app` 会急切加载全部模块，导致空载 RSS ~50MB。PIL/numpy 已做懒加载（good），但 `apscheduler`、`requests`、`pydantic-settings` 仍在启动时全量导入。

**策略：Phase A（空载瘦身）+ Phase B（峰值控制）**

- Phase A：通过懒加载和条件初始化，将空载 RSS 从 ~50MB 降至 ≤30MB
- Phase B：通过 float32 替代 float64、显式清理中间对象，将峰值 RSS 控制在 ≤100MB

---

## 实施步骤

### Phase A：空载内存优化

#### Step 1 — 条件化 Scheduler 生命周期
**文件**: `app/main.py`
**操作**: 修改
**说明**: 仅当 `config.scheduler.enabled=True` 时才 import 并创建 `CoverScheduler`。config reload 时动态创建/销毁。

```python
# 伪代码
if TYPE_CHECKING:
    from app.scheduler.jobs import CoverScheduler

def _ensure_scheduler(config):
    if not config.scheduler.enabled:
        if scheduler: scheduler.stop(); scheduler = None
        return
    if scheduler is None:
        from app.scheduler.jobs import CoverScheduler
        scheduler = CoverScheduler(config)
        scheduler.set_service(cover_service)
    scheduler.reload(config)
```

**风险**: 中 — reload 时 enabled 状态切换的边界情况
**缓解**: 测试 `False→True→False` 转换

---

#### Step 2 — 懒加载 apscheduler
**文件**: `app/scheduler/jobs.py`
**操作**: 修改
**说明**: 将 `BackgroundScheduler` 和 `CronTrigger` 的 import 移入线程安全的懒加载器。`__init__` 不再立即创建 scheduler 对象。

```python
# 伪代码
_APS_LOCK = threading.Lock()
_APS = None

def _load_aps():
    global _APS
    if _APS is None:
        with _APS_LOCK:
            if _APS is None:
                from apscheduler.schedulers.background import BackgroundScheduler
                from apscheduler.triggers.cron import CronTrigger
                _APS = (BackgroundScheduler, CronTrigger)
    return _APS
```

**风险**: 中 — scheduler 状态管理复杂度增加
**缓解**: 集中 create/shutdown 逻辑

---

#### Step 3 — 懒加载 config API 中的 CronTrigger
**文件**: `app/api/config.py`
**操作**: 修改
**说明**: 移除顶层 `from apscheduler.triggers.cron import CronTrigger`，仅在验证 cron 表达式时局部 import。

**风险**: 低

---

#### Step 4 — 移除 pydantic-settings 依赖
**文件**: `app/config.py`, `requirements.txt`
**操作**: 修改
**说明**: `Config` 从 `BaseSettings` 改为 `BaseModel`，因为配置完全由 YAML 驱动，`pydantic-settings` 的 env 覆盖功能未使用。节省 ~2MB。

```python
# 伪代码
from pydantic import BaseModel, ConfigDict

class Config(BaseModel):
    model_config = ConfigDict(extra="ignore")
    # ... 字段不变
```

**风险**: 中 — 需确认无隐式 env 变量覆盖
**缓解**: 搜索代码确认无 `BaseSettings` 特有功能使用

---

#### Step 5 — 懒加载 requests（HTTP 客户端）
**文件**: `app/clients/base.py`
**操作**: 修改
**说明**: 移除顶层 `import requests`，在 `__init__` 中按需导入。Session 仍在构造时创建（因为 client 本身是按需创建的）。

**风险**: 低

---

#### Step 6 — 延迟 FontManager Session 创建
**文件**: `app/utils/font.py`
**操作**: 修改
**说明**: 移除顶层 `import requests`，Session 延迟到首次下载时创建（线程安全双重检查锁）。

```python
# 伪代码
class FontManager:
    def __init__(self, config):
        self._session = None
        self._lock = threading.Lock()

    def _get_session(self):
        if self._session is None:
            with self._lock:
                if self._session is None:
                    from requests import Session
                    s = Session()
                    # 配置代理...
                    self._session = s
        return self._session
```

**风险**: 低

---

#### Step 7 — 懒加载 image 工具中的 requests
**文件**: `app/utils/image.py`
**操作**: 修改
**说明**: 移除顶层 `from requests import Session` 和 `from requests.exceptions import RequestException`，在函数内部局部 import。

**风险**: 低

---

#### Step 8 — CoverService 延迟初始化
**文件**: `app/services/cover.py`
**操作**: 修改
**说明**:
- 移除顶层 `EmbyClient`, `JellyfinClient`, `FontManager`, `download_image`, `CoverHistory` 的 import
- `FontManager` 和 `CoverHistory` 改为 property 懒加载
- `_create_client` 内部局部 import 客户端类

```python
# 伪代码
class CoverService:
    def __init__(self, config):
        self.config = config
        self._font_manager = None
        self._history = None

    @property
    def history(self):
        if self._history is None:
            from app.storage.history import CoverHistory
            self._history = CoverHistory(...)
        return self._history

    def _create_client(self, server):
        if server.type == "emby":
            from app.clients.emby import EmbyClient
            return EmbyClient(server, self.config.network)
        from app.clients.jellyfin import JellyfinClient
        return JellyfinClient(server, self.config.network)
```

**风险**: 中 — `history` 属性需保持与现有调用兼容
**缓解**: 保持 property 名称不变

---

### Phase B：峰值内存控制

#### Step 9 — style_single_1 float32 + 显式清理
**文件**: `app/generator/style_single_1.py`
**操作**: 修改
**说明**:
- `np.array(..., dtype=np.float32)` 替代默认 float64（内存减半）
- 使用 `with Image.open(...)` 上下文管理器
- 混合运算后立即 `del` 中间数组
- 函数末尾 `gc.collect()`

**风险**: 中 — float32 精度差异可能导致微小视觉差异
**缓解**: SSIM/PSNR 对比验证

---

#### Step 10 — style_single_2 float32 + 显式清理
**文件**: `app/generator/style_single_2.py`
**操作**: 修改
**说明**: 同 Step 9 的改动模式

**风险**: 中

---

#### Step 11 — style_multi_1 float32 + 移除 zeros_like + 显式清理
**文件**: `app/generator/style_multi_1.py`
**操作**: 修改
**说明**:
- `create_blur_background` 中用 `np.array([r,g,b,a], dtype=np.float32).reshape(1,1,4)` 广播替代 `np.zeros_like` 全尺寸克隆
- 所有 `Image.open()` 使用上下文管理器
- 海报循环中每列处理后 `del` 中间对象
- 批次边界 `gc.collect()`

**风险**: 高 — 此路径对象最多、内存波动最大
**缓解**: 小步提交，逐段 benchmark

---

#### Step 12 — 内存感知并发控制
**文件**: `app/services/job_manager.py`, `app/config.py`
**操作**: 修改
**说明**:
- `PerformanceConfig` 增加 `peak_rss_limit_mb`（默认 100）
- 批量任务启动前检查当前 RSS，自动调低实际并发数
- 生成前等待 RSS 降至阈值以下

```python
# 伪代码
class PerformanceConfig(BaseModel):
    max_concurrent: int = 3
    peak_rss_limit_mb: int = 100
```

**风险**: 中 — 高负载下任务等待时间增加
**缓解**: 设置最大等待超时，超时后报错而非无限等待

---

### Phase C：验证

#### Step 13 — 基线测量与回归验证
**说明**:
- 冷启动后测量空载 RSS（目标 ≤30MB）
- 各风格封面生成峰值 RSS（目标 ≤100MB）
- 生成图片视觉对比（SSIM ≥ 0.99）
- API 接口兼容性验证

---

## 关键文件

| 文件 | 操作 | 说明 |
|------|------|------|
| `app/main.py` | 修改 | 条件化 scheduler 创建 |
| `app/scheduler/jobs.py` | 修改 | 懒加载 apscheduler |
| `app/api/config.py:5` | 修改 | 懒加载 CronTrigger |
| `app/config.py` | 修改 | BaseSettings → BaseModel |
| `requirements.txt` | 修改 | 移除 pydantic-settings |
| `app/clients/base.py` | 修改 | 懒加载 requests |
| `app/utils/font.py` | 修改 | 延迟 Session 创建 |
| `app/utils/image.py` | 修改 | 懒加载 requests |
| `app/services/cover.py` | 修改 | 延迟初始化 FontManager/History/Client |
| `app/generator/style_single_1.py` | 修改 | float32 + 显式清理 |
| `app/generator/style_single_2.py` | 修改 | float32 + 显式清理 |
| `app/generator/style_multi_1.py` | 修改 | float32 + 移除 zeros_like + 清理 |
| `app/services/job_manager.py` | 修改 | 内存感知并发控制 |

## 风险与缓解

| 风险 | 缓解措施 |
|------|----------|
| 懒加载导致首次请求延迟增加 | 可接受的一次性开销（~200ms），后续请求不受影响 |
| float32 精度差异影响图片质量 | SSIM 对比验证，阈值 ≥ 0.99 |
| scheduler enabled 状态切换边界 | 集中状态管理 + 转换测试 |
| 移除 pydantic-settings 破坏 env 覆盖 | 确认当前无 env 覆盖使用 |
| multi_1 生成器改动范围大 | 小步提交，逐段验证 |
| 内存守卫导致批量任务超时 | 设置最大等待时间 + 清晰错误信息 |

## 预期效果

| 指标 | 当前估计 | 目标 |
|------|----------|------|
| 空载 RSS | ~50MB | ≤ 30MB |
| 峰值 RSS (single_1) | ~75MB | ≤ 80MB |
| 峰值 RSS (multi_1) | ~120MB | ≤ 100MB |

## SESSION_ID（供 /ccg:execute 使用）
- CODEX_SESSION (analyzer): 019c5535-19c4-7bb3-9801-97b873d31880
- CODEX_SESSION (architect): 019c5555-be40-7251-ae68-095a739cc85e
- GEMINI_SESSION: N/A（API 调用失败，MCP 工具名称超长限制）
