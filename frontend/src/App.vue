<template>
  <n-config-provider :theme="darkTheme">
    <n-layout style="height: 100vh">
      <n-layout-header bordered style="height: 64px; padding: 0 24px; display: flex; align-items: center;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <h2 style="margin: 0;">📚 Library Poster</h2>
          <n-tag type="success" size="small">v1.0.0</n-tag>
        </div>
        <div style="flex: 1;"></div>
        <n-space>
          <n-button @click="checkHealth" :loading="healthChecking">
            <template #icon>
              <n-icon :component="healthStatus ? CheckmarkCircle : CloseCircle" />
            </template>
            {{ healthStatus ? '运行中' : '离线' }}
          </n-button>
        </n-space>
      </n-layout-header>

      <n-layout has-sider style="height: calc(100vh - 64px)">
        <n-layout-sider
          bordered
          show-trigger
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :native-scrollbar="false"
        >
          <n-menu
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
            v-model:value="activeKey"
            @update:value="handleMenuSelect"
          />
        </n-layout-sider>

        <n-layout-content content-style="padding: 24px;">
          <router-view />
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>

<script setup>
import { ref, h, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import {
  NConfigProvider,
  NLayout,
  NLayoutHeader,
  NLayoutSider,
  NLayoutContent,
  NMenu,
  NButton,
  NSpace,
  NTag,
  NIcon,
  darkTheme
} from 'naive-ui'
import {
  HomeOutline,
  ServerOutline,
  ColorPaletteOutline,
  SettingsOutline,
  TimeOutline,
  CheckmarkCircle,
  CloseCircle
} from '@vicons/ionicons5'
import { api } from '@/api/client'

const router = useRouter()
const activeKey = ref('dashboard')
const healthStatus = ref(false)
const healthChecking = ref(false)

const menuOptions = [
  {
    label: '仪表盘',
    key: 'dashboard',
    icon: () => h(NIcon, null, { default: () => h(HomeOutline) })
  },
  {
    label: '服务器管理',
    key: 'servers',
    icon: () => h(NIcon, null, { default: () => h(ServerOutline) })
  },
  {
    label: '风格配置',
    key: 'styles',
    icon: () => h(NIcon, null, { default: () => h(ColorPaletteOutline) })
  },
  {
    label: '定时任务',
    key: 'config',
    icon: () => h(NIcon, null, { default: () => h(SettingsOutline) })
  },
  {
    label: '生成历史',
    key: 'history',
    icon: () => h(NIcon, null, { default: () => h(TimeOutline) })
  }
]

const handleMenuSelect = (key) => {
  router.push({ name: key === 'dashboard' ? 'Dashboard' : key.charAt(0).toUpperCase() + key.slice(1) })
}

const checkHealth = async () => {
  healthChecking.value = true
  try {
    await api.healthCheck()
    healthStatus.value = true
  } catch (error) {
    healthStatus.value = false
  } finally {
    healthChecking.value = false
  }
}

onMounted(() => {
  checkHealth()
  // 定期检查健康状态
  setInterval(checkHealth, 30000)
})
</script>

<style scoped>
:deep(.n-layout-header) {
  display: flex;
  align-items: center;
}
</style>
