import axios from 'axios'
import { useTokenStore } from '@/stores'
import { ElMessage } from 'element-plus'
import router from '@/router'

const baseURL = import.meta.env.VITE_BASE_API_URL

const instance = axios.create({
  //設定1.baseURL 2.超時時間
  baseURL,
  timeout: 10000
})

// 請求攔截器
instance.interceptors.request.use(
  (config) => {
    const tokenStore = useTokenStore()

    if (tokenStore.token) {
      // 如果 token 存在，將其添加到請求頭中
      config.headers.Authorization = 'Bearer ' + tokenStore.token
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 響應攔截器
instance.interceptors.response.use(
  (result) => {
    //判斷返回狀態碼
    if (result.data.code === 20010) {
      return result.data
    }

    //操作失敗
    ElMessage.error(result.data.message ? result.data.message : '登入失敗')

    return Promise.reject(result.data)
  },
  (err) => {
    if (err.response.status === 401) {
      ElMessage.error('請先登入')
      router.push('/login')
    } else {
      ElMessage.error(err.response.data.message)
    }

    return Promise.reject(err)
  }
)

export default instance
