import { createAPI } from '../util'
import config from '../config'

const baseUrl = {
  mock: ' http://10.12.107.126:7300/mock/607cdf8527548100340ac66e/outdoor-ad',
  dev: '/',
  pre: '',
  prod: ''
}[config.env || 'mock']

export default createAPI(baseUrl)
