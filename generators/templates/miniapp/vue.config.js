const TransformPages = require('uni-read-pages')
const tfPages = new TransformPages({
	includes: ['path', 'aliasPath', 'name', 'meta', 'title'] //需要获取包涵的字段
})
module.exports = {
	configureWebpack: {
		plugins: [
			new tfPages.webpack.DefinePlugin({
				ROUTES: JSON.stringify(tfPages.routes)
			})
		],
	},

	devServer: {
		proxy: {
			'/oamp-store': {
				target: 'http://10.10.77.194:8092', // 后台接口域名
				changeOrigin: true, //是否跨域
				pathRewrite: {
					'^/oamp-store': '/oamp-store'
				}
			},
			'/v1': {
				target: 'http://10.12.107.15:8888', // 后台接口域名
				changeOrigin: true, //是否跨域
				pathRewrite: {
					'^/v1': '/v1'
				}
			},
			'/credit': {
				target: 'http://10.10.77.194:8093', // 后台接口域名
				changeOrigin: true, //是否跨域
				pathRewrite: {
					'^/credit': '/credit'
				}
			},
			'/file': {
				target: 'http://115.231.181.186:9001', // 后台接口域名
				changeOrigin: true, //是否跨域
				pathRewrite: {
					'^/file': '/oamp-store/file'
				}
			}
		}
	}
}
