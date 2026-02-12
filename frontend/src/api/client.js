import axios from 'axios'

const client = axios.create({
  baseURL: '/api',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
client.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
client.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    const message = error.response?.data?.detail || error.message || '请求失败'
    console.error('API Error:', message)
    return Promise.reject(new Error(message))
  }
)

export const api = {
  // 配置相关
  getConfig() {
    return client.get('/config')
  },

  getFullConfig() {
    return client.get('/config/full')
  },

  validateConfig(data) {
    return client.post('/config/validate', data)
  },

  saveConfig(data) {
    return client.put('/config', data)
  },

  reloadConfig() {
    return client.post('/config/reload')
  },

  // 预览相关
  previewCover(serverName, libraryName = null, configOverride = null) {
    return client.post('/preview', {
      server_name: serverName,
      library_name: libraryName,
      config_override: configOverride
    })
  },

  // 批量操作相关
  createBatch(targets, maxConcurrent = null) {
    return client.post('/batch', {
      targets,
      max_concurrent: maxConcurrent
    })
  },

  listBatches() {
    return client.get('/batch')
  },

  getBatchStatus(jobId) {
    return client.get(`/batch/${jobId}`)
  },

  cancelBatch(jobId) {
    return client.post(`/batch/${jobId}/cancel`)
  },

  // 生成相关
  generateCover(serverName, libraryName = null) {
    return client.post('/generate', {
      server_name: serverName,
      library_name: libraryName
    })
  },

  getHistory() {
    return client.get('/generate/history')
  },

  // 状态相关
  getStatus() {
    return client.get('/status')
  },

  getServers() {
    return client.get('/status/servers')
  },

  // 健康检查
  healthCheck() {
    return axios.get('/health')
  }
}

export default client
