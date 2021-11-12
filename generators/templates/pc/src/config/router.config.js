import Layout from '@/layout'

/**
 * @Description: 静态路由
 * @author tao.xie
 * @date 2021/8/10
*/
export const constantRouterMap = [
  // {
  //   name: 'Login',
  //   path: '/login',
  //   component: () => import (/* webpackChunkName: "login" */ '@/login.vue'),
  //   hidden: true
  // },
  {
    name: 'index',
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [{
      name: 'Home',
      meta: {
        id: 0,
        pids: [],
        hideMenu: true,
        addTag: false
      },
      path: '/home',
      component: () => import (/* webpackChunkName: "home" */ '@/home.vue')
    }]
  }
]

/**
 * @Description: 前端动态路由
 * @author tao.xie
 * @date 2021/8/10
*/
export const asyncRouterMap = [
  {
    'id': 'BASP',
    'text': 'CM-UI示例',
    'icon': '',
    'leaf': false,
    'expanded': true,
    'url': '',
    'children': [
      {
        'id': 'DEMO',
        'text': 'DEMO',
        'icon': '',
        'leaf': false,
        'expanded': true,
        'url': '',
        'children': [
          {
            'id': 'SEARCH',
            'text': '搜索表单',
            'leaf': true,
            'url': '/example/search-table',
            'nodeType': 2 // 2:页面 3:按钮
          },
          {
            'id': 'IMG',
            'text': 'imgList',
            'leaf': true,
            'url': '/example/img-viewer',
            'nodeType': 2 // 2:页面 3:按钮
          },
          {
            'id': 'UPLOAD',
            'text': 'upload',
            'leaf': true,
            'url': '/example/upload',
            'nodeType': 2 // 2:页面 3:按钮
          },
          {
            'id': 'FORM',
            'text': 'form',
            'leaf': true,
            'url': '/example/form',
            'nodeType': 2 // 2:页面 3:按钮
          },
          {
            'id': 'SBAR',
            'text': 'search-bar',
            'leaf': true,
            'url': '/example/search-bar',
            'nodeType': 2 // 2:页面 3:按钮
          },
          {
            'id': 'LMP',
            'text': 'list-modal',
            'leaf': true,
            'url': '/example/list-modal-page',
            'nodeType': 2 // 2:页面 3:按钮
          },
          {
            'id': 'MODAL',
            'text': 'modal',
            'leaf': true,
            'url': '/example/modal',
            'nodeType': 2 // 2:页面 3:按钮
          },
          {
            'id': 'DES',
            'text': 'descriptions',
            'leaf': true,
            'url': '/example/descriptions',
            'nodeType': 2 // 2:页面 3:按钮
          },
          {
            'id': 'WD',
            'text': 'wrap-des',
            'leaf': true,
            'url': '/example/wrap-des',
            'nodeType': 2 // 2:页面 3:按钮
          }
        ]
      }
    ]
  },
  {
    'id': 'JS_YYWH',
    'text': 'iframe加载',
    'icon': '',
    'leaf': false,
    'expanded': true,
    'nodeType': 1,
    'url': 'http://10.12.107.126:7301',
    'systemType': 0
  },
  {
    'id': 'JS_YYWHZ',
    'text': '外链加载',
    'icon': '',
    'leaf': false,
    'expanded': true,
    'nodeType': 1,
    'url': '/jump/http://10.12.107.126:7301',
    'systemType': 0
  }
]
