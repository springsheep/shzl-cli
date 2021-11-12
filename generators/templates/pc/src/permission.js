import router from './router'
import store from '@/store'
import { getQueryString } from '@/utils/url'
import { addRoutes } from '@/router/generator-routers'
import { Message } from '@cci/cui'
import { isTestMode } from '@/utils'

const code = getQueryString('code')

// 本地调试模式，不加路由守卫，只获取路由信息
if (isTestMode) {
  store.dispatch('GenerateRoutes').then(() => {
    addRoutes(store.getters.menu)
  })
} else {
  router.beforeEach((to, from, next) => {
    // 本地有三中心的token
    if (store.getters.token) {
      if (store.getters.tokenValid) {
        // token检测有效
        next()
      } else {
        // token没有检测,这种情况常见于刷新浏览器，因为token存储在sessionStorage中，而tokenValid不落地，所以刷新浏览器需要判断token是否有效
        store.dispatch('CheckAccessTokenValid', store.getters.token).then(() => {
          // 保证用户信息存在且vue-router中路由信息存在
          getUserInfo().then(() => {
            next({ ...to })
          })
        }).catch(() => {
          // 失效，跳转到三中心的授权页面
          store.dispatch('Logout').then(() => {
            jumpToTcAuthUrl()
          })
        })
      }
    } else if (code) {
      // 连接上有三中心的code，获取accessToken
      store.dispatch('Login', code).then(() => {
        // 登陆成功，获取用户信息及路由信息
        getUserInfo().then(url => {
          next(url)
        })
      })
    } else {
      //  跳转到三中心的授权页面
      store.dispatch('Logout').then(() => {
        jumpToTcAuthUrl()
      })
    }
  })
}

/**
 * 获取用户信息及菜单树
 * @param accessToken
 * @returns {Promise<string|string|*>}
 */
async function getUserInfo(accessToken = store.getters.token) {
  try {
    // 获取用户信息
    if (accessToken && Object.keys(store.getters.userData).length === 0) {
      await store.dispatch('GetUserInfo', accessToken)
    }
    // 保证vue-router中路由信息存在
    await getMenuInfo()
    // 解析可以跳转的第一条url
    return filterUrl(store.getters.menu) || ''
  } catch (e) {
    // console.error(e)
    Message({
      type: 'error',
      message: '获取用户信息失败！'
    })
  }
}

/**
 * 保证vue-router中路由信息存在
 * @returns {Promise<void>}
 */
async function getMenuInfo() {
  // vuex中存在menu，那么直接添加到vue-router中
  if (store.getters.menu && store.getters.menu.length > 0) {
    addRoutes(store.getters.menu)
  } else {
    // 否则 获取动态路由，并添加到vue-router中
    await store.dispatch('GenerateRoutes')
    // 获取菜单树，并添加到路由中
    addRoutes(store.getters.menu)
  }
}

/**
 * 解析第一个url
 * @param arr
 * @returns {string|string|*}
 */
function filterUrl(arr = []) {
  if (arr.length === 0) {
    return ''
  }
  for (const item of arr) {
    if (item.children) {
      return filterUrl(item.children)
    } else {
      return item.url
    }
  }
}

/**
 * 跳转到三中心的授权页面
 */
function jumpToTcAuthUrl() {
  window.location.href = process.env.VUE_APP_NAVIGATION_URL
}

