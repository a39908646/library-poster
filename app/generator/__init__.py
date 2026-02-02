import logging
from pathlib import Path
from typing import Optional, Tuple

from app.config import Config
from app.generator.style_single_1 import create_style_single_1
from app.generator.style_single_2 import create_style_single_2
from app.generator.style_multi_1 import create_style_multi_1

logger = logging.getLogger(__name__)


def generate_cover(
    library_dir: Path,
    title: Tuple[str, str],
    font_paths: Tuple[str, str],
    config: Config
) -> Optional[str]:
    """
    生成封面

    Args:
        library_dir: 媒体库图片目录
        title: (中文标题, 英文标题)
        font_paths: (中文字体路径, 英文字体路径)
        config: 配置对象

    Returns:
        Base64 编码的图片数据，失败返回 None
    """
    style = config.cover.style

    try:
        if style == "single_1":
            params = config.style_params.single
            font_size = (config.fonts.main.zh_size, config.fonts.main.en_size)
            return create_style_single_1(
                str(library_dir),
                title,
                font_paths,
                font_size=font_size,
                blur_size=params.blur_size,
                color_ratio=params.color_ratio
            )
        elif style == "single_2":
            params = config.style_params.single
            font_size = (config.fonts.main.zh_size, config.fonts.main.en_size)
            return create_style_single_2(
                str(library_dir),
                title,
                font_paths,
                font_size=font_size,
                blur_size=params.blur_size,
                color_ratio=params.color_ratio
            )
        elif style == "multi_1":
            params = config.style_params.multi_1
            if config.fonts.multi_1.use_main_font:
                font_size = (config.fonts.main.zh_size, config.fonts.main.en_size)
            else:
                font_size = (config.fonts.multi_1.zh_size, config.fonts.multi_1.en_size)
            return create_style_multi_1(
                library_dir,
                title,
                font_paths,
                font_size=font_size,
                is_blur=params.blur,
                blur_size=params.blur_size,
                color_ratio=params.color_ratio
            )
        else:
            logger.error(f"Unknown cover style: {style}")
            return None
    except Exception as e:
        logger.error(f"Failed to generate cover: {e}", exc_info=True)
        return None
