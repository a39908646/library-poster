<template>
  <n-card title="生成历史">
    <n-spin :show="loading">
      <n-alert v-if="Object.keys(history).length === 0" type="info">
        暂无生成历史记录
      </n-alert>

      <n-collapse v-else>
        <n-collapse-item
          v-for="(libraries, serverName) in history"
          :key="serverName"
          :title="`服务器: ${serverName}`"
        >
          <n-collapse>
            <n-collapse-item
              v-for="(items, libraryId) in libraries"
              :key="libraryId"
              :title="`媒体库 ID: ${libraryId}`"
            >
              <n-list bordered>
                <n-list-item v-for="(record, itemId) in items" :key="itemId">
                  <n-thing>
                    <template #header>项目 ID: {{ itemId }}</template>
                    <template #description>
                      <n-space vertical size="small">
                        <div><strong>标签:</strong> {{ record.tag }}</div>
                        <div><strong>时间:</strong> {{ formatTime(record.timestamp) }}</div>
                      </n-space>
                    </template>
                  </n-thing>
                </n-list-item>
              </n-list>
            </n-collapse-item>
          </n-collapse>
        </n-collapse-item>
      </n-collapse>
    </n-spin>

    <n-divider />

    <n-button @click="loadHistory" :loading="loading">
      <template #icon>
        <n-icon :component="RefreshOutline" />
      </template>
      刷新历史
    </n-button>
  </n-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {
  NCard,
  NSpin,
  NAlert,
  NCollapse,
  NCollapseItem,
  NList,
  NListItem,
  NThing,
  NSpace,
  NDivider,
  NButton,
  NIcon,
  useMessage
} from 'naive-ui'
import { RefreshOutline } from '@vicons/ionicons5'
import { api } from '@/api/client'

const message = useMessage()
const loading = ref(false)
const history = ref({})

const formatTime = (timestamp) => {
  if (!timestamp) return '-'
  return new Date(timestamp).toLocaleString('zh-CN')
}

const loadHistory = async () => {
  loading.value = true
  try {
    const data = await api.getHistory()
    history.value = data.history || {}
  } catch (error) {
    message.error('加载历史记录失败: ' + error.message)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadHistory()
})
</script>
