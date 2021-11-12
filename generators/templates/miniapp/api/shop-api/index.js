/**
 * @Author: tao.xie
 * @CreateTime: 2021-5-18 10:38:51
 * @Description: 小程序相关的接口定义 
 */
import instance from './instance'
import {
	convertRESTAPI
} from '../util'

/**
 * 根据商户查询巡查问题
 */
function creditBusinessCheckDetailSelectTroubleByBusinessId(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/credit/creditBusinessCheckDetail/selectTroubleByBusinessId', 
		opts: Object.assign({
			params
		}, opts)
	})
}

/**
 * 根据商户查询巡查记录
 */
function creditBusinessCheckDetailSelectByBusinessId(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/credit/creditBusinessCheckDetail/selectByBusinessId', 
		opts: Object.assign({
			params
		}, opts)
	})
}

/**
 * 查询分页处罚信息
 */
function punishmentPage(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/credit/punishment/page',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


export {
	creditBusinessCheckDetailSelectTroubleByBusinessId,
	creditBusinessCheckDetailSelectByBusinessId,
	punishmentPage
}
