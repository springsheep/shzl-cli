import axios from 'axios'
// import qs from "qs";
// import store from '@/store'
// import { getToken } from '@/utils/auth'
// function S4() {
//   return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
// }
// const toString = Object.prototype.toString;
// const LogPrefix = "XHR::::";
// axios.defaults.
// 创建axios实例
const service = axios.create({
  timeout: 305000 // 请求超时时间
})

function isJSON(val) {
  if (typeof val !== 'string') {
    return false
  }
  try {
    const obj = JSON.parse(val)
    if (Object.prototype.toString.call(obj) === '[object Object]') {
      return true
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}

service.interceptors.request.use(
  config => {
    // const guid = S4()
    // const cTimeFlag = LogPrefix + guid + ' done -> ' + config.url
    // console.log(LogPrefix, guid, 'start', config.url)
    // console.time(cTimeFlag)
    // config.cTimeFlag = cTimeFlag
    config.headers['accessToken'] = sessionStorage.accessToken
    config.headers['Authorization'] = window.accesstoken // 让每个请求携带自定义token 请根据实际情况自行修改
    // config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    // if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded' && data && Object.prototype.toString.call(data) === '[object Object]') {
    //   data = qs.stringify(data)
    // }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// respone拦截器 处理数据
service.interceptors.response.use(
  response => {
    const { data } = response

    const resData = isJSON(data) ? JSON.parse(data) : data
    if (typeof resData === 'object') {
      return resData
    } else {
      // console.log(LogPrefix, "原始请求:")
      // 针对返回 res 是二进制数据流
      return response
    }
  },
  error => {
    // console.log('err' + error)// for debug
    return Promise.reject(error)
  }
)

export function request(_param) {
  const {
    method = 'get',
    // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType = 'json', // 默认的
    headers = {},
    url = '',
    params,
    data,
    ...otherData
  } = _param

  if (!url) {
    return new Promise((resolve, reject) => {
      reject('url is null')
    })
  }
  const _method = method.toLowerCase()

  if (_method === 'get') {
    return axios({
      responseType,
      url,
      headers,
      method,
      params: params || data || otherData
    })
  }

  if (_method === 'post') {
    // 处理
    // if (!headers.hasOwnProperty('Content-Type')) {
    //   headers["Content-Type"] = "application/x-www-form-urlencoded"
    // }
    if (params && data) {
      return axios({
        responseType,
        url,
        headers,
        method,
        params,
        data
      })
    } else {
      const { start, limit, ...resetData } = otherData
      return axios({
        responseType,
        url,
        headers,
        method,
        params: params || { start, limit },
        data: data || resetData
      })
    }
  }
}

export default service
