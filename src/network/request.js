import axios from 'axios'

// export function request(config, success, failure){
export function request(config) {
  const instance = axios.create({
    //baseURL: 'http://127.0.0.1:80',
    // baseURL: 'http://175.27.243.30:82',
    baseURL: '/api',
  })

  // request interceptor
  instance.interceptors.request.use(
    (config) => {
      let token = sessionStorage.getItem('token')
      // console.log(token)
      if (token && token !== '') {
        config.headers['Authorization'] = token // 让每个请求携带自定义token    请根据实际情况自行修改
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  return instance(config)
}
