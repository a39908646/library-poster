<template>
  <n-card title="服务器管理">
    <n-alert type="info" style="margin-bottom: 16px;">
      当前版本通过编辑 config.yaml 文件管理服务器配置。
      修改配置后，点击"重新加载配置"按钮使更改生效。
    </n-alert>

    <n-list bordered>
      <n-list-item v-for="server in servers" :key="server.name">
        <n-thing>
          <template #header>
            {{ server.name }}
            <n-tag :type="server.type === 'emby' ? 'success' : 'info'" style="margin-left: 8px;">
              {{ server.type.toUpperCase() }}
            </n-tag>
          </template>
          <template #description>
            <n-space vertical size="small">
              <div><strong>URL:</strong> {{ server.url }}</div>
              <div><strong>API Key:</strong> {{ maskApiKey(server.api_key) }}</div>
              <div v-if="server.exclude_libraries && server.exclude_libraries.length > 0">
                <strong>排除媒体库:</strong> {{ server.exclude_libraries.join(', ') }}
              </div>
            </n-space>
          </template>
        </n-thing>
      </n-list-item>
      <n-empty v-if="servers.length === 0" description="暂无服务器配置" />
    </n-list>

    <n-divider />

    <n-space>
      <n-button type="primary" @click="reloadConfig" :loading="loading">
        <template #icon>
          <n-icon :component="RefreshOutline" />
        </template>
        重新加载配置
      </n-button>
    </n-space>
  </n-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {
  NCard,
  NAlert,
  NList,
  NListItem,
  NThing,
  NTag,
  NEmpty,
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
const servers = ref([])

const maskApiKey = (key) => {
  if (!key || key.length < 8) return '***'
  return key.substring(0, 4) + '***' + key.substring(key.length - 4)
}

const loadServers = async () => {
  loading.value = true
  try {
    const data = await api.getServers()
    servers.value = data.servers || []
  } catch (error) {
    message.error('加载服务器列表失败: ' + error.message)
  } finally {
    loading.value = false
  }
}

const reloadConfig = async () => {
  loading.value = true
  try {
    await api.reloadConfig()
    message.success('配置已重新加载')
    await loadServers()
  } catch (error) {
    message.error('重新加载配置失败: ' + error.message)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadServers()
})
</script>
