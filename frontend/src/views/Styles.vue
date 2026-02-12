<template>
  <n-space vertical :size="24">
    <!-- 风格配置 -->
    <n-card title="风格配置">
      <n-space vertical :size="16">
        <n-form label-placement="left" label-width="120">
          <n-form-item label="封面风格">
            <n-radio-group v-model:value="styleConfig.style" @update:value="onStyleChange">
              <n-radio-button value="single_1">单图风格 1</n-radio-button>
              <n-radio-button value="single_2">单图风格 2</n-radio-button>
              <n-radio-button value="multi_1">多图风格</n-radio-button>
            </n-radio-group>
          </n-form-item>
          <n-form-item label="排序方式">
            <n-select v-model:value="styleConfig.sort_by" :options="sortByOptions" style="width: 200px;" />
          </n-form-item>

          <n-divider title-placement="left">
            {{ styleConfig.style === 'multi_1' ? '多图风格参数' : '单图风格参数' }}
          </n-divider>

          <!-- 单图风格参数 -->
          <template v-if="styleConfig.style.startsWith('single')">
            <n-form-item label="模糊程度">
              <n-slider v-model:value="styleParams.single.blur_size" :min="0" :max="100" :step="5" style="width: 300px;" />
              <span style="margin-left: 12px; min-width: 40px;">{{ styleParams.single.blur_size }}</span>
            </n-form-item>
            <n-form-item label="颜色比例">
              <n-slider v-model:value="styleParams.single.color_ratio" :min="0" :max="1" :step="0.1" style="width: 300px;" />
              <span style="margin-left: 12px; min-width: 40px;">{{ styleParams.single.color_ratio }}</span>
            </n-form-item>
            <n-form-item label="优先使用海报图">
              <n-switch v-model:value="styleParams.single.use_primary" />
              <span style="margin-left: 8px; color: #999; font-size: 13px;">关闭则优先使用背景图</span>
            </n-form-item>
          </template>

          <!-- 多图风格参数 -->
          <template v-else>
            <n-form-item label="启用模糊">
              <n-switch v-model:value="styleParams.multi_1.blur" />
            </n-form-item>
            <n-form-item label="模糊程度" v-if="styleParams.multi_1.blur">
              <n-slider v-model:value="styleParams.multi_1.blur_size" :min="0" :max="100" :step="5" style="width: 300px;" />
              <span style="margin-left: 12px; min-width: 40px;">{{ styleParams.multi_1.blur_size }}</span>
            </n-form-item>
            <n-form-item label="颜色比例">
              <n-slider v-model:value="styleParams.multi_1.color_ratio" :min="0" :max="1" :step="0.1" style="width: 300px;" />
              <span style="margin-left: 12px; min-width: 40px;">{{ styleParams.multi_1.color_ratio }}</span>
            </n-form-item>
            <n-form-item label="优先使用海报图">
              <n-switch v-model:value="styleParams.multi_1.use_primary" />
              <span style="margin-left: 8px; color: #999; font-size: 13px;">关闭则优先使用背景图</span>
            </n-form-item>
          </template>

          <n-form-item label="保存到本地">
            <n-switch v-model:value="styleConfig.save_to_local" />
          </n-form-item>
          <n-form-item label="输出目录" v-if="styleConfig.save_to_local">
            <n-input v-model:value="styleConfig.output_dir" placeholder="covers_output" style="width: 300px;" />
          </n-form-item>
        </n-form>

        <n-space>
          <n-button type="primary" @click="handleSaveConfig" :loading="saving" :disabled="!hasChanges">
            <template #icon><n-icon :component="SaveOutline" /></template>
            保存配置
          </n-button>
          <n-tag v-if="hasChanges" type="warning">有未保存的更改</n-tag>
        </n-space>
      </n-space>
    </n-card>

    <!-- 预览与应用 -->
    <n-card title="封面预览与应用">
      <n-space vertical :size="16">
        <n-grid :cols="2" :x-gap="16">
          <n-gi>
            <n-form-item label="选择服务器">
              <n-select
                v-model:value="previewServer"
                :options="serverOptions"
                placeholder="请选择服务器"
                @update:value="loadLibraries"
              />
            </n-form-item>
          </n-gi>
          <n-gi>
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
          </n-gi>
        </n-grid>

        <n-space>
          <n-button type="primary" @click="handlePreview" :loading="previewing" :disabled="!previewServer">
            <template #icon><n-icon :component="EyeOutline" /></template>
            生成预览
          </n-button>
          <n-button
            type="success"
            @click="handleApply"
            :loading="applying"
            :disabled="!previewServer"
          >
            <template #icon><n-icon :component="CheckmarkOutline" /></template>
            {{ applyButtonText }}
          </n-button>
        </n-space>

        <n-spin :show="previewing">
          <div class="preview-container" v-if="previewImage">
            <n-image
              :src="'data:image/jpeg;base64,' + previewImage"
              object-fit="contain"
              style="max-width: 100%; max-height: 400px;"
            />
          </div>
          <n-empty v-else description="点击「生成预览」查看效果" style="padding: 60px 0;" />
        </n-spin>
      </n-space>
    </n-card>

    <!-- 风格说明 -->
    <n-card title="风格说明" size="small">
      <n-space vertical size="large">
        <n-card title="单图风格 1 (single_1)" size="small" :bordered="false">
          <p>旋转卡片风格，使用单张图片生成带有 3D 旋转效果的封面</p>
          <n-tag type="success">推荐</n-tag>
        </n-card>
        <n-card title="单图风格 2 (single_2)" size="small" :bordered="false">
          <p>简约风格，使用单张图片生成简洁的封面</p>
        </n-card>
        <n-card title="多图风格 (multi_1)" size="small" :bordered="false">
          <p>将多张海报以旋转列形式排列在渐变背景上，展示媒体库丰富内容</p>
          <n-tag type="info">需要至少 9 张图片</n-tag>
        </n-card>
      </n-space>
    </n-card>
  </n-space>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import {
  NSpace,
  NCard,
  NGrid,
  NGi,
  NForm,
  NFormItem,
  NInput,
  NSelect,
  NSlider,
  NSwitch,
  NRadioGroup,
  NRadioButton,
  NButton,
  NIcon,
  NSpin,
  NImage,
  NEmpty,
  NTag,
  NDivider,
  useMessage
} from 'naive-ui'
import { EyeOutline, CheckmarkOutline, SaveOutline } from '@vicons/ionicons5'
import { api } from '@/api/client'

