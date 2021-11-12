import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'

Vue.use(Vuex)

import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  // 保存的key
  key: 'cm-mobile-base-local',
  // 指定local还是session
  storage: window.localStorage,
  // 持久化部分模块
  modules: ['user']
})

export default new Vuex.Store({
  state: {},
  mutations: {},
  getters,
  actions: {},
  modules: { user },
  plugins: [vuexLocal.plugin]
})
