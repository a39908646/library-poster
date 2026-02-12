<template>
  <n-space vertical :size="16">
    <!-- Webhook 提示 -->
    <n-card title="Webhook 配置">
      <n-alert type="info" :show-icon="true">
        <template #header>在 Emby/Jellyfin 中配置 Webhook（媒体入库自动更新封面）</template>
        <n-space vertical>
          <div><strong>1. 安装 Webhook 插件</strong>（Emby 插件目录搜索 Webhook）</div>
          <div><strong>2. 添加 Webhook，配置如下：</strong></div>
          <n-descriptions bordered :column="1" size="small" style="margin: 8px 0;">
            <n-descriptions-item label="网址">
              <n-text code>{{ webhookUrl }}/webhook/emby</n-text>
              <n-text depth="3">（Jellyfin 用 /webhook/jellyfin）</n-text>
            </n-descriptions-item>
            <n-descriptions-item label="请求内容类型">
              <n-tag type="success">application/json</n-tag>
            </n-descriptions-item>
            <n-descriptions-item label="事件类型">
              <n-space>
                <n-tag type="info">✓ 媒体库 - 已添加新媒体</n-tag>
              </n-space>
            </n-descriptions-item>
          </n-descriptions>
          <div><strong>3. 保存后点击"发送测试通知"验证</strong></div>
        </n-space>
      </n-alert>
    </n-card>

    <!-- 服务器列表 -->
    <n-card title="服务器管理">
      <template #header-extra>
        <n-button type="primary" @click="showAddModal">
          <template #icon><n-icon :component="AddOutline" /></template>
          添加服务器
        </n-button>
      </template>

      <n-spin :show="loading">
        <n-list bordered v-if="servers.length > 0">
          <n-list-item v-for="(server, index) in servers" :key="server.name">
            <n-thing>
              <template #header>
                <n-space align="center">
                  {{ server.name }}
                  <n-tag :type="server.type === 'emby' ? 'success' : 'info'" size="small">
                    {{ server.type.toUpperCase() }}
                  </n-tag>
                </n-space>
              </template>
              <template #description>
                <n-space vertical size="small">
                  <div><strong>URL:</strong> {{ server.url }}</div>
                  <div><strong>API Key:</strong> {{ maskApiKey(server.api_key) }}</div>
                  <div v-if="server.exclude_libraries?.length">
                    <strong>排除媒体库:</strong> {{ server.exclude_libraries.join(', ') }}
                  </div>
                </n-space>
              </template>
              <template #action>
                <n-space>
                  <n-button size="small" @click="showEditModal(index)">
                    <template #icon><n-icon :component="CreateOutline" /></template>
                    编辑
                  </n-button>
                  <n-button size="small" type="error" @click="confirmDelete(index)">
                    <template #icon><n-icon :component="TrashOutline" /></template>
                    删除
                  </n-button>
                </n-space>
              </template>
            </n-thing>
          </n-list-item>
        </n-list>
        <n-empty v-else description="暂无服务器，点击上方按钮添加" />
      </n-spin>
    </n-card>

    <!-- 添加/编辑对话框 -->
    <n-modal v-model:show="modalVisible" preset="dialog" :title="editIndex === -1 ? '添加服务器' : '编辑服务器'">
      <n-form ref="formRef" :model="formData" :rules="formRules" label-placement="left" label-width="100">
        <n-form-item label="服务器名称" path="name">
          <n-input v-model:value="formData.name" placeholder="例如：我的Emby" />
        </n-form-item>
        <n-form-item label="服务器类型" path="type">
          <n-radio-group v-model:value="formData.type">
            <n-radio-button value="emby">Emby</n-radio-button>
            <n-radio-button value="jellyfin">Jellyfin</n-radio-button>
          </n-radio-group>
        </n-form-item>
        <n-form-item label="服务器地址" path="url">
          <n-input v-model:value="formData.url" placeholder="http://192.168.1.100:8096">
            <template #prefix>
              <n-icon :component="LinkOutline" />
            </template>
          </n-input>
        </n-form-item>
        <n-form-item label="API Key" path="api_key">
          <n-input
            v-model:value="formData.api_key"
            type="password"
            show-password-on="click"
            :placeholder="editIndex === -1 ? '从媒体服务器后台获取' : '留空不修改'"
          />
        </n-form-item>
        <n-form-item label="排除媒体库">
          <n-dynamic-tags v-model:value="formData.exclude_libraries" />
        </n-form-item>
      </n-form>
      <template #action>
        <n-space>
          <n-button @click="modalVisible = false">取消</n-button>
          <n-button type="primary" @click="handleSave" :loading="saving">保存</n-button>
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
  NAlert,
  NList,
  NListItem,
  NThing,
  NTag,
  NText,
  NEmpty,
  NButton,
  NIcon,
  NSpin,
  NModal,
  NForm,
  NFormItem,
  NInput,
  NRadioGroup,
  NRadioButton,
  NDynamicTags,
  NDescriptions,
  NDescriptionsItem,
  useMessage,
  useDialog
} from 'naive-ui'
import { AddOutline, CreateOutline, TrashOutline, LinkOutline } from '@vicons/ionicons5'
import { api } from '@/api/client'

