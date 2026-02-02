<template>
  <n-card title="封面风格配置">
    <n-alert type="info" style="margin-bottom: 16px;">
      当前版本通过编辑 config.yaml 文件配置封面风格。
      修改配置后，点击"重新加载配置"按钮使更改生效。
    </n-alert>

    <n-descriptions bordered :column="1">
      <n-descriptions-item label="当前风格">
        <n-tag :type="getStyleType(config.cover?.style)">
          {{ getStyleName(config.cover?.style) }}
        </n-tag>
      </n-descriptions-item>
      <n-descriptions-item label="排序方式">
        {{ config.cover?.sort_by || 'Random' }}
      </n-descriptions-item>
      <n-descriptions-item label="保存到本地">
        {{ config.cover?.save_to_local ? '是' : '否' }}
      </n-descriptions-item>
    </n-descriptions>

    <n-divider>风格说明</n-divider>

    <n-space vertical size="large">
      <n-card title="单图风格 1 (single_1)" size="small">
        <p>旋转卡片风格，适合电影、电视剧等媒体库</p>
        <n-tag type="success">推荐</n-tag>
      </n-card>

      <n-card title="单图风格 2 (single_2)" size="small">
        <p>简约风格，适合音乐、照片等媒体库</p>
      </n-card>

      <n-card title="九宫格风格 (multi_1)" size="small">
        <p>多图拼接风格，展示媒体库丰富内容</p>
        <n-tag type="info">需要更多图片</n-tag>
      </n-card>
    </n-space>

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
  NDivider,
  NSpace,
  NButton,
  NIcon,
  useMessage
} from 'naive-ui'
import { RefreshOutline } from '@vicons/ionicons5'
import { api } from '@/api/client'

const message = useMessage()
const loading = ref(false)
const config = ref({})

const getStyleName = (style) => {
  const names = {
    single_1: '单图风格 1',
    single_2: '单图风格 2',
    multi_1: '九宫格风格'
  }
  return names[style] || style
}

const getStyleType = (style) => {
  const types = {
    single_1: 'success',
    single_2: 'info',
    multi_1: 'warning'
  }
  return types[style] || 'default'
}

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
