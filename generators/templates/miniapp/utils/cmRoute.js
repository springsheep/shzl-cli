/**
 * @Author: tao.xie
 * @CreateTime: 2021-5-8 14:09:48
 * @Description: 路由跳转，调用$u.route方法，区别是不用传入完成的url，传入页面的name即可 
 */
const cmRoute = function(options = {}, params = {}) {
	if (options.name) {
		const name = options.name
		const url = ROUTES.find(route => route.name === name).path
		options['url'] = url
	}
	this.$u.route(options, params)
}

export default cmRoute
