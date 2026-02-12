<template>
  <n-space vertical :size="24">
    <!-- 预览卡片 -->
    <n-card title="封面预览">
      <n-space vertical :size="16">
        <n-grid :cols="3" :x-gap="16">
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
                v-model:value="previewLibrary"
                :options="libraryOptions"
                placeholder="留空随机选择"
                clearable
                :loading="loadingLibraries"
              />
            </n-form-item>
          </n-gi>
          <n-gi>
            <n-form-item label="预览风格">
              <n-radio-group v-model:value="previewStyle">
                <n-radio-button value="single_1">单图1</n-radio-button>
                <n-radio-button value="single_2">单图2</n-radio-button>
                <n-radio-button value="multi_1">九宫格</n-radio-button>
              </n-radio-group>
            </n-form-item>
          </n-gi>
        </n-grid>

        <n-space>
          <n-button type="primary" @click="handlePreview" :loading="previewing" :disabled="!previewServer">
            <template #icon><n-icon :component="EyeOutline" /></template>
            生成预览
          </n-button>
          <n-button @click="handleApply" :loading="applying" :disabled="!previewImage || !previewServer">
            <template #icon><n-icon :component="CheckmarkOutline" /></template>
            应用到媒体库
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
    <n-card title="封面风格配置">
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
  NFormItem,
  NSelect,
  NRadioGroup,
  NRadioButton,
  NButton,
  NIcon,
  NSpin,
  NImage,
  NEmpty,
  NDescriptions,
  NDescriptionsItem,
  NTag,
  NDivider,
  useMessage
} from 'naive-ui'
import { EyeOutline, CheckmarkOutline } from '@vicons/ionicons5'
import { api } from '@/api/client'

const message = useMessage()
const loading = ref(false)
const previewing = ref(false)
const applying = ref(false)
const loadingLibraries = ref(false)

const config = ref({})
const servers = ref([])
const libraries = ref([])
const previewServer = ref(null)
const previewLibrary = ref(null)
const previewStyle = ref('single_1')
const previewImage = ref(null)

const serverOptions = computed(() =>
  servers.value.map(s => ({ label: s.name, value: s.name }))
)

const libraryOptions = computed(() =>
  libraries.value.map(l => ({ label: l.Name, value: l.Name }))
)

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

async function loadData() {
  loading.value = true
  try {
    const [configData, serversData] = await Promise.all([
      api.getConfig(),
      api.getServers()
    ])
    config.value = configData
    servers.value = serversData.servers || []
    previewStyle.value = configData.cover?.style || 'single_1'
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
    // 暂时使用服务器信息，实际需要后端提供 libraries API
    libraries.value = []
    previewLibrary.value = null
  } catch (error) {
    message.error('加载媒体库失败: ' + error.message)
  } finally {
    loadingLibraries.value = false
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
    const configOverride = previewStyle.value !== config.value.cover?.style
      ? { cover: { style: previewStyle.value } }
      : null

    const result = await api.previewCover(
      previewServer.value,
      previewLibrary.value,
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
    await api.generateCover(previewServer.value, previewLibrary.value)
    message.success('封面生成任务已启动')
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
