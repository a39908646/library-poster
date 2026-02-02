import axios from 'axios'

const client = axios.create({
  baseURL: '/api',
  timeout: 30000,
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

  reloadConfig() {
    return client.post('/config/reload')
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