const message = useMessage()
const loading = ref(false)
const previewing = ref(false)
const applying = ref(false)
const saving = ref(false)
const loadingLibraries = ref(false)

const servers = ref([])
const libraries = ref([])
const previewServer = ref(null)
const selectedLibraries = ref([])
const previewImage = ref(null)

// 风格配置（可编辑）
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

// 原始配置，用于检测变更
const originalStyleConfig = ref(null)
const originalStyleParams = ref(null)

const hasChanges = computed(() => {
  return JSON.stringify(styleConfig.value) !== JSON.stringify(originalStyleConfig.value) ||
    JSON.stringify(styleParams.value) !== JSON.stringify(originalStyleParams.value)
})

const sortByOptions = [
  { label: '随机', value: 'Random' },
  { label: '创建日期', value: 'DateCreated' },
  { label: '名称', value: 'SortName' }
]

const serverOptions = computed(() =>
  servers.value.map(s => ({ label: s.name, value: s.name }))
)

const libraryOptions = computed(() =>
  libraries.value.map(l => ({ label: l.Name, value: l.Name }))
)

const applyButtonText = computed(() => {
  if (selectedLibraries.value.length === 0) {
    return '应用到全部媒体库'
  }
  return `应用到 ${selectedLibraries.value.length} 个媒体库`
})

function onStyleChange() {
  // 切换风格时清除预览
  previewImage.value = null
}

async function loadData() {
  loading.value = true
  try {
    const [fullConfig, serversData] = await Promise.all([
      api.getFullConfig(),
      api.getServers()
    ])
    servers.value = serversData.servers || []

    // 加载风格配置
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

    // 记录原始值
    originalStyleConfig.value = JSON.parse(JSON.stringify(styleConfig.value))
    originalStyleParams.value = JSON.parse(JSON.stringify(styleParams.value))
  } catch (error) {
    message.error('加载数据失败: ' + error.message)
  } finally {
    loading.value = false
  }
}

async function loadLibraries() {
  if (!previewServer.value) {
    libraries.value = []
    return
  }

  loadingLibraries.value = true
  try {
    const data = await api.getServerLibraries(previewServer.value)
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
    // 获取完整配置，合并修改的部分
    const fullConfig = await api.getFullConfig()
    fullConfig.cover = {
      ...fullConfig.cover,
      ...styleConfig.value
    }
    fullConfig.style_params = {
      ...fullConfig.style_params,
      single: { ...styleParams.value.single },
      multi_1: { ...styleParams.value.multi_1 }
    }

    await api.saveConfig(fullConfig)
    message.success('配置已保存')
    originalStyleConfig.value = JSON.parse(JSON.stringify(styleConfig.value))
    originalStyleParams.value = JSON.parse(JSON.stringify(styleParams.value))
  } catch (error) {
    message.error('保存失败: ' + error.message)
  } finally {
    saving.value = false
  }
}

async function handlePreview() {
  if (!previewServer.value) {
    message.warning('请选择服务器')
    return
  }

  previewing.value = true
  previewImage.value = null
  try {
    // 使用当前编辑的风格参数作为 override
    const configOverride = {
      cover: { style: styleConfig.value.style, sort_by: styleConfig.value.sort_by },
      style_params: styleParams.value
    }

    // 预览时使用第一个选中的媒体库，未选择则传 null（使用第一个可用的）
    const libraryName = selectedLibraries.value.length > 0
      ? selectedLibraries.value[0]
      : null

    const result = await api.previewCover(
      previewServer.value,
      libraryName,
      configOverride
    )
    previewImage.value = result.preview_base64
    message.success('预览生成成功')
  } catch (error) {
    message.error('生成预览失败: ' + error.message)
  } finally {
    previewing.value = false
  }
}

async function handleApply() {
  if (!previewServer.value) {
    message.warning('请选择服务器')
    return
  }

  applying.value = true
  try {
    if (selectedLibraries.value.length === 0) {
      // 未选择 = 全部媒体库
      await api.generateCover(previewServer.value, null)
      message.success('已启动全部媒体库封面生成')
    } else if (selectedLibraries.value.length === 1) {
      // 单个媒体库
      await api.generateCover(previewServer.value, selectedLibraries.value[0])
      message.success('封面生成任务已启动')
    } else {
      // 多个媒体库，使用批量接口
      const targets = selectedLibraries.value.map(name => ({
        server_name: previewServer.value,
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
.preview-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 16px;
}
</style>
