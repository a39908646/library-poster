<template>
  <n-space vertical :size="24">
    <n-card>
      <template #header>
        <n-space justify="space-between" align="center">
          <span>风格配置</span>
          <n-space>
            <n-tag v-if="hasChanges" type="warning">有未保存的更改</n-tag>
            <n-button type="primary" @click="handleSaveConfig" :loading="saving" :disabled="!hasChanges">
              <template #icon><n-icon :component="SaveOutline" /></template>
              保存配置
            </n-button>
          </n-space>
        </n-space>
      </template>

      <n-tabs type="line" animated>
        <!-- 封面风格 -->
        <n-tab-pane name="style" tab="封面风格">
          <n-space vertical :size="16">
            <div class="style-cards">
              <div
                v-for="s in styleList"
                :key="s.value"
                class="style-card"
                :class="{ active: styleConfig.style === s.value }"
                @click="styleConfig.style = s.value"
              >
                <img :src="s.image" :alt="s.label" class="style-image" />
                <div class="style-label">
                  <n-radio
                    :checked="styleConfig.style === s.value"
                    @update:checked="styleConfig.style = s.value"
                  />
                  <span>{{ s.label }}</span>
                </div>
              </div>
            </div>

            <!-- 单图风格参数 -->
            <n-form v-if="styleConfig.style.startsWith('single')" label-placement="left" label-width="140" style="max-width: 500px;">
              <n-form-item label="背景模糊程度">
                <n-slider v-model:value="styleParams.single.blur_size" :min="0" :max="100" :step="5" />
                <span style="margin-left: 12px; min-width: 40px;">{{ styleParams.single.blur_size }}</span>
              </n-form-item>
              <n-form-item label="背景颜色比例">
                <n-slider v-model:value="styleParams.single.color_ratio" :min="0" :max="1" :step="0.1" />
                <span style="margin-left: 12px; min-width: 40px;">{{ styleParams.single.color_ratio }}</span>
              </n-form-item>
              <n-form-item label="优先使用海报图">
                <n-switch v-model:value="styleParams.single.use_primary" />
                <span style="margin-left: 8px; color: #999; font-size: 13px;">关闭则优先使用背景图</span>
              </n-form-item>
            </n-form>

            <!-- 多图风格参数 -->
            <n-form v-if="styleConfig.style === 'multi_1'" label-placement="left" label-width="140" style="max-width: 500px;">
              <n-form-item label="启用背景模糊">
                <n-switch v-model:value="styleParams.multi_1.blur" />
              </n-form-item>
              <n-form-item label="背景模糊程度" v-if="styleParams.multi_1.blur">
                <n-slider v-model:value="styleParams.multi_1.blur_size" :min="0" :max="100" :step="5" />
                <span style="margin-left: 12px; min-width: 40px;">{{ styleParams.multi_1.blur_size }}</span>
              </n-form-item>
              <n-form-item label="背景颜色比例">
                <n-slider v-model:value="styleParams.multi_1.color_ratio" :min="0" :max="1" :step="0.1" />
                <span style="margin-left: 12px; min-width: 40px;">{{ styleParams.multi_1.color_ratio }}</span>
              </n-form-item>
              <n-form-item label="优先使用海报图">
                <n-switch v-model:value="styleParams.multi_1.use_primary" />
                <span style="margin-left: 8px; color: #999; font-size: 13px;">关闭则优先使用背景图</span>
              </n-form-item>
            </n-form>

            <n-form label-placement="left" label-width="140" style="max-width: 500px;">
              <n-form-item label="排序方式">
                <n-select v-model:value="styleConfig.sort_by" :options="sortByOptions" />
              </n-form-item>
              <n-form-item label="保存到本地">
                <n-switch v-model:value="styleConfig.save_to_local" />
              </n-form-item>
              <n-form-item label="输出目录" v-if="styleConfig.save_to_local">
                <n-input v-model:value="styleConfig.output_dir" placeholder="covers_output" />
              </n-form-item>
            </n-form>
          </n-space>
        </n-tab-pane>

        <!-- 封面标题 -->
        <n-tab-pane name="titles" tab="封面标题">
          <n-space vertical :size="16">
            <p style="color: #999;">为每个媒体库设置自定义中英文标题，留空则使用媒体库名称作为标题。</p>
            <n-button @click="addTitle" type="primary" dashed size="small">
              <template #icon><n-icon :component="AddOutline" /></template>
              添加标题
            </n-button>
            <n-table :bordered="false" :single-line="false" size="small" v-if="titleList.length > 0">
              <thead>
                <tr>
                  <th style="width: 25%;">媒体库名称</th>
                  <th style="width: 30%;">中文标题</th>
                  <th style="width: 30%;">英文标题</th>
                  <th style="width: 15%;">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in titleList" :key="index">
                  <td>
                    <n-input v-model:value="item.key" placeholder="媒体库名称" size="small" />
                  </td>
                  <td>
                    <n-input v-model:value="item.zh" placeholder="中文标题" size="small" />
                  </td>
                  <td>
                    <n-input v-model:value="item.en" placeholder="ENGLISH TITLE" size="small" />
                  </td>
                  <td>
                    <n-button size="small" type="error" quaternary @click="removeTitle(index)">删除</n-button>
                  </td>
                </tr>
              </tbody>
            </n-table>
            <n-empty v-else description="暂无自定义标题，将使用媒体库名称" />
          </n-space>
        </n-tab-pane>

        <!-- 应用封面 -->
        <n-tab-pane name="apply" tab="应用封面">
          <n-space vertical :size="16">
            <n-form label-placement="left" label-width="120" style="max-width: 600px;">
              <n-form-item label="选择服务器">
                <n-select
                  v-model:value="applyServer"
                  :options="serverOptions"
                  placeholder="请选择服务器"
                  @update:value="loadLibraries"
                />
              </n-form-item>
              <n-form-item label="选择媒体库">
                <n-select
                  v-model:value="selectedLibraries"
                  :options="libraryOptions"
                  placeholder="留空表示全部媒体库"
                  multiple
                  clearable
                  :loading="loadingLibraries"
                />
              </n-form-item>
            </n-form>
            <n-button
              type="success"
              @click="handleApply"
              :loading="applying"
              :disabled="!applyServer"
            >
              <template #icon><n-icon :component="CheckmarkOutline" /></template>
              {{ applyButtonText }}
            </n-button>
          </n-space>
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </n-space>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import {
  NSpace,
  NCard,
  NTabs,
  NTabPane,
  NForm,
  NFormItem,
  NInput,
  NSelect,
  NSlider,
  NSwitch,
  NRadio,
  NButton,
  NIcon,
  NTag,
  NTable,
  NEmpty,
  useMessage
} from 'naive-ui'
import { SaveOutline, CheckmarkOutline, AddOutline } from '@vicons/ionicons5'
import { api } from '@/api/client'

