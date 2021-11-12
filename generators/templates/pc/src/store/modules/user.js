import { authApi } from '@/api'

/** userstore模块 */
const state = {
  token: '', // 三中心用户令牌
  userData: {} // 用户信息
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },

  SET_USERDATA: (state, userData) => {
    state.userData = userData
  }
}

const actions = {
  /**
     * 登陆，根据三中心的code换取accessToken
     * @param commit
     * @param code
     * @returns {Promise<unknown>}
     * @constructor
     */
  Login({ commit }, code) {
    return new Promise((resolve, reject) => {
      authApi.getTokenByCode(code).then(res => {
        // access_token: "b05cb54a-157f-4e7a-8c25-dfceae57146e"
        // expires_in: 1799
        // refresh_token: "6c9e0bc2-29f9-4c13-8a47-23f8660d9e42"
        // scope: "11"
        // token_type: "bearer
        const accessToken = res.data.access_token
        commit('SET_TOKEN', accessToken)
        // 标记token有效
        commit('SET_TOKEN_VALID')
        resolve()
      }).catch(err => reject(err))
    })
  },

  /**
     * 获取用户信息
     * @param commit
     * @param accessToken
     * @returns {Promise<unknown>}
     * @constructor
     */
  GetUserInfo({ commit }, accessToken) {
    return new Promise((resolve, reject) => {
      authApi.getUserInfoByToken(accessToken).then(res => {
        // currentSiteId: 11
        // currentSiteName: "案件管理"
        // deptId: 27
        // deptName: "城云"
        // fullPath: "城云科技（中国）有限公司/城云"
        // groupId: 1
        // groupName: "城云"
        // groupNo: "GO_be0cefe8f7224aa0a3901c53fa1ca471"
        // ownRoles: "案件管理员"
        // platformId: 1
        // sex: 2
        // userId: 130
        // userName: "龙哥"
        // userNo: "longge"

        commit('SET_USERDATA', res.data)
        resolve()
      }).catch(err => reject(err))
    })
  },

  /**
     * 退出登陆
     * @param commit
     * @param useLogoutApi
     * @constructor
     */
  Logout({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_USERDATA', {})
      resolve()
    })
  }
}

export default {
  // namespaced: true,
  state,
  mutations,
  actions
}
