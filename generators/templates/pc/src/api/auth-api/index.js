import instance from './instance'
import { getQueryString } from '@/utils/url'

const client_secret = process.env.VUE_APP_CLIENT_SECRET
const projectId = process.env.VUE_APP_PROJECTID
// 用于区别是哪个服务
const client_id = getQueryString('flag')

// 根据code获取token
function getTokenByCode(code) {
  return instance({
    method: 'post',
    url: `/oauth2/oauth/token`,
    opts: {
      params: {
        client_id,
        client_secret,
        code,
        grant_type: 'authorization_code'
      }
    }
  })
}

// 获取用户信息
function getUserInfoByToken(token) {
  return instance({
    method: 'post',
    url: `/oauth2/user/getUserInfo`,
    opts: {
      params: { token }
    }
  })
}

// 获取菜单
function getMenuInfo(access_token, userId) {
  return instance({
    method: 'post',
    url: `/api/admin/v1/sys/user4sec/getProjectFunsByUserIdAndProjectId`,
    opts: {
      params: {
        access_token,
        userId,
        projectId
      }
    }
  })
}

// 校验token是否有效
function checkToken(token) {
  return instance({
    method: 'get',
    url: `/oauth2/oauth/check_token`,
    opts: {
      params: { token }
    }
  })
}

export {
  getTokenByCode,
  getUserInfoByToken,
  getMenuInfo,
  checkToken
}