const message = useMessage()
const saving = ref(false)
const applying = ref(false)
const loadingLibraries = ref(false)

const servers = ref([])
const libraries = ref([])
const applyServer = ref(null)
const selectedLibraries = ref([])

// 风格示例图
const styleList = [
  { value: 'single_1', label: '单图 1', image: '/images/single_1.jpg' },
  { value: 'single_2', label: '单图 2', image: '/images/single_2.jpg' },
  { value: 'multi_1', label: '多图 1', image: '/images/multi_1.jpg' }
]

// 风格配置
const styleConfig = ref({
  style: 'single_1',
  sort_by: 'Random',
  save_to_local: false,
  output_dir: 'covers_output'
})

const styleParams = ref({
  single: { blur_size: 50, color_ratio: 0.8, use_primary: false },
  multi_1: { blur: false, blur_size: 50, color_ratio: 0.8, use_primary: true }
})

// 标题配置 (转为数组方便编辑)
const titleList = ref([])

// 原始配置
const originalStyleConfig = ref(null)
const originalStyleParams = ref(null)
const originalTitleList = ref(null)

const hasChanges = computed(() => {
  return JSON.stringify(styleConfig.value) !== JSON.stringify(originalStyleConfig.value) ||
    JSON.stringify(styleParams.value) !== JSON.stringify(originalStyleParams.value) ||
    JSON.stringify(titleList.value) !== JSON.stringify(originalTitleList.value)
})

const sortByOptions = [
  { label: '随机', value: 'Random' },
  { label: '最新入库', value: 'DateCreated' },
  { label: '名称', value: 'SortName' }
]

const serverOptions = computed(() =>
  servers.value.map(s => ({ label: s.name, value: s.name }))
)

const libraryOptions = computed(() =>
  libraries.value.map(l => ({ label: l.Name, value: l.Name }))
)

const applyButtonText = computed(() => {
  if (selectedLibraries.value.length === 0) return '应用到全部媒体库'
  return `应用到 ${selectedLibraries.value.length} 个媒体库`
})