const message = useMessage()
const dialog = useDialog()

const loading = ref(false)
const saving = ref(false)
const servers = ref([])
const modalVisible = ref(false)
const editIndex = ref(-1)
const formRef = ref(null)

const webhookUrl = computed(() => {
  return window.location.origin
})

const formData = ref({
  name: '',
  type: 'emby',
  url: '',
  api_key: '',
  exclude_libraries: []
})

const formRules = {
  name: [
    { required: true, message: '请输入服务器名称', trigger: 'blur' }
  ],
  type: [
    { required: true, message: '请选择服务器类型', trigger: 'change' }
  ],
  url: [
    { required: true, message: '请输入服务器地址', trigger: 'blur' },
    {
      validator: (rule, value) => {
        if (!value) return true
        if (!value.startsWith('http://') && !value.startsWith('https://')) {
          return new Error('地址必须以 http:// 或 https:// 开头')
        }
        return true
      },
      trigger: 'blur'
    }
  ],
  api_key: [
    {
      required: true,
      validator: (rule, value) => {
        if (editIndex.value === -1 && !value) {
          return new Error('请输入 API Key')
        }
        return true
      },
      trigger: 'blur'
    }
  ]
}

const maskApiKey = (key) => {
  if (!key || key === '***MASKED***') return '******'
  if (key.length < 8) return '***'
  return key.substring(0, 4) + '***' + key.substring(key.length - 4)
}

const loadServers = async () => {
  loading.value = true
  try {
    const data = await api.getConfig()
    servers.value = data.servers || []
  } catch (error) {
    message.error('加载服务器列表失败: ' + error.message)
  } finally {
    loading.value = false
  }
}

const showAddModal = () => {
  editIndex.value = -1
  formData.value = {
    name: '',
    type: 'emby',
    url: '',
    api_key: '',
    exclude_libraries: []
  }
  modalVisible.value = true
}

const showEditModal = (index) => {
  editIndex.value = index
  const server = servers.value[index]
  formData.value = {
    name: server.name,
    type: server.type,
    url: server.url,
    api_key: '',
    exclude_libraries: [...(server.exclude_libraries || [])]
  }
  modalVisible.value = true
}

const handleSave = async () => {
  try {
    await formRef.value?.validate()
  } catch {
    return
  }

  saving.value = true
  try {
    const config = await api.getFullConfig()
    const newServers = [...(config.servers || [])]

    const serverData = {
      name: formData.value.name,
      type: formData.value.type,
      url: formData.value.url,
      api_key: formData.value.api_key || (editIndex.value >= 0 ? newServers[editIndex.value].api_key : ''),
      exclude_libraries: formData.value.exclude_libraries
    }

    if (editIndex.value === -1) {
      // 检查名称重复
      if (newServers.some(s => s.name === serverData.name)) {
        message.error('服务器名称已存在')
        return
      }
      newServers.push(serverData)
    } else {
      newServers[editIndex.value] = serverData
    }

    config.servers = newServers
    await api.saveConfig(config)
    message.success(editIndex.value === -1 ? '服务器已添加' : '服务器已更新')
    modalVisible.value = false
    await loadServers()
  } catch (error) {
    message.error('保存失败: ' + error.message)
  } finally {
    saving.value = false
  }
}

const confirmDelete = (index) => {
  const server = servers.value[index]
  dialog.warning({
    title: '确认删除',
    content: `确定要删除服务器「${server.name}」吗？`,
    positiveText: '删除',
    negativeText: '取消',
    onPositiveClick: () => deleteServer(index)
  })
}

const deleteServer = async (index) => {
  try {
    const config = await api.getFullConfig()
    config.servers.splice(index, 1)
    await api.saveConfig(config)
    message.success('服务器已删除')
    await loadServers()
  } catch (error) {
    message.error('删除失败: ' + error.message)
  }
}

onMounted(() => {
  loadServers()
})
</script>
