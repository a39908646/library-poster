import logging

from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.cron import CronTrigger

from app.config import Config

logger = logging.getLogger(__name__)


class CoverScheduler:
    def __init__(self, config: Config):
        self.config = config
        self.scheduler = BackgroundScheduler(timezone=config.app.timezone)
        self._service = None

    def set_service(self, service):
        """设置 CoverService 实例"""
        self._service = service

    def reload(self, config: Config):
        """使用新配置重新加载调度器"""
        self.config = config
        try:
            # 如果调度器未运行但配置启用，则启动
            if not self.scheduler.running and config.scheduler.enabled:
                self.scheduler.start()

            # 如果调度器正在运行，清理所有任务
            if self.scheduler.running:
                self.scheduler.remove_all_jobs()

            if config.scheduler.enabled:
                self.scheduler.add_job(
                    func=self._update_all_libraries,
                    trigger=CronTrigger.from_crontab(config.scheduler.cron),
                    id="update_all_libraries",
                    name="Update all library covers",
                    replace_existing=True
                )
                logger.info(f"Scheduler reloaded with cron: {config.scheduler.cron}")
            else:
                if self.scheduler.running:
                    self.scheduler.shutdown(wait=False)
                    self.scheduler = BackgroundScheduler(timezone=config.app.timezone)
                logger.info("Scheduler disabled after reload")
        except Exception as e:
            logger.error(f"Failed to reload scheduler: {e}", exc_info=True)

    def start(self):
        if not self.config.scheduler.enabled:
            logger.info("Scheduler is disabled")
            return

        self.scheduler.add_job(
            func=self._update_all_libraries,
            trigger=CronTrigger.from_crontab(self.config.scheduler.cron),
            id="update_all_libraries",
            name="Update all library covers",
            replace_existing=True
        )
        self.scheduler.start()
        logger.info(f"Scheduler started with cron: {self.config.scheduler.cron}")

    def stop(self):
        if self.scheduler.running:
            self.scheduler.shutdown()
            logger.info("Scheduler stopped")

    def _update_all_libraries(self):
        logger.info("Starting scheduled cover update for all libraries")
        if self._service:
            try:
                self._service.update_all_servers()
            except Exception as e:
                logger.error(f"Scheduled update failed: {e}", exc_info=True)
        else:
            logger.error("CoverService not set")