function addTitle() {
  titleList.value.push({ key: '', zh: '', en: '' })
}

function removeTitle(index) {
  titleList.value.splice(index, 1)
}

// titles object <-> titleList array 转换
function titlesToList(titles) {
  if (!titles || typeof titles !== 'object') return []
  return Object.entries(titles).map(([key, val]) => ({
    key,
    zh: val.zh || '',
    en: val.en || ''
  }))
}

function listToTitles(list) {
  const result = {}
  for (const item of list) {
    if (item.key.trim()) {
      result[item.key.trim()] = { zh: item.zh, en: item.en }
    }
  }
  return result
}

async function loadData() {
  try {
    const [fullConfig, serversData] = await Promise.all([
      api.getFullConfig(),
      api.getServers()
    ])
    servers.value = serversData.servers || []

    if (fullConfig.cover) {
      styleConfig.value = {
        style: fullConfig.cover.style || 'single_1',
        sort_by: fullConfig.cover.sort_by || 'Random',
        save_to_local: fullConfig.cover.save_to_local || false,
        output_dir: fullConfig.cover.output_dir || 'covers_output'
      }
    }
    if (fullConfig.style_params) {
      styleParams.value = {
        single: { ...styleParams.value.single, ...fullConfig.style_params.single },
        multi_1: { ...styleParams.value.multi_1, ...fullConfig.style_params.multi_1 }
      }
    }
    titleList.value = titlesToList(fullConfig.titles)

    // 快照原始值
    originalStyleConfig.value = JSON.parse(JSON.stringify(styleConfig.value))
    originalStyleParams.value = JSON.parse(JSON.stringify(styleParams.value))
    originalTitleList.value = JSON.parse(JSON.stringify(titleList.value))
  } catch (error) {
    message.error('加载数据失败: ' + error.message)
  }
}

async function loadLibraries() {
  if (!applyServer.value) {
    libraries.value = []
    return
  }
  loadingLibraries.value = true
  try {
    const data = await api.getServerLibraries(applyServer.value)
    libraries.value = data.libraries || []
    selectedLibraries.value = []
  } catch (error) {
    message.error('加载媒体库失败: ' + error.message)
    libraries.value = []
  } finally {
    loadingLibraries.value = false
  }
}

async function handleSaveConfig() {
  saving.value = true
  try {
    const fullConfig = await api.getFullConfig()
    fullConfig.cover = { ...fullConfig.cover, ...styleConfig.value }
    fullConfig.style_params = {
      ...fullConfig.style_params,
      single: { ...styleParams.value.single },
      multi_1: { ...styleParams.value.multi_1 }
    }
    fullConfig.titles = listToTitles(titleList.value)

    await api.saveConfig(fullConfig)
    message.success('配置已保存')
    originalStyleConfig.value = JSON.parse(JSON.stringify(styleConfig.value))
    originalStyleParams.value = JSON.parse(JSON.stringify(styleParams.value))
    originalTitleList.value = JSON.parse(JSON.stringify(titleList.value))
  } catch (error) {
    message.error('保存失败: ' + error.message)
  } finally {
    saving.value = false
  }
}

async function handleApply() {
  if (!applyServer.value) {
    message.warning('请选择服务器')
    return
  }

  // 如果有未保存的更改，先保存
  if (hasChanges.value) {
    await handleSaveConfig()
  }

  applying.value = true
  try {
    if (selectedLibraries.value.length === 0) {
      await api.generateCover(applyServer.value, null)
      message.success('已启动全部媒体库封面生成')
    } else if (selectedLibraries.value.length === 1) {
      await api.generateCover(applyServer.value, selectedLibraries.value[0])
      message.success('封面生成任务已启动')
    } else {
      const targets = selectedLibraries.value.map(name => ({
        server_name: applyServer.value,
        library_name: name
      }))
      await api.createBatch(targets)
      message.success(`已启动 ${targets.length} 个媒体库封面生成`)
    }
  } catch (error) {
    message.error('启动生成任务失败: ' + error.message)
  } finally {
    applying.value = false
  }
}

onMounted(() => {
  loadData()
})
</script>

<style scoped>
.style-cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.style-card {
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;
  background: rgba(255, 255, 255, 0.05);
  width: 220px;
}

.style-card:hover {
  border-color: rgba(99, 226, 183, 0.5);
}

.style-card.active {
  border-color: #63e2b7;
  box-shadow: 0 0 12px rgba(99, 226, 183, 0.3);
}

.style-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: block;
}

.style-label {
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}
</style>
