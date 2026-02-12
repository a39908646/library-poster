<template>
  <n-spin :show="loading">
    <n-space vertical :size="16">
      <n-card>
        <template #header>
          <n-space justify="space-between" align="center">
            <span>配置管理</span>
            <n-space>
              <n-tag v-if="hasChanges" type="warning">有未保存的更改</n-tag>
              <n-button @click="loadConfig" :loading="loading">
                <template #icon><n-icon :component="RefreshOutline" /></template>
                刷新
              </n-button>
              <n-button type="primary" @click="handleSave" :loading="saving" :disabled="!hasChanges">
                <template #icon><n-icon :component="SaveOutline" /></template>
                保存配置
              </n-button>
            </n-space>
          </n-space>
        </template>

        <n-tabs type="line" animated>
          <!-- 应用设置 -->
          <n-tab-pane name="app" tab="应用设置">
            <n-form label-placement="left" label-width="120">
              <n-form-item label="时区">
                <n-input v-model:value="config.app.timezone" placeholder="Asia/Shanghai" />
              </n-form-item>
              <n-form-item label="数据目录">
                <n-input v-model:value="config.app.data_dir" placeholder="./data" />
              </n-form-item>
              <n-form-item label="日志级别">
                <n-select v-model:value="config.app.log_level" :options="logLevelOptions" />
              </n-form-item>
            </n-form>
          </n-tab-pane>

          <!-- 服务器配置 -->
          <n-tab-pane name="servers" tab="服务器">
            <n-space vertical :size="16">
              <n-button @click="addServer" type="primary" dashed>
                <template #icon><n-icon :component="AddOutline" /></template>
                添加服务器
              </n-button>
              <n-collapse v-if="config.servers?.length">
                <n-collapse-item v-for="(server, index) in config.servers" :key="index" :title="server.name || '新服务器'" :name="index">
                  <n-form label-placement="left" label-width="100">
                    <n-form-item label="名称">
                      <n-input v-model:value="server.name" placeholder="我的服务器" />
                    </n-form-item>
                    <n-form-item label="类型">
                      <n-select v-model:value="server.type" :options="serverTypeOptions" />
                    </n-form-item>
                    <n-form-item label="URL">
                      <n-input v-model:value="server.url" placeholder="http://localhost:8096" />
                    </n-form-item>
                    <n-form-item label="API Key">
                      <n-input v-model:value="server.api_key" type="password" show-password-on="click" placeholder="留空不修改" />
                    </n-form-item>
                    <n-form-item label="排除媒体库">
                      <n-dynamic-tags v-model:value="server.exclude_libraries" />
                    </n-form-item>
                    <n-form-item>
                      <n-button type="error" @click="removeServer(index)">删除此服务器</n-button>
                    </n-form-item>
                  </n-form>
                </n-collapse-item>
              </n-collapse>
              <n-empty v-else description="暂无服务器配置" />
            </n-space>
          </n-tab-pane>

          <!-- 封面配置 -->
          <n-tab-pane name="cover" tab="封面">
            <n-form label-placement="left" label-width="120">
              <n-form-item label="封面风格">
                <n-radio-group v-model:value="config.cover.style">
                  <n-radio-button value="single_1">单图风格 1</n-radio-button>
                  <n-radio-button value="single_2">单图风格 2</n-radio-button>
                  <n-radio-button value="multi_1">九宫格</n-radio-button>
                </n-radio-group>
              </n-form-item>
              <n-form-item label="排序方式">
                <n-select v-model:value="config.cover.sort_by" :options="sortByOptions" />
              </n-form-item>
              <n-form-item label="保存到本地">
                <n-switch v-model:value="config.cover.save_to_local" />
              </n-form-item>
              <n-form-item label="输出目录" v-if="config.cover.save_to_local">
                <n-input v-model:value="config.cover.output_dir" placeholder="covers_output" />
              </n-form-item>
            </n-form>
          </n-tab-pane>

          <!-- 风格参数 -->
          <n-tab-pane name="style_params" tab="风格参数">
            <n-divider title-placement="left">单图风格参数</n-divider>
            <n-form label-placement="left" label-width="120">
              <n-form-item label="模糊程度">
                <n-slider v-model:value="config.style_params.single.blur_size" :min="0" :max="100" :step="5" />
              </n-form-item>
              <n-form-item label="颜色比例">
                <n-slider v-model:value="config.style_params.single.color_ratio" :min="0" :max="1" :step="0.1" />
              </n-form-item>
              <n-form-item label="优先海报">
                <n-switch v-model:value="config.style_params.single.use_primary" />
              </n-form-item>
            </n-form>

            <n-divider title-placement="left">九宫格风格参数</n-divider>
            <n-form label-placement="left" label-width="120">
              <n-form-item label="启用模糊">
                <n-switch v-model:value="config.style_params.multi_1.blur" />
              </n-form-item>
              <n-form-item label="模糊程度" v-if="config.style_params.multi_1.blur">
                <n-slider v-model:value="config.style_params.multi_1.blur_size" :min="0" :max="100" :step="5" />
              </n-form-item>
              <n-form-item label="颜色比例">
                <n-slider v-model:value="config.style_params.multi_1.color_ratio" :min="0" :max="1" :step="0.1" />
              </n-form-item>
              <n-form-item label="优先海报">
                <n-switch v-model:value="config.style_params.multi_1.use_primary" />
              </n-form-item>
            </n-form>
          </n-tab-pane>

          <!-- 定时任务 -->
          <n-tab-pane name="scheduler" tab="定时任务">
            <n-form label-placement="left" label-width="120">
              <n-form-item label="启用定时任务">
                <n-switch v-model:value="config.scheduler.enabled" />
              </n-form-item>
              <n-form-item label="Cron 表达式" v-if="config.scheduler.enabled">
                <n-input v-model:value="config.scheduler.cron" placeholder="0 2 * * *" />
              </n-form-item>
            </n-form>

            <n-divider title-placement="left">Webhook</n-divider>
            <n-form label-placement="left" label-width="120">
              <n-form-item label="启用 Webhook">
                <n-switch v-model:value="config.webhook.enabled" />
              </n-form-item>
              <n-form-item label="延迟时间（秒）" v-if="config.webhook.enabled">
                <n-input-number v-model:value="config.webhook.delay" :min="0" :max="600" />
              </n-form-item>
            </n-form>

            <n-divider />
            <n-table :bordered="false" :single-line="false" size="small">
              <thead>
                <tr><th>表达式</th><th>说明</th></tr>
              </thead>
              <tbody>
                <tr><td><n-code>0 2 * * *</n-code></td><td>每天凌晨 2 点</td></tr>
                <tr><td><n-code>0 */6 * * *</n-code></td><td>每 6 小时</td></tr>
                <tr><td><n-code>0 0 * * 0</n-code></td><td>每周日凌晨</td></tr>
              </tbody>
            </n-table>
          </n-tab-pane>

          <!-- 网络配置 -->
          <n-tab-pane name="network" tab="网络">
            <n-form label-placement="left" label-width="120">
              <n-form-item label="HTTP 代理">
                <n-input v-model:value="config.network.proxy" placeholder="留空不使用" />
              </n-form-item>
              <n-form-item label="GitHub 代理">
                <n-input v-model:value="config.network.github_proxy" placeholder="用于下载字体" />
              </n-form-item>
              <n-form-item label="超时时间（秒）">
                <n-input-number v-model:value="config.network.timeout" :min="5" :max="300" />
              </n-form-item>
              <n-form-item label="重试次数">
                <n-input-number v-model:value="config.network.retries" :min="0" :max="10" />
              </n-form-item>
            </n-form>

            <n-divider title-placement="left">性能</n-divider>
            <n-form label-placement="left" label-width="120">
              <n-form-item label="最大并发数">
                <n-input-number v-model:value="config.performance.max_concurrent" :min="1" :max="10" />
              </n-form-item>
            </n-form>
          </n-tab-pane>
        </n-tabs>
      </n-card>
    </n-space>
  </n-spin>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import {
  NSpin,
  NSpace,
  NCard,
  NTabs,
  NTabPane,
  NForm,
  NFormItem,
  NInput,
  NInputNumber,
  NSelect,
  NSwitch,
  NSlider,
  NRadioGroup,
  NRadioButton,
  NButton,
  NIcon,
  NTag,
  NCollapse,
  NCollapseItem,
  NDynamicTags,
  NDivider,
  NTable,
  NCode,
  NEmpty,
  useMessage
} from 'naive-ui'
import { RefreshOutline, SaveOutline, AddOutline } from '@vicons/ionicons5'
import { api } from '@/api/client'

