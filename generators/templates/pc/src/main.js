import Vue from 'vue'
import './core/use'
import bootstrap from './core/bootstrap'
import './permission.js'
import router from '@/router'
import store from '@/store'
import './styles/index.scss'

new Vue({
  el: '#app',
  router,
  store,
  created: bootstrap,
  render: h => h('div', { attrs: { id: 'app' }}, [h('router-view')])
})
