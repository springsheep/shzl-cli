/**
 * store-api模块api,此代码自动生成，如需更改，改模版即可
 */
import instance from './instance'
import {
	convertRESTAPI
} from '../util'


/**
 * 获取fastdfs配置
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreFileGetConfigPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/file/getConfig',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 审核开关
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreStoreParamUpdateStatusByIdPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/storeParam/updateStatusById',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 修改密码
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreUserStoreChangePasswordPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/userStore/changePassword',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 忘记密码
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreUserStoreForgotPasswordPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/userStore/forgotPassword',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * getCurrentUserInfo
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreUserStoreGetCurrentUserInfoGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/userStore/getCurrentUserInfo',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 根据用户id查询用户信息
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreUserStoreGetUserByIdGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/userStore/getUserById',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 重置密码
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreUserStoreResetPasswordPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/userStore/resetPassword',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 修改设备id
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreUserStoreUpdateDeviceCodeByIdPut(data, opts = {}) {
	return instance({
		method: 'put',
		url: '/oamp-store/userStore/updateDeviceCodeById',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 文件上传
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreFileUploadImgFilePost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/file/uploadImgFile',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 生成二维码
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreQrCodeGetQRCodeGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/qrCode/getQRCode',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 图形验证码
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreSmsGetAuthCodeImgGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/sms/getAuthCodeImg',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 发送短信
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreSmsSendSmsGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/sms/sendSms',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 查询审核开关
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreStoreParamSelectByKeyGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/storeParam/selectByKey',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 通过key和pid查询数据
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreStoreParamSelectByKeyAndPidGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/storeParam/selectByKeyAndPid',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 查询星级评分
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreStoreParamSelectByStarsScoreKeyGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/storeParam/selectByStarsScoreKey',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 通过key查询树
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreStoreParamSelectTreeByKeyGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/storeParam/selectTreeByKey',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 校验短信验证码
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBussinessAccountCheckCodePost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/bussinessAccount/checkCode',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 检验token
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBussinessAccountCheckTokenGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/bussinessAccount/checkToken',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 忘记密码
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBussinessAccountForgetPasswordPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/bussinessAccount/forgetPassword',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 登录
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBussinessAccountLoginPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/bussinessAccount/login',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 退出
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBussinessAccountLogoutGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/bussinessAccount/logout',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 根据手机号查询数据
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBussinessAccountQueryByMobileGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/bussinessAccount/queryByMobile',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 注册
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBussinessAccountRegisterPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/bussinessAccount/register',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 图片上传加水印
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreFileUploadFilePost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/file/uploadFile',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 新增
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessSubjectResultAddPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessSubjectResult/add',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 新增
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessSubjectSettingAddPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessSubjectSetting/add',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 修改
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessSubjectSettingEditPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessSubjectSetting/edit',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 查询配置数据
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessSubjectSettingQueryOneGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/businessSubjectSetting/queryOne',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 责任人类型v1
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessTypeQueryByPidGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/businessType/queryByPid',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 责任人类型v2
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessTypeV2QueryByPidGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/businessType/v2/queryByPid',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 更改手机号
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBussinessAccountChangeMobilePost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/bussinessAccount/changeMobile',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 修改密码
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBussinessAccountChangePasswordPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/bussinessAccount/changePassword',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 注销审批
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessStoreUpdateStatusByIdPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessStore/updateStatusById',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 新增
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessStoreCheckAddPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessStoreCheck/add',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 新增
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessSubjectAddPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessSubject/add',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 删除
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessSubjectDeleteByIdDelete(params, opts = {}) {
	return instance({
		method: 'delete',
		url: '/oamp-store/businessSubject/deleteById',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 修改
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessSubjectEditPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessSubject/edit',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 分页列表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessSubjectListPageGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/businessSubject/list/page',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 随机生成商户学习题目
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessSubjectListRandomGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/businessSubject/list/random',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 根据id查询数据
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessSubjectQueryByIdGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/businessSubject/queryById',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 手机端商铺分页列表
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessStoreQueryBusinessStoreAppPagePost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessStore/queryBusinessStoreAppPage',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 商户查询地图区数量
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessStoreQueryBusinessStoreAreaMapsPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessStore/queryBusinessStoreAreaMaps',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 商户查询列表
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessStoreQueryBusinessStoreListByPagePost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessStore/queryBusinessStoreListByPage',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 商户查询列表导出
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessStoreQueryBusinessStoreListExportPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessStore/queryBusinessStoreListExport',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 商户查询列表地图
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessStoreQueryBusinessStoreMapsPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessStore/queryBusinessStoreMaps',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 附近商户列表地图
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessStoreQueryBusinessStoreMapsByDistancePost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessStore/queryBusinessStoreMapsByDistance',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 通过id查询数据
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessStoreSelectOneGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/businessStore/selectOne',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 录入审批
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessStoreUpdateAuditStatusByIdPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessStore/updateAuditStatusById',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 注销
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessStoreCancelApprovalPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessStore/cancelApproval',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 通过地址查询数据
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessStoreCheckAddressGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/businessStore/checkAddress',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 修改
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessStoreEditPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessStore/edit',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 取10个商户分数最高
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessStoreFindStoreByScoreGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/businessStore/findStoreByScore',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 商户导入模板下载
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessStoreGetBusinessStoreTemplateGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/businessStore/getBusinessStoreTemplate',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 获取店铺树
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessStoreGetStoreTreeGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/businessStore/getStoreTree',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 商户列表导入
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessStoreImportBusinessStoreListPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessStore/importBusinessStoreList',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * APP商户列表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessStoreQueryAppListGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/businessStore/queryAppList',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 摊贩查询列表导出
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessPedlarQueryBusinessPedlarListExportPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessPedlar/queryBusinessPedlarListExport',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 通过id查询数据
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessPedlarSelectOneGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/businessPedlar/selectOne',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 新增
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessPedlarAreaAddPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessPedlarArea/add',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 删除
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessPedlarAreaDeleteByIdDelete(params, opts = {}) {
	return instance({
		method: 'delete',
		url: '/oamp-store/businessPedlarArea/deleteById',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 修改
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessPedlarAreaEditPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessPedlarArea/edit',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 查询区域列表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessPedlarAreaQueryAllGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/businessPedlarArea/queryAll',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 根据id查询数据
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessPedlarAreaQueryByIdGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/businessPedlarArea/queryById',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 添加
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessStoreAddPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessStore/add',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 类型统计
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessPedlarCountTypePost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessPedlar/count/type',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 摊贩类型统计导出
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessPedlarCountTypeExportPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessPedlar/count/typeExport',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 摊贩工作统计
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessPedlarCountWorkPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessPedlar/count/work',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 修改更新
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessPedlarEditPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessPedlar/edit',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 摊贩导入模板下载
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessPedlarGetBusinessPedlarTemplateGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/businessPedlar/getBusinessPedlarTemplate',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 摊贩列表导入
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessPedlarImportBusinessPedlarListPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessPedlar/importBusinessPedlarList',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * APP摊贩查询列表
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessPedlarQueryAPPBusinessPedlarListByPagePost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessPedlar/queryAPPBusinessPedlarListByPage',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 摊贩查询列表
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessPedlarQueryBusinessPedlarListByPagePost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessPedlar/queryBusinessPedlarListByPage',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 区域统计导出
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessCountStoreExportPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/business/count/storeExport',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 类型统计
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessCountTypePost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/business/count/type',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 类型统计导出
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessCountTypeExportPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/business/count/typeExport',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 工作统计
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessCountWorkPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/business/count/work',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 添加
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessPedlarAddPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessPedlar/add',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 摊贩审核
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessPedlarAuditPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessPedlar/audit',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 区域统计
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessPedlarCountStorePost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessPedlar/count/store',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 摊贩区域统计导出
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessPedlarCountStoreExportPost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/businessPedlar/count/storeExport',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}


/**
 * 区域递归树
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreAreaStreetFindAreaTreeGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/areaStreet/findAreaTree',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 查询区街道
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreAreaStreetFindParentGet(params, opts = {}) {
	return instance({
		method: 'get',
		url: '/oamp-store/areaStreet/findParent',
		opts: Object.assign({
			params
		}, opts)
	})
}


/**
 * 区域统计
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function oampStoreBusinessCountStorePost(data, opts = {}) {
	return instance({
		method: 'post',
		url: '/oamp-store/business/count/store',
		opts: Object.assign({
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}, {
			data
		}, opts)
	})
}

export {
	oampStoreFileGetConfigPost,
	oampStoreStoreParamUpdateStatusByIdPost,
	oampStoreUserStoreChangePasswordPost,
	oampStoreUserStoreForgotPasswordPost,
	oampStoreUserStoreGetCurrentUserInfoGet,
	oampStoreUserStoreGetUserByIdGet,
	oampStoreUserStoreResetPasswordPost,
	oampStoreUserStoreUpdateDeviceCodeByIdPut,
	oampStoreFileUploadImgFilePost,
	oampStoreQrCodeGetQRCodeGet,
	oampStoreSmsGetAuthCodeImgGet,
	oampStoreSmsSendSmsGet,
	oampStoreStoreParamSelectByKeyGet,
	oampStoreStoreParamSelectByKeyAndPidGet,
	oampStoreStoreParamSelectByStarsScoreKeyGet,
	oampStoreStoreParamSelectTreeByKeyGet,
	oampStoreBussinessAccountCheckCodePost,
	oampStoreBussinessAccountCheckTokenGet,
	oampStoreBussinessAccountForgetPasswordPost,
	oampStoreBussinessAccountLoginPost,
	oampStoreBussinessAccountLogoutGet,
	oampStoreBussinessAccountQueryByMobileGet,
	oampStoreBussinessAccountRegisterPost,
	oampStoreFileUploadFilePost,
	oampStoreBusinessSubjectResultAddPost,
	oampStoreBusinessSubjectSettingAddPost,
	oampStoreBusinessSubjectSettingEditPost,
	oampStoreBusinessSubjectSettingQueryOneGet,
	oampStoreBusinessTypeQueryByPidGet,
	oampStoreBusinessTypeV2QueryByPidGet,
	oampStoreBussinessAccountChangeMobilePost,
	oampStoreBussinessAccountChangePasswordPost,
	oampStoreBusinessStoreUpdateStatusByIdPost,
	oampStoreBusinessStoreCheckAddPost,
	oampStoreBusinessSubjectAddPost,
	oampStoreBusinessSubjectDeleteByIdDelete,
	oampStoreBusinessSubjectEditPost,
	oampStoreBusinessSubjectListPageGet,
	oampStoreBusinessSubjectListRandomGet,
	oampStoreBusinessSubjectQueryByIdGet,
	oampStoreBusinessStoreQueryBusinessStoreAppPagePost,
	oampStoreBusinessStoreQueryBusinessStoreAreaMapsPost,
	oampStoreBusinessStoreQueryBusinessStoreListByPagePost,
	oampStoreBusinessStoreQueryBusinessStoreListExportPost,
	oampStoreBusinessStoreQueryBusinessStoreMapsPost,
	oampStoreBusinessStoreQueryBusinessStoreMapsByDistancePost,
	oampStoreBusinessStoreSelectOneGet,
	oampStoreBusinessStoreUpdateAuditStatusByIdPost,
	oampStoreBusinessStoreCancelApprovalPost,
	oampStoreBusinessStoreCheckAddressGet,
	oampStoreBusinessStoreEditPost,
	oampStoreBusinessStoreFindStoreByScoreGet,
	oampStoreBusinessStoreGetBusinessStoreTemplateGet,
	oampStoreBusinessStoreGetStoreTreeGet,
	oampStoreBusinessStoreImportBusinessStoreListPost,
	oampStoreBusinessStoreQueryAppListGet,
	oampStoreBusinessPedlarQueryBusinessPedlarListExportPost,
	oampStoreBusinessPedlarSelectOneGet,
	oampStoreBusinessPedlarAreaAddPost,
	oampStoreBusinessPedlarAreaDeleteByIdDelete,
	oampStoreBusinessPedlarAreaEditPost,
	oampStoreBusinessPedlarAreaQueryAllGet,
	oampStoreBusinessPedlarAreaQueryByIdGet,
	oampStoreBusinessStoreAddPost,
	oampStoreBusinessPedlarCountTypePost,
	oampStoreBusinessPedlarCountTypeExportPost,
	oampStoreBusinessPedlarCountWorkPost,
	oampStoreBusinessPedlarEditPost,
	oampStoreBusinessPedlarGetBusinessPedlarTemplateGet,
	oampStoreBusinessPedlarImportBusinessPedlarListPost,
	oampStoreBusinessPedlarQueryAPPBusinessPedlarListByPagePost,
	oampStoreBusinessPedlarQueryBusinessPedlarListByPagePost,
	oampStoreBusinessCountStoreExportPost,
	oampStoreBusinessCountTypePost,
	oampStoreBusinessCountTypeExportPost,
	oampStoreBusinessCountWorkPost,
	oampStoreBusinessPedlarAddPost,
	oampStoreBusinessPedlarAuditPost,
	oampStoreBusinessPedlarCountStorePost,
	oampStoreBusinessPedlarCountStoreExportPost,
	oampStoreAreaStreetFindAreaTreeGet,
	oampStoreAreaStreetFindParentGet,
	oampStoreBusinessCountStorePost
}
