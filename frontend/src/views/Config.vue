<template>
  <n-card title="定时任务配置">
    <n-alert type="info" style="margin-bottom: 16px;">
      当前版本通过编辑 config.yaml 文件配置定时任务。
      修改配置后，点击"重新加载配置"按钮使更改生效。
    </n-alert>

    <n-descriptions bordered :column="1">
      <n-descriptions-item label="定时任务状态">
        <n-tag :type="config.scheduler?.enabled ? 'success' : 'default'">
          {{ config.scheduler?.enabled ? '已启用' : '已禁用' }}
        </n-tag>
      </n-descriptions-item>
      <n-descriptions-item label="Cron 表达式">
        <n-code>{{ config.scheduler?.cron || '0 2 * * *' }}</n-code>
      </n-descriptions-item>
      <n-descriptions-item label="Webhook 状态">
        <n-tag :type="config.webhook?.enabled ? 'success' : 'default'">
          {{ config.webhook?.enabled ? '已启用' : '已禁用' }}
        </n-tag>
      </n-descriptions-item>
      <n-descriptions-item label="Webhook 延迟">
        {{ config.webhook?.delay || 60 }} 秒
      </n-descriptions-item>
    </n-descriptions>

    <n-divider>Cron 表达式说明</n-divider>

    <n-table :bordered="false" :single-line="false">
      <thead>
        <tr>
          <th>表达式</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><n-code>0 2 * * *</n-code></td>
          <td>每天凌晨 2 点执行</td>
        </tr>
        <tr>
          <td><n-code>0 */6 * * *</n-code></td>
          <td>每 6 小时执行一次</td>
        </tr>
        <tr>
          <td><n-code>0 0 * * 0</n-code></td>
          <td>每周日凌晨执行</td>
        </tr>
        <tr>
          <td><n-code>0 0 1 * *</n-code></td>
          <td>每月 1 号凌晨执行</td>
        </tr>
      </tbody>
    </n-table>

    <n-divider />

    <n-button type="primary" @click="reloadConfig" :loading="loading">
      <template #icon>
        <n-icon :component="RefreshOutline" />
      </template>
      重新加载配置
    </n-button>
  </n-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {
  NCard,
  NAlert,
  NDescriptions,
  NDescriptionsItem,
  NTag,
  NCode,
  NDivider,
  NTable,
  NButton,
  NIcon,
  useMessage
} from 'naive-ui'
import { RefreshOutline } from '@vicons/ionicons5'
import { api } from '@/api/client'

const message = useMessage()
const loading = ref(false)
const config = ref({})

const loadConfig = async () => {
  loading.value = true
  try {
    config.value = await api.getConfig()
  } catch (error) {
    message.error('加载配置失败: ' + error.message)
  } finally {
    loading.value = false
  }
}

const reloadConfig = async () => {
  loading.value = true
  try {
    await api.reloadConfig()
    message.success('配置已重新加载')
    await loadConfig()
  } catch (error) {
    message.error('重新加载配置失败: ' + error.message)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadConfig()
})
</script>
