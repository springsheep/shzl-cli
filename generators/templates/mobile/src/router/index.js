import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// eslint-disable-next-line no-unused-vars
import List from '../views/List.vue'
// eslint-disable-next-line no-unused-vars
import Detail from '../views/Detail.vue'
import KeepAlive from '../views/KeepAlive'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
      hideLeftArrow: true
      // customNavBar: true
    }
  },
  {
    path: '/form',
    name: 'Form',
    component: () =>
      import(/* webpackChunkName: "form" */ '../views/Form.vue'),
    meta: {
      title: '表单'
    }
  },
  {
    path: '/list',
    name: 'List',
    component: () =>
      import(/* webpackChunkName: "list" */ '../views/List.vue'),
    meta: {
      title: '列表'
    }
  },
  {
    path: '/keep-alive',
    name: 'KeepAlive',
    component: KeepAlive
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
