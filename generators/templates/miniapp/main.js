import Vue from 'vue'
import App from './App'
import store from './store'
import bootstrap from '@/core/bootstrap.js'

import '@/router'

// 引入全局uView
import uView from '@/uview-ui'
Vue.use(uView)

import cmRoute from '@/utils/cmRoute.js'

Vue.prototype.$cmRoute = cmRoute

import {
	storeApi,
	mpApi,
	shopApi
} from '@/api'

Vue.prototype.$storeApi = storeApi
Vue.prototype.$mpApi = mpApi
Vue.prototype.$shopApi = shopApi

Vue.config.productionTip = false

App.mpType = 'app'


const app = new Vue({
	store,
	...App,
	created: bootstrap
})
app.$mount()
