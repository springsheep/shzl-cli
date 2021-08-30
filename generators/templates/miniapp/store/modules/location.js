/**
 * @Author: tao.xie
 * @CreateTime: 2021-5-12 16:30:33
 * @Description: 地理位置状态模块
 */
import {
	defaultCoord
} from '@/constants/poi.js'
const location = {
	state: {
		coord: {
			latitude: defaultCoord.latitude,
			longitude: defaultCoord.longitude,
			address: defaultCoord.address
		}
	},
	mutations: {
		SET_COORD(state, coord) {
			state.coord = coord || {}
		},
	},
	actions: {
		UpdateCoord({
						commit
					}, coord) {
			commit('SET_COORD', coord)
		}
	}
}

export default location
