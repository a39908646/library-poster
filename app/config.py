import logging
import os
from pathlib import Path
from typing import Callable, Dict, List, Optional

from pydantic import BaseModel, Field
from pydantic_settings import BaseSettings, SettingsConfigDict
import yaml


class AppConfig(BaseModel):
    timezone: str = "Asia/Shanghai"
    data_dir: str = "./data"
    log_level: str = "INFO"


class ServerConfig(BaseModel):
    name: str
    type: str = Field(..., pattern="^(emby|jellyfin)$")
    url: str
    api_key: str
    exclude_libraries: List[str] = Field(default_factory=list)


class CoverConfig(BaseModel):
    style: str = Field(default="single_1", pattern="^(single_1|single_2|multi_1)$")
    sort_by: str = Field(default="Random", pattern="^(Random|DateCreated|SortName)$")
    save_to_local: bool = False
    output_dir: str = "covers_output"
    custom_images_dir: str = ""


class FontSetConfig(BaseModel):
    zh_url: str = ""
    en_url: str = ""
    zh_local: str = ""
    en_local: str = ""
    zh_size: float = 1.0
    en_size: float = 1.0


class FontsConfig(BaseModel):
    main: FontSetConfig
    multi_1: FontSetConfig = Field(default_factory=lambda: FontSetConfig(use_main_font=False))


class SingleStyleParams(BaseModel):
    blur_size: int = 50
    color_ratio: float = 0.8
    use_primary: bool = False


class Multi1StyleParams(BaseModel):
    blur: bool = False
    blur_size: int = 50
    color_ratio: float = 0.8
    use_primary: bool = True


class StyleParamsConfig(BaseModel):
    single: SingleStyleParams = Field(default_factory=SingleStyleParams)
    multi_1: Multi1StyleParams = Field(default_factory=Multi1StyleParams)


class TitleConfig(BaseModel):
    zh: str
    en: str


class SchedulerConfig(BaseModel):
    enabled: bool = False
    cron: str = "0 2 * * *"


class WebhookConfig(BaseModel):
    enabled: bool = True
    delay: int = 60


class NetworkConfig(BaseModel):
    proxy: str = ""
    github_proxy: str = ""
    timeout: int = 30
    retries: int = 3


class PerformanceConfig(BaseModel):
    max_concurrent: int = 3


class Config(BaseSettings):
    model_config = SettingsConfigDict(
        yaml_file="config.yaml",
        yaml_file_encoding="utf-8",
        extra="ignore"
    )

    app: AppConfig = Field(default_factory=AppConfig)
    servers: List[ServerConfig] = Field(default_factory=list)
    cover: CoverConfig = Field(default_factory=CoverConfig)
    fonts: FontsConfig
    style_params: StyleParamsConfig = Field(default_factory=StyleParamsConfig)
    titles: Dict[str, TitleConfig] = Field(default_factory=dict)
    scheduler: SchedulerConfig = Field(default_factory=SchedulerConfig)
    webhook: WebhookConfig = Field(default_factory=WebhookConfig)
    network: NetworkConfig = Field(default_factory=NetworkConfig)
    performance: PerformanceConfig = Field(default_factory=PerformanceConfig)

    @classmethod
    def load_from_yaml(cls, config_path: str = "config.yaml") -> "Config":
        """从 YAML 文件加载配置"""
        config_file = Path(config_path)
        if not config_file.exists():
            raise FileNotFoundError(f"配置文件不存在: {config_path}")

        with open(config_file, "r", encoding="utf-8") as f:
            config_data = yaml.safe_load(f)

        return cls(**config_data)

    def get_data_path(self) -> Path:
        """获取数据目录路径"""
        data_path = Path(self.app.data_dir)
        data_path.mkdir(parents=True, exist_ok=True)
        return data_path

    def get_fonts_path(self) -> Path:
        """获取字体目录路径"""
        fonts_path = self.get_data_path() / "fonts"
        fonts_path.mkdir(parents=True, exist_ok=True)
        return fonts_path

    def get_covers_path(self) -> Path:
        """获取封面缓存目录路径"""
        covers_path = self.get_data_path() / "covers"
        covers_path.mkdir(parents=True, exist_ok=True)
        return covers_path

    def get_output_path(self) -> Optional[Path]:
        """获取封面输出目录路径"""
        if not self.cover.save_to_local:
            return None
        output_path = self.get_data_path() / self.cover.output_dir
        output_path.mkdir(parents=True, exist_ok=True)
        return output_path

    def get_custom_images_path(self) -> Optional[Path]:
        """获取自定义背景图目录路径"""
        if not self.cover.custom_images_dir:
            return None
        custom_path = self.get_data_path() / self.cover.custom_images_dir
        if custom_path.exists():
            return custom_path
        return None

    def setup_logging(self):
        """配置日志"""
        log_level = getattr(logging, self.app.log_level.upper(), logging.INFO)
        logging.basicConfig(
            level=log_level,
            format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
            datefmt="%Y-%m-%d %H:%M:%S"
        )


# 全局配置实例
_config: Optional[Config] = None
_reload_callbacks: List[callable] = []


def get_config() -> Config:
    """获取全局配置实例"""
    global _config
    if _config is None:
        _config = Config.load_from_yaml()
        _config.setup_logging()
    return _config


def reload_config():
    """重新加载配置并通知所有回调"""
    global _config
    _config = Config.load_from_yaml()
    _config.setup_logging()
    for callback in _reload_callbacks:
        try:
            callback(_config)
        except Exception as e:
            logging.getLogger(__name__).error(f"Config reload callback failed: {e}")
    return _config


def register_config_reload_callback(callback: callable):
    """注册配置重载回调"""
    if callback not in _reload_callbacks:
        _reload_callbacks.append(callback)


def unregister_config_reload_callback(callback: callable):
    """取消注册配置重载回调"""
    if callback in _reload_callbacks:
        _reload_callbacks.remove(callback)


def write_config_atomically(config_data: Dict, config_path: str = "config.yaml"):
    """原子写入配置文件"""
    import shutil
    import tempfile

    config_file = Path(config_path)
    backup_file = config_file.with_suffix(".yaml.bak")

    # 备份现有配置
    if config_file.exists():
        shutil.copy2(config_file, backup_file)

    # 写入临时文件
    fd, temp_path = tempfile.mkstemp(suffix=".yaml", dir=config_file.parent)
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as f:
            yaml.dump(config_data, f, allow_unicode=True, default_flow_style=False, sort_keys=False)
            f.flush()
            os.fsync(f.fileno())
        # 原子替换
        Path(temp_path).replace(config_file)
    except Exception:
        if os.path.exists(temp_path):
            os.unlink(temp_path)
        raise
