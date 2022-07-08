import axios from 'axios'

const serive = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000
})

serive.interceptors.request.use(
  (config) => {
    // const token = store.getters.token

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

serive.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return serive(options)
}

export default request
