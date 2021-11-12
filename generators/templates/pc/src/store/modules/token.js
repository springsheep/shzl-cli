import { authApi } from '@/api'

/** tokenstore模块 */
const state = {
  tokenValid: false // 是否是否有效
}

const mutations = {
  SET_TOKEN_VALID: (state) => {
    state.tokenValid = true
  }
}

const actions = {
  /**
     * 检查用户令牌是否有效
     * @param commit
     * @returns {Promise<unknown>}
     * @constructor
     */
  CheckAccessTokenValid({ commit }, token) {
    return new Promise((resolve, reject) => {
      authApi.checkToken(token).then(res => {
        if (res.active) {
          commit('SET_TOKEN_VALID')
          resolve()
        } else {
          reject()
        }
      })
    })
  }
}

export default {
// namespaced: true,
  state,
  mutations,
  actions
}
