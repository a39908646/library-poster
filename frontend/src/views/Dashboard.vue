<template>
  <n-space vertical :size="24">
    <n-card title="系统状态">
      <n-spin :show="loading">
        <n-grid :cols="4" :x-gap="16">
          <n-gi>
            <n-statistic label="内存占用" :value="status.memory_mb" suffix="MB">
              <template #prefix>
                <n-icon :component="HardwareChipOutline" />
              </template>
            </n-statistic>
          </n-gi>
          <n-gi>
            <n-statistic label="CPU 使用率" :value="status.cpu_percent" suffix="%">
              <template #prefix>
                <n-icon :component="SpeedometerOutline" />
              </template>
            </n-statistic>
          </n-gi>
          <n-gi>
            <n-statistic label="服务器数量" :value="servers.length">
              <template #prefix>
                <n-icon :component="ServerOutline" />
              </template>
            </n-statistic>
          </n-gi>
          <n-gi>
            <n-statistic label="运行状态" value="正常">
              <template #prefix>
                <n-icon :component="CheckmarkCircleOutline" color="green" />
              </template>
            </n-statistic>
          </n-gi>
        </n-grid>
      </n-spin>
    </n-card>

    <n-card title="快速操作">
      <n-space>
        <n-button type="primary" @click="showGenerateModal = true">
          <template #icon>
            <n-icon :component="PlayCircleOutline" />
          </template>
          立即生成封面
        </n-button>
        <n-button @click="reloadConfig" :loading="reloading">
          <template #icon>
            <n-icon :component="RefreshOutline" />
          </template>
          重新加载配置
        </n-button>
        <n-button @click="loadData">
          <template #icon>
            <n-icon :component="RefreshOutline" />
          </template>
          刷新数据
        </n-button>
      </n-space>
    </n-card>

    <n-card title="服务器列表">
      <n-list bordered>
        <n-list-item v-for="server in servers" :key="server.name">
          <template #prefix>
            <n-icon :component="ServerOutline" size="24" />
          </template>
          <n-thing :title="server.name" :description="`类型: ${server.type.toUpperCase()} | URL: ${server.url}`">
            <template #header-extra>
              <n-tag :type="server.type === 'emby' ? 'success' : 'info'">
                {{ server.type.toUpperCase() }}
              </n-tag>
            </template>
          </n-thing>
        </n-list-item>
        <n-empty v-if="servers.length === 0" description="暂无服务器配置" />
      </n-list>
    </n-card>

    <!-- 生成封面对话框 -->
    <n-modal v-model:show="showGenerateModal" preset="dialog" title="生成封面">
      <n-form>
        <n-form-item label="选择服务器">
          <n-select
            v-model:value="selectedServer"
            :options="serverOptions"
            placeholder="请选择服务器"
          />
        </n-form-item>
        <n-form-item label="媒体库（可选）">
          <n-input
            v-model:value="selectedLibrary"
            placeholder="留空则生成所有媒体库"
          />
        </n-form-item>
      </n-form>
      <template #action>
        <n-space>
          <n-button @click="showGenerateModal = false">取消</n-button>
          <n-button type="primary" @click="handleGenerate" :loading="generating">
            开始生成
          </n-button>
        </n-space>
      </template>
    </n-modal>
  </n-space>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import {
  NSpace,
  NCard,
  NGrid,
  NGi,
  NStatistic,
  NButton,
  NIcon,
  NSpin,
  NList,
  NListItem,
  NThing,
  NTag,
  NEmpty,
  NModal,
  NForm,
  NFormItem,
  NSelect,
  NInput,
  useMessage
} from 'naive-ui'
import {
  HardwareChipOutline,
  SpeedometerOutline,
  ServerOutline,
  CheckmarkCircleOutline,
  PlayCircleOutline,
  RefreshOutline
} from '@vicons/ionicons5'
import { api } from '@/api/client'

const message = useMessage()
const loading = ref(false)
const reloading = ref(false)
const generating = ref(false)
const showGenerateModal = ref(false)

const status = ref({
  memory_mb: 0,
  cpu_percent: 0
})
const servers = ref([])
const selectedServer = ref(null)
const selectedLibrary = ref('')

const serverOptions = computed(() =>
  servers.value.map(s => ({ label: s.name, value: s.name }))
)

const loadData = async () => {
  loading.value = true
  try {
    const [statusData, serversData] = await Promise.all([
      api.getStatus(),
      api.getServers()
    ])
    status.value = statusData
    servers.value = serversData.servers || []
  } catch (error) {
    message.error('加载数据失败: ' + error.message)
  } finally {
    loading.value = false
  }
}

const reloadConfig = async () => {
  reloading.value = true
  try {
    await api.reloadConfig()
    message.success('配置已重新加载')
    await loadData()
  } catch (error) {
    message.error('重新加载配置失败: ' + error.message)
  } finally {
    reloading.value = false
  }
}

const handleGenerate = async () => {
  if (!selectedServer.value) {
    message.warning('请选择服务器')
    return
  }

  generating.value = true
  try {
    await api.generateCover(
      selectedServer.value,
      selectedLibrary.value || null
    )
    message.success('封面生成任务已启动')
    showGenerateModal.value = false
    selectedServer.value = null
    selectedLibrary.value = ''
  } catch (error) {
    message.error('启动生成任务失败: ' + error.message)
  } finally {
    generating.value = false
  }
}

onMounted(() => {
  loadData()
})
</script>
