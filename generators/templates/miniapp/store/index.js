import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user.js'
import location from './modules/location.js'

// #ifdef H5
// 针对h5刷新页面会丢失store中的缓存数据的问题
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
	key: 'nbcc-miniapp-uni-local',
	storage: window.localStorage,
	// 持久化部分模块
	modules: ['user']
})
// #endif

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		user,
		location
	},
	state: {

	},
	mutations: {

	},
	actions: {

	},
	getters,
	// #ifdef H5
	plugins: [vuexLocal.plugin]
	// #endif
})
