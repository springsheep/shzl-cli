import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import token from './modules/token'

// TODO 这里没考虑好通过环境变量来引入不同的权限模块，手动注入打包手动该配置会有风险

// 本地权限，本地调试打开
import permission from '@/store/modules/permission'
// 动态权限，线上部署打开
// import permission from '@/store/modules/async-router'

import VuexPersistence from 'vuex-persist'

// vuex=>storage持久化工具，指定持久化的模块及类型
const vuexLocal = new VuexPersistence({
  key: 'cm-admin-base',
  storage: window.sessionStorage,
  // 持久化部分模块
  modules: ['user', 'permission']
})

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user, token, permission
  },
  state: {},
  mutations: {},
  actions: {},
  getters,
  plugins: [vuexLocal.plugin]
})

export default store
