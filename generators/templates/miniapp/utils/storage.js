/**
 * 持久化缓存KEY
 */
const key = 'NBCC-MINIAPP-UNI-LOCAL'

/**
 * 设置用户信息至缓存
 */
const setUserInfoToStorage = function(userInfo) {
	try {
		uni.setStorageSync(key, JSON.stringify(userInfo));
	} catch (e) {
		//TODO handle the exception
	}
}

/**
 * 从缓存读取用户信息
 */
const getUserInfoFromStorage = () => {
	try {
		const value = uni.getStorageSync(key);
		if (value) {
			return JSON.parse(value)
		}
	} catch (e) {
		return null
	}
}

/**
 * 清除用户信息
 */
const clearUserInfoFromStorage = () => {
	uni.removeStorageSync(key);
}

export {
	setUserInfoToStorage,
	getUserInfoFromStorage,
	clearUserInfoFromStorage
}
