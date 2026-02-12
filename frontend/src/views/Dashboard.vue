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
        <n-button
          type="info"
          @click="startBatchGenerate"
          :disabled="selectedServers.length === 0"
        >
          <template #icon>
            <n-icon :component="LayersOutline" />
          </template>
          批量生成 {{ selectedServers.length > 0 ? `(${selectedServers.length})` : '' }}
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
      <template #header-extra>
        <n-checkbox
          v-if="servers.length > 0"
          :checked="selectedServers.length === servers.length"
          :indeterminate="selectedServers.length > 0 && selectedServers.length < servers.length"
          @update:checked="toggleSelectAll"
        >
          全选
        </n-checkbox>
      </template>

      <n-checkbox-group v-model:value="selectedServers">
        <n-list bordered>
          <n-list-item v-for="server in servers" :key="server.name">
            <template #prefix>
              <n-checkbox :value="server.name" style="margin-right: 12px;" />
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
      </n-checkbox-group>
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

    <!-- 批量任务进度对话框 -->
    <n-modal v-model:show="showBatchModal" preset="card" title="批量生成进度" style="width: 600px;">
      <n-space vertical :size="16">
        <n-descriptions bordered :column="2">
          <n-descriptions-item label="状态">
            <n-tag :type="getBatchStatusType(batchJob?.status)">
              {{ getBatchStatusText(batchJob?.status) }}
            </n-tag>
          </n-descriptions-item>
          <n-descriptions-item label="进度">
            {{ batchJob?.completed || 0 }} / {{ batchJob?.total || 0 }}
          </n-descriptions-item>
          <n-descriptions-item label="成功">
            <n-text type="success">{{ batchJob?.completed || 0 }}</n-text>
          </n-descriptions-item>
          <n-descriptions-item label="失败">
            <n-text type="error">{{ batchJob?.failed || 0 }}</n-text>
          </n-descriptions-item>
        </n-descriptions>

        <n-progress
          type="line"
          :percentage="batchJob?.progress || 0"
          :status="batchJob?.failed > 0 ? 'warning' : 'success'"
          :indicator-placement="'inside'"
        />

        <n-collapse v-if="batchJob?.results?.length">
          <n-collapse-item title="任务详情" name="details">
            <n-list bordered size="small">
              <n-list-item v-for="(result, index) in batchJob.results" :key="index">
                <n-space justify="space-between" align="center" style="width: 100%;">
                  <span>{{ result.target.server_name }}{{ result.target.library_name ? '/' + result.target.library_name : '' }}</span>
                  <n-tag :type="result.status === 'success' ? 'success' : result.status === 'failed' ? 'error' : 'warning'" size="small">
                    {{ result.status === 'success' ? '成功' : result.status === 'failed' ? '失败' : '已取消' }}
                  </n-tag>
                </n-space>
                <n-text v-if="result.message && result.status !== 'success'" type="error" depth="3" style="font-size: 12px;">
                  {{ result.message }}
                </n-text>
              </n-list-item>
            </n-list>
          </n-collapse-item>
        </n-collapse>
      </n-space>

      <template #footer>
        <n-space justify="end">
          <n-button
            v-if="batchJob && !['completed', 'failed', 'canceled'].includes(batchJob.status)"
            type="error"
            @click="handleCancelBatch"
            :loading="canceling"
          >
            取消任务
          </n-button>
          <n-button @click="showBatchModal = false">关闭</n-button>
        </n-space>
      </template>
    </n-modal>
  </n-space>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
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
  NCheckbox,
  NCheckboxGroup,
  NDescriptions,
  NDescriptionsItem,
  NProgress,
  NCollapse,
  NCollapseItem,
  NText,
  useMessage
} from 'naive-ui'
import {
  HardwareChipOutline,
  SpeedometerOutline,
  ServerOutline,
  CheckmarkCircleOutline,
  PlayCircleOutline,
  RefreshOutline,
  LayersOutline
} from '@vicons/ionicons5'
import { api } from '@/api/client'

const message = useMessage()
const loading = ref(false)
const reloading = ref(false)
const generating = ref(false)
const canceling = ref(false)
const showGenerateModal = ref(false)
const showBatchModal = ref(false)

const status = ref({ memory_mb: 0, cpu_percent: 0 })
const servers = ref([])
const selectedServer = ref(null)
const selectedLibrary = ref('')
const selectedServers = ref([])
const batchJob = ref(null)
let batchPollTimer = null

const serverOptions = computed(() =>
  servers.value.map(s => ({ label: s.name, value: s.name }))
)

function toggleSelectAll(checked) {
  if (checked) {
    selectedServers.value = servers.value.map(s => s.name)
  } else {
    selectedServers.value = []
  }
}

function getBatchStatusType(status) {
  const types = {
    pending: 'default',
    running: 'info',
    canceling: 'warning',
    canceled: 'warning',
    completed: 'success',
    failed: 'error'
  }
  return types[status] || 'default'
}

function getBatchStatusText(status) {
  const texts = {
    pending: '等待中',
    running: '运行中',
    canceling: '取消中',
    canceled: '已取消',
    completed: '已完成',
    failed: '有失败'
  }
  return texts[status] || status
}

async function loadData() {
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

async function reloadConfig() {
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

async function handleGenerate() {
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

async function startBatchGenerate() {
  if (selectedServers.value.length === 0) {
    message.warning('请选择至少一个服务器')
    return
  }

  try {
    const targets = selectedServers.value.map(name => ({
      server_name: name,
      library_name: null
    }))

    const result = await api.createBatch(targets)
    batchJob.value = result.job
    showBatchModal.value = true
    startBatchPolling(result.job.job_id)
    message.success('批量任务已创建')
  } catch (error) {
    message.error('创建批量任务失败: ' + error.message)
  }
}

function startBatchPolling(jobId) {
  stopBatchPolling()
  batchPollTimer = setInterval(async () => {
    try {
      const result = await api.getBatchStatus(jobId)
      batchJob.value = result.job

      if (['completed', 'failed', 'canceled'].includes(result.job.status)) {
        stopBatchPolling()
      }
    } catch (error) {
      console.error('Failed to poll batch status:', error)
    }
  }, 3000)
}

function stopBatchPolling() {
  if (batchPollTimer) {
    clearInterval(batchPollTimer)
    batchPollTimer = null
  }
}

async function handleCancelBatch() {
  if (!batchJob.value) return

  canceling.value = true
  try {
    const result = await api.cancelBatch(batchJob.value.job_id)
    batchJob.value = result.job
    message.success('任务已取消')
  } catch (error) {
    message.error('取消任务失败: ' + error.message)
  } finally {
    canceling.value = false
  }
}

onMounted(() => {
  loadData()
})

onUnmounted(() => {
  stopBatchPolling()
})
</script>