const message = useMessage()
const loading = ref(false)
const saving = ref(false)
const config = ref(createEmptyConfig())
const originalConfig = ref(null)

const hasChanges = computed(() => {
  return JSON.stringify(config.value) !== JSON.stringify(originalConfig.value)
})

const logLevelOptions = [
  { label: 'DEBUG', value: 'DEBUG' },
  { label: 'INFO', value: 'INFO' },
  { label: 'WARNING', value: 'WARNING' },
  { label: 'ERROR', value: 'ERROR' }
]

const serverTypeOptions = [
  { label: 'Emby', value: 'emby' },
  { label: 'Jellyfin', value: 'jellyfin' }
]

const sortByOptions = [
  { label: '随机', value: 'Random' },
  { label: '创建日期', value: 'DateCreated' },
  { label: '名称', value: 'SortName' }
]

function createEmptyConfig() {
  return {
    app: { timezone: 'Asia/Shanghai', data_dir: './data', log_level: 'INFO' },
    servers: [],
    cover: { style: 'single_1', sort_by: 'Random', save_to_local: false, output_dir: 'covers_output', custom_images_dir: '' },
    fonts: {
      main: { zh_url: '', en_url: '', zh_local: '', en_local: '', zh_size: 1.0, en_size: 1.0 },
      multi_1: { zh_url: '', en_url: '', zh_local: '', en_local: '', zh_size: 1.0, en_size: 1.0, use_main_font: false }
    },
    style_params: {
      single: { blur_size: 50, color_ratio: 0.8, use_primary: false },
      multi_1: { blur: false, blur_size: 50, color_ratio: 0.8, use_primary: true }
    },
    titles: {},
    scheduler: { enabled: false, cron: '0 2 * * *' },
    webhook: { enabled: true, delay: 60 },
    network: { proxy: '', github_proxy: '', timeout: 30, retries: 3 },
    performance: { max_concurrent: 3 }
  }
}

function addServer() {
  if (!config.value.servers) config.value.servers = []
  config.value.servers.push({
    name: '',
    type: 'emby',
    url: '',
    api_key: '',
    exclude_libraries: []
  })
}

function removeServer(index) {
  config.value.servers.splice(index, 1)
}

async function loadConfig() {
  loading.value = true
  try {
    const data = await api.getFullConfig()
    config.value = JSON.parse(JSON.stringify(data))
    originalConfig.value = JSON.parse(JSON.stringify(data))
  } catch (error) {
    message.error('加载配置失败: ' + error.message)
  } finally {
    loading.value = false
  }
}

async function handleSave() {
  saving.value = true
  try {
    // 先校验
    const validateResult = await api.validateConfig(config.value)
    if (!validateResult.valid) {
      message.error('配置校验失败: ' + validateResult.errors.join(', '))
      return
    }

    // 保存
    await api.saveConfig(config.value)
    message.success('配置已保存并生效')
    originalConfig.value = JSON.parse(JSON.stringify(config.value))
  } catch (error) {
    message.error('保存配置失败: ' + error.message)
  } finally {
    saving.value = false
  }
}

onMounted(() => {
  loadConfig()
})
</script>
