/**
 * 基于uni的request适配器,传入该适配器可直接适应axios
 */

function uniAdapter(config) {
	if (!config.url.includes(config.baseURL)) {
		config.url = config.baseURL + config.url
	}

	if (config.headers['Content-Type'] && config.headers['Content-Type'].indexOf(
			'application/x-www-form-urlencoded;charset=utf-8') !== -1) {
		const data = config.data
		if (data) {
			config.data = JSON.parse(data)
		}
	}

	if (config.method === 'get') {
		config.data = config.params
		delete config.params
	}

	return new Promise((resolve, reject) => {
		let requestConfig = Object.assign({
			// uni的request要求传入header
			header: config.headers,
			complete: (response) => {
				// settle(resolve, reject, response);
				const validateStatus = config.validateStatus
				const status = response.statusCode
				if (status && (!validateStatus || validateStatus(status))) {
					// 为了统一拦截器内的response.headers
					if (response.header) {
						response.headers = response.header
						delete response.header
					}

					resolve(response)
				} else {
					/* reject(createError(
					  'Request failed with status code ' + response.status,
					  config,
					  null,
					  null,
					  {
					  	status: status,
					  	statusText: response.errMsg
					  }
					)); */
					let errMsg = response.errMsg
					if (errMsg === 'request:ok') {
						errMsg = '网络错误' + status
					}
					reject({
						response: {
							status: status,
							statusText: errMsg
						},
						config
					})
				}
			}
		}, config)
		// 删除axios的headers
		delete requestConfig.headers
		// 删除自定义参数
		delete requestConfig.businessConfig
		uni.request(requestConfig)
	})
}

export default uniAdapter
