import Vue from 'vue'
import axios from 'axios'
import store from '../store'
import router from '../router'
import { BASE_URL } from '../const/base'
import { Message } from 'element-ui'

// request config
const service = axios.create({
  baseURL: BASE_URL,
  timeout: 20000
})

//接口登录拦截
service.interceptors.request.use(
  config => {
    if (store.state.login.token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `token ${store.state.token}`
    } else {
      Message({
        message: 'no token',
        type: 'warning'
      })
    }
    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
service.interceptors.response.use(
  response => {
    // Do something with response data
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          store.login.commit('changeLoginState', false)
          router.replace({
            path: '/',
            query: { redirect: router.currentRoute.fullPath }
          })
          break
      }
    }
    return Promise.reject(error)
  }
)

Vue.prototype.$http = service
