import store from '@/store'
const auth = () => {
	uni.showLoading({
		title: '加载中'
	})

	// #ifdef MP-WEIXIN
	uni.login({
		success: (res) => {
			const {
				code
			} = res

			console.info('code', code)

			store.dispatch('Login', code).then(res => {
				uni.hideLoading()
			}).catch(err => {
				uni.hideLoading()
				uni.showToast({
					title: err.message
				})
			})
			// uni.hideLoading()
		},
		fail: () => {
			uni.hideLoading()
		}
	})
	// #endif

	// #ifdef H5
	// h5用模拟数据
	store.commit('SET_USER_INFO', {
		openid: 'opnac5BL9D8mARaCw-F-ohBR3fW8',
		bindTelephone: true,
		telephone: '15726818293',
		isMerchant: true
	})
	uni.hideLoading()
	// #endif


}

export default auth
