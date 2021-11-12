import {
	defaultCoord
} from '@/constants/poi.js'

import {
	getAddressByLocation
} from './wxservice.js'

import store from '@/store'

const LocationErrType = {
	AuthDeny: 'AuthDeny', //用户拒绝
	TooFrequent: 'TooFrequent', //太频繁
	UnKnow: 'UnKnow' //其他，未知
}

/**
 * 获取地理位置
 */
const getLocation = (getAddrByWxService = false) => {
	// #ifdef H5
	return new Promise(resolve => {
		return resolve({
			res: defaultCoord,
			success: true
		})
	})
	// #endif


	// #ifdef MP-WEIXIN
	return new Promise(resolve => {

		const coord = store.getters.coord
		const {
			latitude,
			longitude
		} = coord

		if (latitude === defaultCoord.latitude) {
			uni.showToast({
				title: '当前位置信息获取失败，已为您默认定位到慈城古镇',
				icon: 'none'
			})
		}

		if (getAddrByWxService) {
			// 通过经纬度走微信服务的地址检索服务
			getAddressByLocation(latitude, longitude).then(res => {

				store.dispatch('UpdateCoord', {
					latitude,
					longitude,
					address: res.address || ''
				})

				return resolve({
					res: {
						latitude,
						longitude,
						address: res.address || ''
					},
					success: true
				})
			})


		} else {
			// 直接返回store中的经纬度信息
			return resolve({
				res: {
					latitude,
					longitude
				},
				success: true
			})
		}

	})
	// #endif

}

export {
	getLocation,
	LocationErrType
}
