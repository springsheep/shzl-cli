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
 * 根据code获取openid及手机号
 */
function usertelephoneGetopenid(data, opts = {}) {
	return instance({
		method: 'get',
		url: convertRESTAPI('/v1/demo/usertelephone/getopenid/{code}', {
			path: data
		}),
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, opts)
	})
}

/**
 * 根据openid和手机号新增绑定关系
 */
function usertelephoneAdd(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/v1/demo/usertelephone/add',
		opts: Object.assign({
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
			}
		}, {
			data
		}, opts)
	})
}

/**
 * 根据openid修改手机号
 */
function usertelephoneUpdate(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/v1/demo/usertelephone/update',
		opts: Object.assign({
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
			}
		}, {
			data
		}, opts)
	})
}

/**
 * 根据停车场名称搜索周围停车场
 */
function carparkFindPageByCarParkName(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/v1/iot/carpark/findPageByCarParkName',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			params
		}, opts)
	})
}

/**
 * 获取用户泊位提醒列表
 */
function carberthremindQuery(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/v1/nbcc/carberthremind/query',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			params
		}, opts)
	})
}

/**
 * 获取用户紧急求助列表
 */
function urgenthelpQuery(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/v1/nbcc/urgenthelp/query',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			params
		}, opts)
	})
}

/**
 * 根据停车场编号获取停车场信息，包括停车场评价
 */
function carparkFindByCarParkIdExt(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/v1/iot/carpark/findByCarParkIdExt',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			params
		}, opts)
	})
}

/**
 * 新增停车泊位提醒
 */
function carberthremindAdd(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/v1/nbcc/carberthremind/add',
		opts: Object.assign({
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
			}
		}, {
			data
		}, opts)
	})
}

/**
 * 取消停车泊位提醒
 */
function carberthremindCancelByCarPark(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/v1/nbcc/carberthremind/cancelByCarPark',
		opts: Object.assign({
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
			}
		}, {
			data
		}, opts)
	})
}

/**
 * 获取停车场的评价列表
 */
function carevaluateQuery(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/v1/nbcc/carevaluate/query',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			params
		}, opts)
	})
}

/**
 * 新增停车场的评价列表
 */
function carevaluateAdd(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/v1/nbcc/carevaluate/add',
		opts: Object.assign({
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
			}
		}, {
			data
		}, opts)
	})
}

/**
 * 新增紧急求助
 */
function urgenthelpAdd(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/v1/nbcc/urgenthelp/add',
		opts: Object.assign({
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
			}
		}, {
			data
		}, opts)
	})
}

/**
 * 新增投诉举报
 */
function shopcomplaintAdd(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/v1/nbcc/shopcomplaint/add',
		opts: Object.assign({
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
			}
		}, {
			data
		}, opts)
	})
}

/**
 * 根据openid及手机号获取手机验证码
 */
function usertelephoneGettelephonecode(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/v1/demo/usertelephone/gettelephonecode',
		opts: Object.assign({
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
			}
		}, {
			data
		}, opts)
	})
}

/**
 * 获取字典
 */
function dataProviderGetCodeList(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/v1/dataProvider/getCodeList',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			params
		}, opts)
	})
}

/**
 * 获取敲诈勒索人员报警列表
 */
function blackmailpersonalarmrecordQuery(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/v1/nbcc/blackmailpersonalarmrecord/query',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			params
		}, opts)
	})
}

/**
 * 获取店铺投诉举报列表
 */
function shopcomplaintQuery(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/v1/nbcc/shopcomplaint/query',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			params
		}, opts)
	})
}

export {
	usertelephoneGetopenid,
	usertelephoneAdd,
	carparkFindPageByCarParkName,
	carberthremindQuery,
	urgenthelpQuery,
	carparkFindByCarParkIdExt,
	usertelephoneUpdate,
	carberthremindAdd,
	carberthremindCancelByCarPark,
	carevaluateQuery,
	carevaluateAdd,
	urgenthelpAdd,
	shopcomplaintAdd,
	usertelephoneGettelephonecode,
	dataProviderGetCodeList,
	blackmailpersonalarmrecordQuery,
	shopcomplaintQuery
}
