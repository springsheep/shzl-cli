import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant/lib/index'
import 'vant/lib/index.css'

import CMMUi from '@cm/cm-mobile-ui'
import '@cm/cm-mobile-ui/lib/index.css'
import cm from '@cm/cm-lib'
import { jsApiPlugin, PlatForm } from '@cm/cm-jsbridge'

Vue.use(Vant)
Vue.use(CMMUi)
Vue.use(cm)
Vue.use(jsApiPlugin, { platform: PlatForm.CCI })

/** js */
import 'amfe-flexible/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
