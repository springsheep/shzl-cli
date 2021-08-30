const getters = {
	userInfo: state => state.user.userInfo,
	coord: state => state.location.coord,
	bindTelephone: state => state.user.userInfo.bindTelephone === true,
	isMerchant: state => state.user.userInfo.isMerchant === true,
	fileConfig: state => state.user.fileConfig
}

export default getters
