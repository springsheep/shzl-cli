/**
 * @Author: tao.xie
 * @CreateTime: 2021-5-12 16:30:50
 * @Description: 用户状态模块 
 */

import {
	mpApi,
	storeApi
} from '@/api'

/**
 * 
 * 查询手机号，并且同步缓存
 * 
 * @param {Object} openid
 * @param {Object} telephone
 * @param {Object} commit
 */
const queryAccountByMobile = async function(openid, telephone, commit) {
	try {
		const merchentInfoResponse = await storeApi.oampStoreBussinessAccountQueryByMobileGet({
			mobile: telephone
		})

		commit('SET_USER_INFO', {
			openid: openid,
			bindTelephone: true,
			telephone: telephone,
			isMerchant: merchentInfoResponse.success && merchentInfoResponse.data.flag
		})

		return Promise.resolve(true)
	} catch (e) {
		return Promise.reject(new Error('账户信息查询失败'))
	}
}

/**
 * 修改或绑定手机号
 */
const teleponeAddOrUpdate = async function(commit, state, info, isAdd = true) {
	const userInfo = state.userInfo

	//openid来源，vuex
	const {
		openid
	} = userInfo

	//telephone来源，传入的info
	const {
		telephone
	} = info

	info['openid'] = openid

	try {
		const bindResonse = isAdd ? await mpApi.usertelephoneAdd(info) : await mpApi.usertelephoneUpdate(info)
		if (bindResonse.success) {
			return queryAccountByMobile(openid, telephone, commit)
		} else {
			return Promise.reject(new Error(isAdd ? '绑定手机失败' : '修改手机失败'))
		}
	} catch (e) {
		return Promise.reject(new Error(isAdd ? '绑定手机失败' : '修改手机失败'))
	}
}

const user = {
	state: {
		// 用户信息
		userInfo: {},
		// 图片url拼接配置
		fileConfig: {}
	},
	mutations: {
		SET_USER_INFO(state, userInfo) {
			state.userInfo = userInfo || {}
		},
		SET_FILE_CONFIG(state, config) {
			let {
				host,
				port
			} = config
			if (host.indexOf('http') === -1) {
				host = 'http://' + host
			}
			state.fileConfig = {
				host,
				port
			}
		}
	},
	actions: {
		/**
		 * 获取图片上传配置信息
		 */
		GetUploadConfig({
			commit
		}) {
			storeApi.oampStoreFileGetConfigPost().then(res => {
				if (res.success) {
					commit('SET_FILE_CONFIG', res.data)
				}
			})
		},

		/**
		 * 微信登录
		 */
		async Login({
			commit
		}, code) {

			try {
				const userInfoResponse = await mpApi.usertelephoneGetopenid({
					code
				})

				if (userInfoResponse.success) {
					const {
						openid,
						telephone
					} = userInfoResponse.data
					// 有绑定过手机，去查询账户类型，判断是否是商户类型的账号
					if (telephone) {
						return queryAccountByMobile(openid, telephone, commit)
					} else {
						// 未绑定手机号
						commit('SET_USER_INFO', {
							openid: openid,
							bindTelephone: false
						})

						return Promise.resolve(true)
					}
				} else {
					return Promise.reject(new Error('获取用户信息失败'))
				}
			} catch (e) {
				//TODO handle the exception
			}

		},

		/**
		 * 绑定手机
		 * @params info 业务参数 Object<telephone:string,telephoneCode:string>
		 */
		async TelephoneAdd({
			commit,
			state
		}, info) {
			return teleponeAddOrUpdate(commit, state, info, true)
		},

		/**
		 * 修改手机
		 * @params info 业务参数 Object<telephone:string,telephoneCode:string>
		 */
		async TelephoneUpdate({
			commit,
			state
		}, info) {
			return teleponeAddOrUpdate(commit, state, info, false)
		}

	}
}

export default user
