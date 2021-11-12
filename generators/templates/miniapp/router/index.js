import Vue from 'vue'
import store from '@/store'
import uniCrazyRouter from "uni-crazy-router";
Vue.use(uniCrazyRouter)

/**
 * 是否登录
 */
const isLogin = () => {
	return store.getters.bindTelephone
}

/**
 * 登录
 */
const goLogin = () => {
	// Vue.prototype.$cmRoute({
		// name: 'checking'
	// })
}

uniCrazyRouter.beforeEach(async (to, from, next) => {
	// 逻辑代码
	const {
		url
	} = to
	
	const routeObj = ROUTES.find(route => {
		const path = route.path.substring(1)
		return path === url
	})

	if (routeObj && routeObj.meta) {
		const meta = routeObj.meta
		// 这里判断登录权限
		if (meta.auth) {
			if (isLogin()) {
				next()
			} else {
				// 跳转到登录页面
				uniCrazyRouter.afterNotNext(() => {
					// 拦截路由，并且跳转到登录页
					goLogin()
				})
				// 拦截路由，不执行next
				return
			}
		} else {
			next()
		}

	} else {
		next()
	}
})

uniCrazyRouter.afterEach((to, from) => {
	// 逻辑代码
})

uniCrazyRouter.onError((to, from) => {
	// 逻辑代码
})
