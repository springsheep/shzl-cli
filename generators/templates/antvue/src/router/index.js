import Vue from 'vue';
import VueRouter from 'vue-router';
import { BasicLayout, BlankLayout } from '@/layouts'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    redirect: '/divide/undivideData',
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/divide',
        name: '分拨中心',
        component: RouteView,
        redirect: '/divide/undivideData',
        meta: {
          keepAlive: true,
          icon: 'apartment',
          title: '分拨中心'
        },
        children: [
          {
            path: '/divide/undivideData',
            name: '未分拨数据',
            meta: {
              title: '未分拨数据'
            },
            component: () => import(/* webpackChunkName: "UndivideData" */ '../views/divide/unDivideData/UndivideData.vue'),
          },
          {
            path: '/divide/dividedData',
            name: '已分拨数据',
            meta: {
              title: '已分拨数据'
            },
            component: () => import(/* webpackChunkName: "dividedData" */ '../views/divide/dividedData/DividedData.vue'),
          },
          {
            path: '/divide/helpData',
            name: '待救济数据',
            meta: {
              title: '待救济数据'
            },
            component: () => import(/* webpackChunkName: "HelpData" */ '../views/divide/helpData/HelpData.vue'),
          },
        ]
      }
    ]
  },
];

const router = new VueRouter({
  routes,
});

export default router;
