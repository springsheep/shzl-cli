/**
 * outdoor-ad模块api,此代码自动生成，如需更改，改模版即可
 */
import instance from './instance'

// import { convertRESTAPI } from '../util'

/**
 * 导入人员
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserImportUserGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/user/importUser',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 导入人员
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserImportUserPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/user/importUser',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserQueryGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/user/query',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserQueryPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/user/query',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据条件查询对象，不分页
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserQueryNoPagedGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/user/queryNoPaged',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据条件查询对象，不分页
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserQueryNoPagedPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/user/queryNoPaged',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 重置密码
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserResetPasswordGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/user/resetPassword',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 重置密码
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserResetPasswordPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/user/resetPassword',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 保存或更新对象，一般用于表格数据的编辑
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserSaveAndUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/user/saveAndUpdate',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 更新对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/user/update',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据用户编号查询已拥有的数据权限
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserGetDataAuthByUserIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/user/getDataAuthByUserId',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据角色id获取功能权限列表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserGetFunctionListByRoleIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/user/getFunctionListByRoleId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据角色id获取功能权限列表
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserGetFunctionListByRoleIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/user/getFunctionListByRoleId',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据部门编号查询导入人员
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserGetImportUserListByDeptIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/user/getImportUserListByDeptId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据部门编号查询导入人员
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserGetImportUserListByDeptIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/user/getImportUserListByDeptId',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 获取项目人员
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserGetProjectUserListGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/user/getProjectUserList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 获取项目人员
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserGetProjectUserListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/user/getProjectUserList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据部门编号查询人员
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserGetUserListByDeptIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/user/getUserListByDeptId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据部门编号查询人员
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserGetUserListByDeptIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/user/getUserListByDeptId',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 分配用户角色
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserAssignUserRolesPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/user/assignUserRoles',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserDeletePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/user/delete',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除多个对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserDeleteListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/user/deleteList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserFindByIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/user/findById',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserFindByIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/user/findById',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据用户编号获取对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserFindByUserNoGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/user/findByUserNo',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据用户编号查询所属角色
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserFindRoleListByUserIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/user/findRoleListByUserId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据用户编号查询所属角色
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserFindRoleListByUserIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/user/findRoleListByUserId',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据用户编号查询已拥有的数据权限
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserGetDataAuthByUserIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/user/getDataAuthByUserId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysRoleQueryGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/role/query',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysRoleQueryPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/role/query',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 保存或更新对象，一般用于表格数据的编辑
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysRoleSaveAndUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/role/saveAndUpdate',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 更新对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysRoleUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/role/update',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 新增对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserAddPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/user/add',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 分配数据权限
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserAssignDataAuthGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/user/assignDataAuth',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 分配数据权限
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserAssignDataAuthPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/user/assignDataAuth',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 分配用户角色
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysUserAssignUserRolesGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/user/assignUserRoles',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 查找全部功能树节点
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysRoleFindAllFunNodeTreeGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/role/findAllFunNodeTree',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 查找全部功能树节点
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysRoleFindAllFunNodeTreePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/role/findAllFunNodeTree',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysRoleFindByIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/role/findById',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysRoleFindByIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/role/findById',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 查询该角色授权的用户
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysRoleFindUsersByIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/role/findUsersById',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据部门编号查询人员
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysRoleGetUserListByDeptIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/role/getUserListByDeptId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据部门编号查询人员
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysRoleGetUserListByDeptIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/role/getUserListByDeptId',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 角色授权
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysRoleGrantFunctionPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/role/grantFunction',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 人员分配
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysRoleGrantRoleToUsersPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/role/grantRoleToUsers',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据id查找名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysProjectcategoryFindNameByIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/projectcategory/findNameById',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据id查找名称
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysProjectcategoryFindNameByIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/projectcategory/findNameById',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 查找树节点
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysProjectcategoryFindNextChildNodeTreeGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/projectcategory/findNextChildNodeTree',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 查找树节点
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysProjectcategoryFindNextChildNodeTreePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/projectcategory/findNextChildNodeTree',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysProjectcategoryQueryGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/projectcategory/query',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysProjectcategoryQueryPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/projectcategory/query',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 更新对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysProjectcategoryUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/projectcategory/update',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 新增对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysRoleAddPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/role/add',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysRoleDeletePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/role/delete',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除多个对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysRoleDeleteListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/role/deleteList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysProjectQueryPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/project/query',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 更新对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysProjectUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/project/update',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 新增对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysProjectcategoryAddPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/projectcategory/add',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysProjectcategoryDeletePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/projectcategory/delete',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除多个对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysProjectcategoryDeleteListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/projectcategory/deleteList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除节点
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysProjectcategoryDeleteNodePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/projectcategory/deleteNode',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除多个节点
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysProjectcategoryDeleteNodeListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/projectcategory/deleteNodeList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysProjectcategoryFindByIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/projectcategory/findById',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysProjectcategoryFindByIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/projectcategory/findById',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 保存或更新对象，一般用于表格数据的编辑
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysParameterSaveAndUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/parameter/saveAndUpdate',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 同步综合参数
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysParameterSyncGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/parameter/sync',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 同步综合参数
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysParameterSyncPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/parameter/sync',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 更新对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysParameterUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/parameter/update',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 新增对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysProjectAddPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/project/add',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysProjectDeletePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/project/delete',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除多个对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysProjectDeleteListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/project/deleteList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysProjectFindByIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/project/findById',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysProjectFindByIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/project/findById',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysProjectQueryGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/project/query',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 保存或更新对象，一般用于表格数据的编辑
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysLogonlogSaveAndUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/logonlog/saveAndUpdate',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 更新对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysLogonlogUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/logonlog/update',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 新增对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysParameterAddPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/parameter/add',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysParameterDeletePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/parameter/delete',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除多个对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysParameterDeleteListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/parameter/deleteList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysParameterFindByIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/parameter/findById',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysParameterFindByIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/parameter/findById',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysParameterQueryGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/parameter/query',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysParameterQueryPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/parameter/query',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 新增对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysLogonlogAddPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/logonlog/add',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysLogonlogDeletePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/logonlog/delete',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除多个对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysLogonlogDeleteListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/logonlog/deleteList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 导出到Excel
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysLogonlogExportExcelGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/logonlog/exportExcel',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 导出到Excel
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysLogonlogExportExcelPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/logonlog/exportExcel',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysLogonlogFindByIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/logonlog/findById',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysLogonlogFindByIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/logonlog/findById',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysLogonlogQueryGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/logonlog/query',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysLogonlogQueryPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/logonlog/query',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除多个节点
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysGroupDeleteNodeListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/group/deleteNodeList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysGroupFindByIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/group/findById',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysGroupFindByIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/group/findById',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 查找树节点
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysGroupFindNextChildNodeTreeGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/group/findNextChildNodeTree',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 查找树节点
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysGroupFindNextChildNodeTreePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/group/findNextChildNodeTree',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysGroupQueryGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/group/query',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysGroupQueryPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/group/query',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 保存或更新对象，一般用于表格数据的编辑
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysGroupSaveAndUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/group/saveAndUpdate',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 更新对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysGroupUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/group/update',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 查找树节点
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysFunctionFindNextChildNodeTreeGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/function/findNextChildNodeTree',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 查找树节点
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysFunctionFindNextChildNodeTreePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/function/findNextChildNodeTree',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysFunctionQueryGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/function/query',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysFunctionQueryPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/function/query',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 保存或更新对象，一般用于表格数据的编辑
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysFunctionSaveAndUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/function/saveAndUpdate',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 更新对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysFunctionUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/function/update',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 新增对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysGroupAddPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/group/add',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysGroupDeletePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/group/delete',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除多个对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysGroupDeleteListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/group/deleteList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除节点
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysGroupDeleteNodePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/group/deleteNode',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 新增对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysFunctionAddPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/function/add',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysFunctionDeletePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/function/delete',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除多个对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysFunctionDeleteListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/function/deleteList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除节点
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysFunctionDeleteNodePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/function/deleteNode',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除多个节点
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysFunctionDeleteNodeListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/function/deleteNodeList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysFunctionFindByIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/function/findById',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysFunctionFindByIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/function/findById',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysErrorlogFindByIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/errorlog/findById',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysErrorlogFindByIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/errorlog/findById',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysErrorlogQueryGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/errorlog/query',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysErrorlogQueryPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/errorlog/query',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 保存或更新对象，一般用于表格数据的编辑
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysErrorlogSaveAndUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/errorlog/saveAndUpdate',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 更新对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysErrorlogUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/errorlog/update',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysFindpasswordQueryGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/findpassword/query',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysFindpasswordQueryPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/findpassword/query',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 发起忘记密码
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysFindpasswordStartPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/findpassword/start',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 更新对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysFindpasswordUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/findpassword/update',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 查找树节点
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysDistrictFindNextChildNodeTreePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/district/findNextChildNodeTree',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据条件查询对象（sql拼接）
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysDistrictQueryGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/district/query',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据条件查询对象（sql拼接）
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysDistrictQueryPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/district/query',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 保存或更新对象，一般用于表格数据的编辑
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysDistrictSaveAndUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/district/saveAndUpdate',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 更新对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysDistrictUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/district/update',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 新增对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysErrorlogAddPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/errorlog/add',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysErrorlogDeletePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/errorlog/delete',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除多个对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysErrorlogDeleteListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/errorlog/deleteList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 导出到Excel
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysErrorlogExportExcelGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/errorlog/exportExcel',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 导出到Excel
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysErrorlogExportExcelPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/errorlog/exportExcel',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 保存或更新对象，一般用于表格数据的编辑
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysDeptmentSaveAndUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/deptment/saveAndUpdate',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 更新对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysDeptmentUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/deptment/update',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 新增对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysDistrictAddPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/district/add',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysDistrictDeletePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/district/delete',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除多个对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysDistrictDeleteListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/district/deleteList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除节点
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysDistrictDeleteNodePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/district/deleteNode',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除多个节点
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysDistrictDeleteNodeListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/district/deleteNodeList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysDistrictFindByIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/district/findById',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysDistrictFindByIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/district/findById',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 查找树节点
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysDistrictFindNextChildNodeTreeGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/district/findNextChildNodeTree',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 删除多个对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysDeptmentDeleteListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/deptment/deleteList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除节点
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysDeptmentDeleteNodePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/deptment/deleteNode',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除多个节点
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysDeptmentDeleteNodeListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/deptment/deleteNodeList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysDeptmentFindByIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/deptment/findById',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysDeptmentFindByIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/deptment/findById',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 查找树节点
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysDeptmentFindNextChildNodeTreeGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/deptment/findNextChildNodeTree',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 查找树节点
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysDeptmentFindNextChildNodeTreePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/deptment/findNextChildNodeTree',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 导入部门
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysDeptmentImportDeptmentPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/deptment/importDeptment',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysDeptmentQueryGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/deptment/query',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysDeptmentQueryPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/deptment/query',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysConfigcodeFindByIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/configcode/findById',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysConfigcodeFindByIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/configcode/findById',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysConfigcodeQueryGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/configcode/query',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysConfigcodeQueryPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/configcode/query',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 保存或更新对象，一般用于表格数据的编辑
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysConfigcodeSaveAndUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/configcode/saveAndUpdate',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 同步代码配置
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysConfigcodeSyncGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/configcode/sync',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 同步代码配置
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysConfigcodeSyncPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/configcode/sync',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 更新对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysConfigcodeUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/configcode/update',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 新增对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysDeptmentAddPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/deptment/add',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysDeptmentDeletePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/deptment/delete',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysCodedefDeletePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/codedef/delete',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除多个对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysCodedefDeleteListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/codedef/deleteList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysCodedefFindByIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/codedef/findById',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysCodedefFindByIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/codedef/findById',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysCodedefQueryGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/codedef/query',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysCodedefQueryPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/codedef/query',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 更新对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysCodedefUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/codedef/update',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 新增对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysConfigcodeAddPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/configcode/add',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysConfigcodeDeletePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/configcode/delete',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除多个对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysConfigcodeDeleteListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/configcode/deleteList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysCodeQueryPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/code/query',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 保存或更新对象，一般用于表格数据的编辑
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysCodeSaveAndUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/code/saveAndUpdate',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 同步代码字典
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysCodeSyncGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/code/sync',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 同步代码字典
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysCodeSyncPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/code/sync',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 更新对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysCodeUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/code/update',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 新增对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysCodedefAddPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/codedef/add',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysBizlogQueryGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/bizlog/query',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysBizlogQueryPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/bizlog/query',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 保存或更新对象，一般用于表格数据的编辑
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysBizlogSaveAndUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/bizlog/saveAndUpdate',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 更新对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysBizlogUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/bizlog/update',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 新增对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysCodeAddPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/code/add',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysCodeDeletePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/code/delete',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除多个对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysCodeDeleteListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/code/deleteList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysCodeFindByIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/code/findById',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysCodeFindByIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/code/findById',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysCodeQueryGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/code/query',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 导出到Excel
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysBizlogExportExcelPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/bizlog/exportExcel',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysBizlogFindByIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/bizlog/findById',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysBizlogFindByIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/bizlog/findById',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysApicalldetailFindByIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/apicalldetail/findById',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据条件查询对象（sql拼接）
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysApicalldetailQueryGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/apicalldetail/query',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 更新对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysApicalldetailUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/apicalldetail/update',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 新增对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysBizlogAddPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/bizlog/add',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysBizlogDeletePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/bizlog/delete',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除多个对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysBizlogDeleteListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/bizlog/deleteList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 导出到Excel
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysBizlogExportExcelGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/bizlog/exportExcel',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * logout
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SecurityLogoutGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/security/logout',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * logout
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SecurityLogoutPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/security/logout',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * reLogon
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SecurityReLogonPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/security/reLogon',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 找回密码-重置密码
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SecurityResetPasswordPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/security/resetPassword',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 选择身份
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SecuritySelectIdentityPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/security/selectIdentity',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 修改用户头像
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SecurityUpdateAvatarPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/security/updateAvatar',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 新增对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysApicalldetailAddPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/apicalldetail/add',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysApicalldetailDeletePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/apicalldetail/delete',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除多个对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysApicalldetailDeleteListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/sys/apicalldetail/deleteList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SysApicalldetailFindByIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/sys/apicalldetail/findById',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 修改密码
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SecurityChangePasswordPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/security/changePassword',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 修改界面主题
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SecurityChangeThemePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/security/changeTheme',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * checkLoged
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SecurityCheckGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/security/check',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * checkLoged
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SecurityCheckPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/security/check',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 发起忘记密码
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SecurityFindPasswordPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/security/findPassword',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * getCurrentUserInfo
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SecurityGetCurrentUserInfoGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/security/getCurrentUserInfo',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * getCurrentUserInfo
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SecurityGetCurrentUserInfoPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/security/getCurrentUserInfo',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * logon
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SecurityLogonGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/security/logon',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * logon
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SecurityLogonPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/security/logon',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 分页查询用户组列表
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1MessageUsergroupGetUserGroupListPagedPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/message/usergroup/getUserGroupListPaged',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据用户组id查询组内用户
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1MessageUsergroupGetUserListByUgIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/message/usergroup/getUserListByUgId',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据用户组id分页查询用户列表
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1MessageUsergroupGetUserListByUgIdPagedPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/message/usergroup/getUserListByUgIdPaged',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1MessageUsergroupQueryGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/message/usergroup/query',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据条件查询对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1MessageUsergroupQueryPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/message/usergroup/query',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 更新对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1MessageUsergroupUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/message/usergroup/update',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * check
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1RandomCodeCheckPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/randomCode/check',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 获取验证码
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1RandomCodeGenerateGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/randomCode/generate',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 获取验证码
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1RandomCodeGeneratePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/randomCode/generate',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 如果认证中心不在平台，需要通过该接口去第三方认证中心认证，认证成功后平台就认可该认证有效
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1SecurityAuthPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/security/auth',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * uploadFileToPath
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1FileUploadFileToPathPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/file/uploadFileToPath',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 新增对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1MessageUsergroupAddPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/message/usergroup/add',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1MessageUsergroupDeletePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/message/usergroup/delete',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 删除多个对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1MessageUsergroupDeleteListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/message/usergroup/deleteList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1MessageUsergroupFindByIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/message/usergroup/findById',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据主键获取对象
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1MessageUsergroupFindByIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/message/usergroup/findById',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 查询用户组列表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1MessageUsergroupGetUserGroupListGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/message/usergroup/getUserGroupList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 分页查询用户组列表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1MessageUsergroupGetUserGroupListPagedGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/message/usergroup/getUserGroupListPaged',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 批量导入人员
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderImportUsersDelete(params, opts = {}) {
  return instance({
    method: 'delete',
    url: '/citymanagement/v1/dataProvider/importUsers',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 批量导入人员
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderImportUsersOptions(params, opts = {}) {
  return instance({
    method: 'options',
    url: '/citymanagement/v1/dataProvider/importUsers',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 批量导入人员
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderImportUsersPatch(params, opts = {}) {
  return instance({
    method: 'patch',
    url: '/citymanagement/v1/dataProvider/importUsers',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * deleteFile
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1FileDeleteFileGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/file/deleteFile',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * download
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1FileDownloadGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/file/download',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * getFileListByPath
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1FileGetFileListByPathGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/file/getFileListByPath',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * getFileUrl
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1FileGetFileUrlGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/file/getFileUrl',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * multipleFileUploads
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1FileMultipleFileUploadsPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/file/multipleFileUploads',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * normalUpload
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1FileNormalUploadPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/file/normalUpload',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据组织和用户编号得到用户信息
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNoAndNameByGroupIdOptions(params, opts = {}) {
  return instance({
    method: 'options',
    url: '/citymanagement/v1/dataProvider/getUserNoAndNameByGroupId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据组织和用户编号得到用户信息
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNoAndNameByGroupIdPatch(params, opts = {}) {
  return instance({
    method: 'patch',
    url: '/citymanagement/v1/dataProvider/getUserNoAndNameByGroupId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 批量导入人员
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderImportUsersGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/dataProvider/importUsers',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 批量导入人员
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderImportUsersHead(params, opts = {}) {
  return instance({
    method: 'head',
    url: '/citymanagement/v1/dataProvider/importUsers',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 批量导入人员
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderImportUsersPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/dataProvider/importUsers',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 批量导入人员
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderImportUsersPut(data, opts = {}) {
  return instance({
    method: 'put',
    url: '/citymanagement/v1/dataProvider/importUsers',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据组织和用户编号得到用户信息
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNoAndNameByGroupIdPut(data, opts = {}) {
  return instance({
    method: 'put',
    url: '/citymanagement/v1/dataProvider/getUserNoAndNameByGroupId',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据组织和用户编号得到用户信息
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNoAndNameByGroupIdDelete(params, opts = {}) {
  return instance({
    method: 'delete',
    url: '/citymanagement/v1/dataProvider/getUserNoAndNameByGroupId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据用户编号得到用户信息
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNoAndNamePut(data, opts = {}) {
  return instance({
    method: 'put',
    url: '/citymanagement/v1/dataProvider/getUserNoAndName',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据用户编号得到用户信息
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNoAndNameDelete(params, opts = {}) {
  return instance({
    method: 'delete',
    url: '/citymanagement/v1/dataProvider/getUserNoAndName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据用户编号得到用户信息
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNoAndNameOptions(params, opts = {}) {
  return instance({
    method: 'options',
    url: '/citymanagement/v1/dataProvider/getUserNoAndName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据用户编号得到用户信息
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNoAndNamePatch(params, opts = {}) {
  return instance({
    method: 'patch',
    url: '/citymanagement/v1/dataProvider/getUserNoAndName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据组织和用户编号得到用户信息
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNoAndNameByGroupIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/dataProvider/getUserNoAndNameByGroupId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据组织和用户编号得到用户信息
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNoAndNameByGroupIdHead(params, opts = {}) {
  return instance({
    method: 'head',
    url: '/citymanagement/v1/dataProvider/getUserNoAndNameByGroupId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据组织和用户编号得到用户信息
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNoAndNameByGroupIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/dataProvider/getUserNoAndNameByGroupId',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据组织和用户编号得到用户名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNameByGroupIdDelete(params, opts = {}) {
  return instance({
    method: 'delete',
    url: '/citymanagement/v1/dataProvider/getUserNameByGroupId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据组织和用户编号得到用户名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNameByGroupIdOptions(params, opts = {}) {
  return instance({
    method: 'options',
    url: '/citymanagement/v1/dataProvider/getUserNameByGroupId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据组织和用户编号得到用户名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNameByGroupIdPatch(params, opts = {}) {
  return instance({
    method: 'patch',
    url: '/citymanagement/v1/dataProvider/getUserNameByGroupId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据用户编号得到用户信息
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNoAndNameGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/dataProvider/getUserNoAndName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据用户编号得到用户信息
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNoAndNameHead(params, opts = {}) {
  return instance({
    method: 'head',
    url: '/citymanagement/v1/dataProvider/getUserNoAndName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据用户编号得到用户信息
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNoAndNamePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/dataProvider/getUserNoAndName',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据组织和用户编号得到用户名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNameByGroupIdHead(params, opts = {}) {
  return instance({
    method: 'head',
    url: '/citymanagement/v1/dataProvider/getUserNameByGroupId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据组织和用户编号得到用户名称
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNameByGroupIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/dataProvider/getUserNameByGroupId',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据组织和用户编号得到用户名称
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNameByGroupIdPut(data, opts = {}) {
  return instance({
    method: 'put',
    url: '/citymanagement/v1/dataProvider/getUserNameByGroupId',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据用户编号得到用户名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNameGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/dataProvider/getUserName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据用户编号得到用户名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNameHead(params, opts = {}) {
  return instance({
    method: 'head',
    url: '/citymanagement/v1/dataProvider/getUserName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据用户编号得到用户名称
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNamePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/dataProvider/getUserName',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据用户编号得到用户名称
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNamePut(data, opts = {}) {
  return instance({
    method: 'put',
    url: '/citymanagement/v1/dataProvider/getUserName',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据用户编号得到用户名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNameDelete(params, opts = {}) {
  return instance({
    method: 'delete',
    url: '/citymanagement/v1/dataProvider/getUserName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据用户编号得到用户名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNameOptions(params, opts = {}) {
  return instance({
    method: 'options',
    url: '/citymanagement/v1/dataProvider/getUserName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据用户编号得到用户名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNamePatch(params, opts = {}) {
  return instance({
    method: 'patch',
    url: '/citymanagement/v1/dataProvider/getUserName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据组织和用户编号得到用户名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserNameByGroupIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/dataProvider/getUserNameByGroupId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据用户编号获取项目列表
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetProjectListByUserIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/dataProvider/getProjectListByUserId',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 级联查询：根据部门编号查询人员
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserByDeptIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/dataProvider/getUserByDeptId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 级联查询：根据部门编号查询人员
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserByDeptIdHead(params, opts = {}) {
  return instance({
    method: 'head',
    url: '/citymanagement/v1/dataProvider/getUserByDeptId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 级联查询：根据部门编号查询人员
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserByDeptIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/dataProvider/getUserByDeptId',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 级联查询：根据部门编号查询人员
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserByDeptIdPut(data, opts = {}) {
  return instance({
    method: 'put',
    url: '/citymanagement/v1/dataProvider/getUserByDeptId',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 级联查询：根据部门编号查询人员
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserByDeptIdDelete(params, opts = {}) {
  return instance({
    method: 'delete',
    url: '/citymanagement/v1/dataProvider/getUserByDeptId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 级联查询：根据部门编号查询人员
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserByDeptIdOptions(params, opts = {}) {
  return instance({
    method: 'options',
    url: '/citymanagement/v1/dataProvider/getUserByDeptId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 级联查询：根据部门编号查询人员
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetUserByDeptIdPatch(params, opts = {}) {
  return instance({
    method: 'patch',
    url: '/citymanagement/v1/dataProvider/getUserByDeptId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据参数代码获取参数值
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetParameterValueHead(params, opts = {}) {
  return instance({
    method: 'head',
    url: '/citymanagement/v1/dataProvider/getParameterValue',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据参数代码获取参数值
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetParameterValuePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/dataProvider/getParameterValue',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据参数代码获取参数值
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetParameterValuePut(data, opts = {}) {
  return instance({
    method: 'put',
    url: '/citymanagement/v1/dataProvider/getParameterValue',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据参数代码获取参数值
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetParameterValueDelete(params, opts = {}) {
  return instance({
    method: 'delete',
    url: '/citymanagement/v1/dataProvider/getParameterValue',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据参数代码获取参数值
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetParameterValueOptions(params, opts = {}) {
  return instance({
    method: 'options',
    url: '/citymanagement/v1/dataProvider/getParameterValue',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据参数代码获取参数值
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetParameterValuePatch(params, opts = {}) {
  return instance({
    method: 'patch',
    url: '/citymanagement/v1/dataProvider/getParameterValue',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据用户编号获取项目列表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetProjectListByUserIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/dataProvider/getProjectListByUserId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 获取自定义编码的下一个编号
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetNextCodeGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/dataProvider/getNextCode',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 获取数据库表中字段的下一个值
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetNextValGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/dataProvider/getNextVal',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据参数代码获取参数值
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetParameterValueGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/dataProvider/getParameterValue',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 导入部门树查询
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetImportDeptmentTreeListHead(params, opts = {}) {
  return instance({
    method: 'head',
    url: '/citymanagement/v1/dataProvider/getImportDeptmentTreeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 导入部门树查询
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetImportDeptmentTreeListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/dataProvider/getImportDeptmentTreeList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 导入部门树查询
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetImportDeptmentTreeListPut(data, opts = {}) {
  return instance({
    method: 'put',
    url: '/citymanagement/v1/dataProvider/getImportDeptmentTreeList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 导入部门树查询
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetImportDeptmentTreeListDelete(params, opts = {}) {
  return instance({
    method: 'delete',
    url: '/citymanagement/v1/dataProvider/getImportDeptmentTreeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 导入部门树查询
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetImportDeptmentTreeListOptions(params, opts = {}) {
  return instance({
    method: 'options',
    url: '/citymanagement/v1/dataProvider/getImportDeptmentTreeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 导入部门树查询
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetImportDeptmentTreeListPatch(params, opts = {}) {
  return instance({
    method: 'patch',
    url: '/citymanagement/v1/dataProvider/getImportDeptmentTreeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 组织树查询，前端不传父节点时，直接取当前用户的机构作为节点数据返回
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetGroupTreeListGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/dataProvider/getGroupTreeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 组织树查询，前端不传父节点时，直接取当前用户的机构作为节点数据返回
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetGroupTreeListHead(params, opts = {}) {
  return instance({
    method: 'head',
    url: '/citymanagement/v1/dataProvider/getGroupTreeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 组织树查询，前端不传父节点时，直接取当前用户的机构作为节点数据返回
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetGroupTreeListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/dataProvider/getGroupTreeList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 组织树查询，前端不传父节点时，直接取当前用户的机构作为节点数据返回
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetGroupTreeListPut(data, opts = {}) {
  return instance({
    method: 'put',
    url: '/citymanagement/v1/dataProvider/getGroupTreeList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 组织树查询，前端不传父节点时，直接取当前用户的机构作为节点数据返回
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetGroupTreeListDelete(params, opts = {}) {
  return instance({
    method: 'delete',
    url: '/citymanagement/v1/dataProvider/getGroupTreeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 组织树查询，前端不传父节点时，直接取当前用户的机构作为节点数据返回
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetGroupTreeListOptions(params, opts = {}) {
  return instance({
    method: 'options',
    url: '/citymanagement/v1/dataProvider/getGroupTreeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 组织树查询，前端不传父节点时，直接取当前用户的机构作为节点数据返回
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetGroupTreeListPatch(params, opts = {}) {
  return instance({
    method: 'patch',
    url: '/citymanagement/v1/dataProvider/getGroupTreeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 导入部门树查询
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetImportDeptmentTreeListGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/dataProvider/getImportDeptmentTreeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据组织名称获取组织ID
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetGroupIdPatch(params, opts = {}) {
  return instance({
    method: 'patch',
    url: '/citymanagement/v1/dataProvider/getGroupId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据组织ID获取组织名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetGroupNameGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/dataProvider/getGroupName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据组织ID获取组织名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetGroupNameHead(params, opts = {}) {
  return instance({
    method: 'head',
    url: '/citymanagement/v1/dataProvider/getGroupName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据组织ID获取组织名称
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetGroupNamePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/dataProvider/getGroupName',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据组织ID获取组织名称
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetGroupNamePut(data, opts = {}) {
  return instance({
    method: 'put',
    url: '/citymanagement/v1/dataProvider/getGroupName',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据组织ID获取组织名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetGroupNameDelete(params, opts = {}) {
  return instance({
    method: 'delete',
    url: '/citymanagement/v1/dataProvider/getGroupName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据组织ID获取组织名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetGroupNameOptions(params, opts = {}) {
  return instance({
    method: 'options',
    url: '/citymanagement/v1/dataProvider/getGroupName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据组织ID获取组织名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetGroupNamePatch(params, opts = {}) {
  return instance({
    method: 'patch',
    url: '/citymanagement/v1/dataProvider/getGroupName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据功能编号得到功能名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetFunNameOptions(params, opts = {}) {
  return instance({
    method: 'options',
    url: '/citymanagement/v1/dataProvider/getFunName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据功能编号得到功能名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetFunNamePatch(params, opts = {}) {
  return instance({
    method: 'patch',
    url: '/citymanagement/v1/dataProvider/getFunName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据组织名称获取组织ID
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetGroupIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/dataProvider/getGroupId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据组织名称获取组织ID
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetGroupIdHead(params, opts = {}) {
  return instance({
    method: 'head',
    url: '/citymanagement/v1/dataProvider/getGroupId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据组织名称获取组织ID
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetGroupIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/dataProvider/getGroupId',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据组织名称获取组织ID
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetGroupIdPut(data, opts = {}) {
  return instance({
    method: 'put',
    url: '/citymanagement/v1/dataProvider/getGroupId',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据组织名称获取组织ID
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetGroupIdDelete(params, opts = {}) {
  return instance({
    method: 'delete',
    url: '/citymanagement/v1/dataProvider/getGroupId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据组织名称获取组织ID
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetGroupIdOptions(params, opts = {}) {
  return instance({
    method: 'options',
    url: '/citymanagement/v1/dataProvider/getGroupId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 部门树查询
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptmentTreeListPatch(params, opts = {}) {
  return instance({
    method: 'patch',
    url: '/citymanagement/v1/dataProvider/getDeptmentTreeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据功能编号得到功能名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetFunNameGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/dataProvider/getFunName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据功能编号得到功能名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetFunNameHead(params, opts = {}) {
  return instance({
    method: 'head',
    url: '/citymanagement/v1/dataProvider/getFunName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据功能编号得到功能名称
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetFunNamePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/dataProvider/getFunName',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据功能编号得到功能名称
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetFunNamePut(data, opts = {}) {
  return instance({
    method: 'put',
    url: '/citymanagement/v1/dataProvider/getFunName',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据功能编号得到功能名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetFunNameDelete(params, opts = {}) {
  return instance({
    method: 'delete',
    url: '/citymanagement/v1/dataProvider/getFunName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 部门查询
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptmentListOptions(params, opts = {}) {
  return instance({
    method: 'options',
    url: '/citymanagement/v1/dataProvider/getDeptmentList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 部门查询
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptmentListPatch(params, opts = {}) {
  return instance({
    method: 'patch',
    url: '/citymanagement/v1/dataProvider/getDeptmentList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 部门树查询
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptmentTreeListGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/dataProvider/getDeptmentTreeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 部门树查询
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptmentTreeListHead(params, opts = {}) {
  return instance({
    method: 'head',
    url: '/citymanagement/v1/dataProvider/getDeptmentTreeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 部门树查询
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptmentTreeListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/dataProvider/getDeptmentTreeList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 部门树查询
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptmentTreeListPut(data, opts = {}) {
  return instance({
    method: 'put',
    url: '/citymanagement/v1/dataProvider/getDeptmentTreeList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 部门树查询
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptmentTreeListDelete(params, opts = {}) {
  return instance({
    method: 'delete',
    url: '/citymanagement/v1/dataProvider/getDeptmentTreeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 部门树查询
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptmentTreeListOptions(params, opts = {}) {
  return instance({
    method: 'options',
    url: '/citymanagement/v1/dataProvider/getDeptmentTreeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 级联查询：根据组织查询部门
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptmentByGroupIdDelete(params, opts = {}) {
  return instance({
    method: 'delete',
    url: '/citymanagement/v1/dataProvider/getDeptmentByGroupId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 级联查询：根据组织查询部门
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptmentByGroupIdOptions(params, opts = {}) {
  return instance({
    method: 'options',
    url: '/citymanagement/v1/dataProvider/getDeptmentByGroupId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 级联查询：根据组织查询部门
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptmentByGroupIdPatch(params, opts = {}) {
  return instance({
    method: 'patch',
    url: '/citymanagement/v1/dataProvider/getDeptmentByGroupId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 部门查询
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptmentListGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/dataProvider/getDeptmentList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 部门查询
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptmentListHead(params, opts = {}) {
  return instance({
    method: 'head',
    url: '/citymanagement/v1/dataProvider/getDeptmentList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 部门查询
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptmentListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/dataProvider/getDeptmentList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 部门查询
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptmentListPut(data, opts = {}) {
  return instance({
    method: 'put',
    url: '/citymanagement/v1/dataProvider/getDeptmentList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 部门查询
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptmentListDelete(params, opts = {}) {
  return instance({
    method: 'delete',
    url: '/citymanagement/v1/dataProvider/getDeptmentList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据部门编号得到部门名称
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptNamePut(data, opts = {}) {
  return instance({
    method: 'put',
    url: '/citymanagement/v1/dataProvider/getDeptName',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据部门编号得到部门名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptNameDelete(params, opts = {}) {
  return instance({
    method: 'delete',
    url: '/citymanagement/v1/dataProvider/getDeptName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据部门编号得到部门名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptNameOptions(params, opts = {}) {
  return instance({
    method: 'options',
    url: '/citymanagement/v1/dataProvider/getDeptName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据部门编号得到部门名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptNamePatch(params, opts = {}) {
  return instance({
    method: 'patch',
    url: '/citymanagement/v1/dataProvider/getDeptName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 级联查询：根据组织查询部门
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptmentByGroupIdGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/dataProvider/getDeptmentByGroupId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 级联查询：根据组织查询部门
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptmentByGroupIdHead(params, opts = {}) {
  return instance({
    method: 'head',
    url: '/citymanagement/v1/dataProvider/getDeptmentByGroupId',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 级联查询：根据组织查询部门
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptmentByGroupIdPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/dataProvider/getDeptmentByGroupId',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 级联查询：根据组织查询部门
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptmentByGroupIdPut(data, opts = {}) {
  return instance({
    method: 'put',
    url: '/citymanagement/v1/dataProvider/getDeptmentByGroupId',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据代码类型获取代码配置字典列表
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetConfigCodeListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/dataProvider/getConfigCodeList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据代码类型获取代码配置字典列表
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetConfigCodeListPut(data, opts = {}) {
  return instance({
    method: 'put',
    url: '/citymanagement/v1/dataProvider/getConfigCodeList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据代码类型获取代码配置字典列表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetConfigCodeListDelete(params, opts = {}) {
  return instance({
    method: 'delete',
    url: '/citymanagement/v1/dataProvider/getConfigCodeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据代码类型获取代码配置字典列表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetConfigCodeListOptions(params, opts = {}) {
  return instance({
    method: 'options',
    url: '/citymanagement/v1/dataProvider/getConfigCodeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据代码类型获取代码配置字典列表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetConfigCodeListPatch(params, opts = {}) {
  return instance({
    method: 'patch',
    url: '/citymanagement/v1/dataProvider/getConfigCodeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据部门编号得到部门名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptNameGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/dataProvider/getDeptName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据部门编号得到部门名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptNameHead(params, opts = {}) {
  return instance({
    method: 'head',
    url: '/citymanagement/v1/dataProvider/getDeptName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据部门编号得到部门名称
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetDeptNamePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/dataProvider/getDeptName',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据代码类型和代码名称得到代码值
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeValueHead(params, opts = {}) {
  return instance({
    method: 'head',
    url: '/citymanagement/v1/dataProvider/getCodeValue',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据代码类型和代码名称得到代码值
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeValuePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/dataProvider/getCodeValue',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据代码类型和代码名称得到代码值
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeValuePut(data, opts = {}) {
  return instance({
    method: 'put',
    url: '/citymanagement/v1/dataProvider/getCodeValue',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据代码类型和代码名称得到代码值
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeValueDelete(params, opts = {}) {
  return instance({
    method: 'delete',
    url: '/citymanagement/v1/dataProvider/getCodeValue',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据代码类型和代码名称得到代码值
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeValueOptions(params, opts = {}) {
  return instance({
    method: 'options',
    url: '/citymanagement/v1/dataProvider/getCodeValue',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据代码类型和代码名称得到代码值
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeValuePatch(params, opts = {}) {
  return instance({
    method: 'patch',
    url: '/citymanagement/v1/dataProvider/getCodeValue',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据代码类型获取代码配置字典列表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetConfigCodeListGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/dataProvider/getConfigCodeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据代码类型获取代码配置字典列表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetConfigCodeListHead(params, opts = {}) {
  return instance({
    method: 'head',
    url: '/citymanagement/v1/dataProvider/getConfigCodeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 获得所有的字典类型
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeTypeListGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/dataProvider/getCodeTypeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 获得所有的字典类型
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeTypeListHead(params, opts = {}) {
  return instance({
    method: 'head',
    url: '/citymanagement/v1/dataProvider/getCodeTypeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 获得所有的字典类型
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeTypeListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/dataProvider/getCodeTypeList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 获得所有的字典类型
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeTypeListPut(data, opts = {}) {
  return instance({
    method: 'put',
    url: '/citymanagement/v1/dataProvider/getCodeTypeList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 获得所有的字典类型
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeTypeListDelete(params, opts = {}) {
  return instance({
    method: 'delete',
    url: '/citymanagement/v1/dataProvider/getCodeTypeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 获得所有的字典类型
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeTypeListOptions(params, opts = {}) {
  return instance({
    method: 'options',
    url: '/citymanagement/v1/dataProvider/getCodeTypeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 获得所有的字典类型
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeTypeListPatch(params, opts = {}) {
  return instance({
    method: 'patch',
    url: '/citymanagement/v1/dataProvider/getCodeTypeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据代码类型和代码名称得到代码值
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeValueGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/dataProvider/getCodeValue',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据代码类型和代码值得到代码名称
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeNamePut(data, opts = {}) {
  return instance({
    method: 'put',
    url: '/citymanagement/v1/dataProvider/getCodeName',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据代码类型和代码值得到代码名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeNameDelete(params, opts = {}) {
  return instance({
    method: 'delete',
    url: '/citymanagement/v1/dataProvider/getCodeName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据代码类型和代码值得到代码名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeNameOptions(params, opts = {}) {
  return instance({
    method: 'options',
    url: '/citymanagement/v1/dataProvider/getCodeName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据代码类型和代码值得到代码名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeNamePatch(params, opts = {}) {
  return instance({
    method: 'patch',
    url: '/citymanagement/v1/dataProvider/getCodeName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据代码类型获取代码字典列表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeListDelete(params, opts = {}) {
  return instance({
    method: 'delete',
    url: '/citymanagement/v1/dataProvider/getCodeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据代码类型获取代码字典列表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeListOptions(params, opts = {}) {
  return instance({
    method: 'options',
    url: '/citymanagement/v1/dataProvider/getCodeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据代码类型获取代码字典列表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeListPatch(params, opts = {}) {
  return instance({
    method: 'patch',
    url: '/citymanagement/v1/dataProvider/getCodeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据代码类型和代码值得到代码名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeNameGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/dataProvider/getCodeName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据代码类型和代码值得到代码名称
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeNameHead(params, opts = {}) {
  return instance({
    method: 'head',
    url: '/citymanagement/v1/dataProvider/getCodeName',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据代码类型和代码值得到代码名称
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeNamePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/dataProvider/getCodeName',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * sendMqtt
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementTestSendMqttOptions(params, opts = {}) {
  return instance({
    method: 'options',
    url: '/citymanagement/test/sendMqtt.do',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * sendMqtt
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementTestSendMqttPatch(params, opts = {}) {
  return instance({
    method: 'patch',
    url: '/citymanagement/test/sendMqtt.do',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 获取权限树
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementUserGetroleGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/user/getrole',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 用户登录
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementUserLoginGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/user/login',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据代码类型获取代码字典列表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeListGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/v1/dataProvider/getCodeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据代码类型获取代码字典列表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeListHead(params, opts = {}) {
  return instance({
    method: 'head',
    url: '/citymanagement/v1/dataProvider/getCodeList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据代码类型获取代码字典列表
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/v1/dataProvider/getCodeList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据代码类型获取代码字典列表
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementV1DataProviderGetCodeListPut(data, opts = {}) {
  return instance({
    method: 'put',
    url: '/citymanagement/v1/dataProvider/getCodeList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * addTopic
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementTestAddTopicOptions(params, opts = {}) {
  return instance({
    method: 'options',
    url: '/citymanagement/test/addTopic',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * addTopic
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementTestAddTopicPatch(params, opts = {}) {
  return instance({
    method: 'patch',
    url: '/citymanagement/test/addTopic',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * sendMqtt
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementTestSendMqttGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/test/sendMqtt.do',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * sendMqtt
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementTestSendMqttHead(params, opts = {}) {
  return instance({
    method: 'head',
    url: '/citymanagement/test/sendMqtt.do',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * sendMqtt
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementTestSendMqttPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/test/sendMqtt.do',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * sendMqtt
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementTestSendMqttPut(data, opts = {}) {
  return instance({
    method: 'put',
    url: '/citymanagement/test/sendMqtt.do',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * sendMqtt
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementTestSendMqttDelete(params, opts = {}) {
  return instance({
    method: 'delete',
    url: '/citymanagement/test/sendMqtt.do',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 重新生成许可情况统计报表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementStatisticalRegeneratePermissionStatisticsGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/statistical/regeneratePermissionStatistics',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 许可到期定时任务
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementTaskExportGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/task/export',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 许可定期安全监测任务
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementTaskSafetyGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/task/safety',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * addTopic
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementTestAddTopicGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/test/addTopic',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * addTopic
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementTestAddTopicHead(params, opts = {}) {
  return instance({
    method: 'head',
    url: '/citymanagement/test/addTopic',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * addTopic
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementTestAddTopicPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/test/addTopic',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * addTopic
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementTestAddTopicPut(data, opts = {}) {
  return instance({
    method: 'put',
    url: '/citymanagement/test/addTopic',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * addTopic
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementTestAddTopicDelete(params, opts = {}) {
  return instance({
    method: 'delete',
    url: '/citymanagement/test/addTopic',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 综合统计-明细数据
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementStatisticalCompletionOfIntegrativeDetailGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/statistical/completionOfIntegrativeDetail',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 退回整改完成情况统计报表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementStatisticalCompletionOfRectificationGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/statistical/completionOfRectification',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 退回整改完成情况统计报表-明细数据
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementStatisticalCompletionOfRectificationDetailGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/statistical/completionOfRectificationDetail',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 执法中队完成情况统计
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementStatisticalCompletionOfSquadronGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/statistical/completionOfSquadron',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 执法中队完成情况统计-明细数据
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementStatisticalCompletionOfSquadronDetailGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/statistical/completionOfSquadronDetail',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 综合统计
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementStatisticalIntegrativeStatisticsGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/statistical/integrativeStatistics',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 许可统计情况
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementStatisticalPermissionStatisticsGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/statistical/permissionStatistics',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 许可统计情况-明细数据
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementStatisticalPermissionStatisticsDetailGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/statistical/permissionStatisticsDetail',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 更新未办结事件审批效果图
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessUdpateEnclosuresPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/process/udpateEnclosures',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 案件修改
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/process/update',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 内勤撤回中队案件接口
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessWithdrawGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/process/withdraw',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 审批事项完成情况统计报表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementStatisticalCompletionOfApprovalMattersGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/statistical/completionOfApprovalMatters',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 审批事项完成情况统计报表-明细数据
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementStatisticalCompletionOfApprovalMattersDetailGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/statistical/completionOfApprovalMattersDetail',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 反馈期限完成情况统计
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementStatisticalCompletionOfFeedbackPeriodGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/statistical/completionOfFeedbackPeriod',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 反馈期限完成情况统计-明细数据
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementStatisticalCompletionOfFeedbackPeriodDetailGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/statistical/completionOfFeedbackPeriodDetail',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 退回重新指派
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessReturnAssignGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/process/returnAssign',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 案件退回整改接口
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessReturnPlanGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/process/returnPlan',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 退回重新审核
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessReviewGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/process/review',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 队员现场审核
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessScenePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/process/scene',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 中队待办已办任务列表
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessSquadronListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/process/squadronList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 队长退回给审批科
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessSquadronReturnGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/process/squadronReturn',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 中队列表下拉
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessTeamListGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/process/teamList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 队员转交其他队员接口
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessTransferGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/process/transfer',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 队员列表下拉
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessMemberListGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/process/memberList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 审批事项撤回
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessRecallGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/process/recall',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 报表导出
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessExportReportPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/process/exportReport',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 惯用语
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessExpressionsGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/process/expressions',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 字典类查询接口1.申请单位2许可证状态.3安全检测状态5办理阶段6案件环节7办理状态89审批类别
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessGetByTypeGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/process/getByType',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 通过统一社会信用代码获取单位信息
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessGetCommpanyByUnicodeGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/process/getCommpanyByUnicode',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 查询中队交办结果
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessGetHnadOverResultGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/process/getHnadOverResult',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 获取关联列表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessGetLinkEventGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/process/getLinkEvent',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 获取复核信息
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessGetSceneDetailGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/process/getSceneDetail',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 接口
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessLicenseDetailsGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/process/licenseDetails',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 审批事件列表查询
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessApprovalAllEventListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/process/approvalAllEventList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 审批科查询许可证信息接口
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessApprovalEventListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/process/approvalEventList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 审核通过
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessApprovedGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/process/approved',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 案件删除
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessDeleteEventGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/process/deleteEvent',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 案件详情接口
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessDetailsGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/process/details',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 新增案件
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessEventInsertPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/process/eventInsert',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 业务惯用语设置请求接口
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementPlatformManagementRequestIdiomSettingGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/platformManagement/requestIdiomSetting',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 业务惯用语设置树列表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementPlatformManagementRequestIdiomTreeGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/platformManagement/requestIdiomTree',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 到期通知时间设置请求接口
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementPlatformManagementRequestNoticeTimeGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/platformManagement/requestNoticeTime',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 备案审批类型管理请求接口
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementPlatformManagementRequireApprovalManagementGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/platformManagement/requireApprovalManagement',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 日常监督任务自动生成设置-信息修改
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementPlatformManagementUpdateDailySupervisionAutomaticPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/platformManagement/updateDailySupervisionAutomatic',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 日常监督任务内容设置修改
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementPlatformManagementUpdateDailySupervisionContentPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/platformManagement/updateDailySupervisionContent',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 指派队员
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessAppoingMemberGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/process/appoingMember',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 队长审批复核
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementProcessApprovalGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/process/approval',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 日常监督任务自动生成设置-叶子结点关联信息查询
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementPlatformManagementDailySupervisionAutomaticLeafInfoGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/platformManagement/dailySupervisionAutomaticLeafInfo',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 日常监督任务自动生成设置-树查询
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementPlatformManagementDailySupervisionAutomaticTreeGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/platformManagement/dailySupervisionAutomaticTree',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 日常监督任务内容设置查询
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementPlatformManagementDailySupervisionContentGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/platformManagement/dailySupervisionContent',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 时间运算
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementPlatformManagementGetDayPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/platformManagement/getDay',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 办理期限查询接口 1安全检测
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementPlatformManagementGetDeadlineByTypeGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/platformManagement/getDeadlineByType',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 备案审批类型删除存接口
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementPlatformManagementRecApprovalDeleteGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/platformManagement/recApprovalDelete',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 备案审批类型管理新增保存接口
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementPlatformManagementRecApprovalManagementPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/platformManagement/recApprovalManagement',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 备案审批类型管理保存修改接口
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementPlatformManagementRecApprovalUpdatePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/platformManagement/recApprovalUpdate',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 业务惯用语删除接口
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementPlatformManagementRequestIdiomDeleteGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/platformManagement/requestIdiomDelete',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 导出许可统计情况报表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementDataExportExportPermissionStatisticsGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/dataExport/exportPermissionStatistics',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 导出许可统计情况-明细数据
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementDataExportExportPermissionStatisticsDetailGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/dataExport/exportPermissionStatisticsDetail',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 上传文件
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementFileManagementFileUploadPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/fileManagement/fileUpload',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 图片查看
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementFileManagementQueryFileInfoGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/fileManagement/queryFileInfo',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 日常监督管理列表查询
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementLawEnforcenmentListGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/law/enforcenment/list',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 日常监督管理列表查询
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementLawEnforcenmentTaskListGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/law/enforcenment/taskList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 业务惯用语设置保存新增接口
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementPlatformManagementBusinessIdiomInsertPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/platformManagement/businessIdiomInsert',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 业务惯用语设置保存修改接口
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementPlatformManagementBusinessIdiomUpdateGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/platformManagement/businessIdiomUpdate',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 导出反馈期限完成情况统计报表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementDataExportExportCompletionOfFeedbackPeriodGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/dataExport/exportCompletionOfFeedbackPeriod',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 导出反馈期限完成情况统计-明细数据
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementDataExportExportCompletionOfFeedbackPeriodDetailGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/dataExport/exportCompletionOfFeedbackPeriodDetail',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 导出综合统计-明细数据
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementDataExportExportCompletionOfIntegrativeDetailGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/dataExport/exportCompletionOfIntegrativeDetail',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 导出退回整改完成情况统计报表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementDataExportExportCompletionOfRectificationGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/dataExport/exportCompletionOfRectification',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 导出退回整改完成情况统计报表-明细数据
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementDataExportExportCompletionOfRectificationDetailGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/dataExport/exportCompletionOfRectificationDetail',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 导出执法中队完成情况统计表报
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementDataExportExportCompletionOfSquadronGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/dataExport/exportCompletionOfSquadron',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 导出执法中队完成情况统计-明细数据
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementDataExportExportCompletionOfSquadronDetailGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/dataExport/exportCompletionOfSquadronDetail',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 导出综合统计
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementDataExportExportIntegrativeStatisticsGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/dataExport/exportIntegrativeStatistics',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 退回
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementDailysupervisionReturnGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/dailysupervision/return',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 许可撤销
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementDailysupervisionRevokeGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/dailysupervision/revoke',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 队员转交
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementDailysupervisionTransferGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/dailysupervision/transfer',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 现场处理
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementDailysupervisionTreatmentGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/dailysupervision/treatment',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 查询是否立案处理
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementDailysupervisionWhethercaseGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/dailysupervision/whethercase',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 导出审批事件列表查询数据
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementDataExportExportApprovalAllEventListGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/dataExport/exportApprovalAllEventList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 导出审批事项完成情况统计报表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementDataExportExportCompletionOfApprovalMattersGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/dataExport/exportCompletionOfApprovalMatters',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 导出审批事项完成情况统计报表-明细数据
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementDataExportExportCompletionOfApprovalMattersDetailGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/dataExport/exportCompletionOfApprovalMattersDetail',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据code获取用户信息
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementBaseDataInitGetUserInfoByCodeGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/baseDataInit/getUserInfoByCode',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 根据token获取用户信息
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementBaseDataInitGetUserInfoByTokenGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/baseDataInit/getUserInfoByToken',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 获取道路数据
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementCityCommunityRoadListGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/cityCommunity/roadList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 指派队员
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementDailysupervisionAssignGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/dailysupervision/assign',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 队长审核
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementDailysupervisionExamineGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/dailysupervision/examine',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 重新交办
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementDailysupervisionHandoverGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/dailysupervision/handover',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 详情
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementDailysupervisionInfoGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/dailysupervision/info',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 日常监督管理列表查询
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementDailysupervisionListGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/dailysupervision/list',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 发送到期提醒-定期安检
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementAppOutdoorSendMessageGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/app/outdoor/sendMessage',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 发送续批提醒
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementAppOutdoorSendMessageByRenewGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/app/outdoor/sendMessageByRenew',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 历史数据删除
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementApprovalmanagementDeleteGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/approvalmanagement/delete',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 历史数据列表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementApprovalmanagementHistorylistGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/approvalmanagement/historylist',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 是否可撤销许可查询
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementApprovalmanagementJudgeGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/approvalmanagement/judge',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 许可列表查询
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementApprovalmanagementLicenselistGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/approvalmanagement/licenselist',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 撤销许可任务交办
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementApprovalmanagementRevokePost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/approvalmanagement/revoke',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 根据code获取token
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementBaseDataInitGetTokenByCodeGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/baseDataInit/getTokenByCode',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 状态变更
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementAppOutdoorChangeStatusGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/app/outdoor/changeStatus',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 审批类型下拉接口
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementAppOutdoorEventTypeGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/app/outdoor/eventType',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 许可列表
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementAppOutdoorGetLicenseListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/app/outdoor/getLicenseList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

/**
 * 查询关联事件
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementAppOutdoorGetLinkGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/app/outdoor/getLink',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 获取详情现场效果图列表
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementAppOutdoorGetPictureListGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/app/outdoor/getPictureList',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 详情
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementAppOutdoorInfoGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/app/outdoor/info',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 列表查询
 * @params params 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementAppOutdoorListGet(params, opts = {}) {
  return instance({
    method: 'get',
    url: '/citymanagement/app/outdoor/list',
    opts: Object.assign({ params }, opts)
  })
}

/**
 * 材料管理查询
 * @params data 业务参数
 * @params opts 请求参数配置，可空
 */
function citymanagementMaterialManagementGetEnclosureEventPageListPost(data, opts = {}) {
  return instance({
    method: 'post',
    url: '/citymanagement/MaterialManagement/getEnclosureEventPageList',
    opts: Object.assign({ headers: { 'Content-Type': 'application/json;charset=UTF-8' }}, { data }, opts)
  })
}

export {
  citymanagementV1SysUserImportUserGet,
  citymanagementV1SysUserImportUserPost,
  citymanagementV1SysUserQueryGet,
  citymanagementV1SysUserQueryPost,
  citymanagementV1SysUserQueryNoPagedGet,
  citymanagementV1SysUserQueryNoPagedPost,
  citymanagementV1SysUserResetPasswordGet,
  citymanagementV1SysUserResetPasswordPost,
  citymanagementV1SysUserSaveAndUpdatePost,
  citymanagementV1SysUserUpdatePost,
  citymanagementV1SysUserGetDataAuthByUserIdPost,
  citymanagementV1SysUserGetFunctionListByRoleIdGet,
  citymanagementV1SysUserGetFunctionListByRoleIdPost,
  citymanagementV1SysUserGetImportUserListByDeptIdGet,
  citymanagementV1SysUserGetImportUserListByDeptIdPost,
  citymanagementV1SysUserGetProjectUserListGet,
  citymanagementV1SysUserGetProjectUserListPost,
  citymanagementV1SysUserGetUserListByDeptIdGet,
  citymanagementV1SysUserGetUserListByDeptIdPost,
  citymanagementV1SysUserAssignUserRolesPost,
  citymanagementV1SysUserDeletePost,
  citymanagementV1SysUserDeleteListPost,
  citymanagementV1SysUserFindByIdGet,
  citymanagementV1SysUserFindByIdPost,
  citymanagementV1SysUserFindByUserNoGet,
  citymanagementV1SysUserFindRoleListByUserIdGet,
  citymanagementV1SysUserFindRoleListByUserIdPost,
  citymanagementV1SysUserGetDataAuthByUserIdGet,
  citymanagementV1SysRoleQueryGet,
  citymanagementV1SysRoleQueryPost,
  citymanagementV1SysRoleSaveAndUpdatePost,
  citymanagementV1SysRoleUpdatePost,
  citymanagementV1SysUserAddPost,
  citymanagementV1SysUserAssignDataAuthGet,
  citymanagementV1SysUserAssignDataAuthPost,
  citymanagementV1SysUserAssignUserRolesGet,
  citymanagementV1SysRoleFindAllFunNodeTreeGet,
  citymanagementV1SysRoleFindAllFunNodeTreePost,
  citymanagementV1SysRoleFindByIdGet,
  citymanagementV1SysRoleFindByIdPost,
  citymanagementV1SysRoleFindUsersByIdPost,
  citymanagementV1SysRoleGetUserListByDeptIdGet,
  citymanagementV1SysRoleGetUserListByDeptIdPost,
  citymanagementV1SysRoleGrantFunctionPost,
  citymanagementV1SysRoleGrantRoleToUsersPost,
  citymanagementV1SysProjectcategoryFindNameByIdGet,
  citymanagementV1SysProjectcategoryFindNameByIdPost,
  citymanagementV1SysProjectcategoryFindNextChildNodeTreeGet,
  citymanagementV1SysProjectcategoryFindNextChildNodeTreePost,
  citymanagementV1SysProjectcategoryQueryGet,
  citymanagementV1SysProjectcategoryQueryPost,
  citymanagementV1SysProjectcategoryUpdatePost,
  citymanagementV1SysRoleAddPost,
  citymanagementV1SysRoleDeletePost,
  citymanagementV1SysRoleDeleteListPost,
  citymanagementV1SysProjectQueryPost,
  citymanagementV1SysProjectUpdatePost,
  citymanagementV1SysProjectcategoryAddPost,
  citymanagementV1SysProjectcategoryDeletePost,
  citymanagementV1SysProjectcategoryDeleteListPost,
  citymanagementV1SysProjectcategoryDeleteNodePost,
  citymanagementV1SysProjectcategoryDeleteNodeListPost,
  citymanagementV1SysProjectcategoryFindByIdGet,
  citymanagementV1SysProjectcategoryFindByIdPost,
  citymanagementV1SysParameterSaveAndUpdatePost,
  citymanagementV1SysParameterSyncGet,
  citymanagementV1SysParameterSyncPost,
  citymanagementV1SysParameterUpdatePost,
  citymanagementV1SysProjectAddPost,
  citymanagementV1SysProjectDeletePost,
  citymanagementV1SysProjectDeleteListPost,
  citymanagementV1SysProjectFindByIdGet,
  citymanagementV1SysProjectFindByIdPost,
  citymanagementV1SysProjectQueryGet,
  citymanagementV1SysLogonlogSaveAndUpdatePost,
  citymanagementV1SysLogonlogUpdatePost,
  citymanagementV1SysParameterAddPost,
  citymanagementV1SysParameterDeletePost,
  citymanagementV1SysParameterDeleteListPost,
  citymanagementV1SysParameterFindByIdGet,
  citymanagementV1SysParameterFindByIdPost,
  citymanagementV1SysParameterQueryGet,
  citymanagementV1SysParameterQueryPost,
  citymanagementV1SysLogonlogAddPost,
  citymanagementV1SysLogonlogDeletePost,
  citymanagementV1SysLogonlogDeleteListPost,
  citymanagementV1SysLogonlogExportExcelGet,
  citymanagementV1SysLogonlogExportExcelPost,
  citymanagementV1SysLogonlogFindByIdGet,
  citymanagementV1SysLogonlogFindByIdPost,
  citymanagementV1SysLogonlogQueryGet,
  citymanagementV1SysLogonlogQueryPost,
  citymanagementV1SysGroupDeleteNodeListPost,
  citymanagementV1SysGroupFindByIdGet,
  citymanagementV1SysGroupFindByIdPost,
  citymanagementV1SysGroupFindNextChildNodeTreeGet,
  citymanagementV1SysGroupFindNextChildNodeTreePost,
  citymanagementV1SysGroupQueryGet,
  citymanagementV1SysGroupQueryPost,
  citymanagementV1SysGroupSaveAndUpdatePost,
  citymanagementV1SysGroupUpdatePost,
  citymanagementV1SysFunctionFindNextChildNodeTreeGet,
  citymanagementV1SysFunctionFindNextChildNodeTreePost,
  citymanagementV1SysFunctionQueryGet,
  citymanagementV1SysFunctionQueryPost,
  citymanagementV1SysFunctionSaveAndUpdatePost,
  citymanagementV1SysFunctionUpdatePost,
  citymanagementV1SysGroupAddPost,
  citymanagementV1SysGroupDeletePost,
  citymanagementV1SysGroupDeleteListPost,
  citymanagementV1SysGroupDeleteNodePost,
  citymanagementV1SysFunctionAddPost,
  citymanagementV1SysFunctionDeletePost,
  citymanagementV1SysFunctionDeleteListPost,
  citymanagementV1SysFunctionDeleteNodePost,
  citymanagementV1SysFunctionDeleteNodeListPost,
  citymanagementV1SysFunctionFindByIdGet,
  citymanagementV1SysFunctionFindByIdPost,
  citymanagementV1SysErrorlogFindByIdGet,
  citymanagementV1SysErrorlogFindByIdPost,
  citymanagementV1SysErrorlogQueryGet,
  citymanagementV1SysErrorlogQueryPost,
  citymanagementV1SysErrorlogSaveAndUpdatePost,
  citymanagementV1SysErrorlogUpdatePost,
  citymanagementV1SysFindpasswordQueryGet,
  citymanagementV1SysFindpasswordQueryPost,
  citymanagementV1SysFindpasswordStartPost,
  citymanagementV1SysFindpasswordUpdatePost,
  citymanagementV1SysDistrictFindNextChildNodeTreePost,
  citymanagementV1SysDistrictQueryGet,
  citymanagementV1SysDistrictQueryPost,
  citymanagementV1SysDistrictSaveAndUpdatePost,
  citymanagementV1SysDistrictUpdatePost,
  citymanagementV1SysErrorlogAddPost,
  citymanagementV1SysErrorlogDeletePost,
  citymanagementV1SysErrorlogDeleteListPost,
  citymanagementV1SysErrorlogExportExcelGet,
  citymanagementV1SysErrorlogExportExcelPost,
  citymanagementV1SysDeptmentSaveAndUpdatePost,
  citymanagementV1SysDeptmentUpdatePost,
  citymanagementV1SysDistrictAddPost,
  citymanagementV1SysDistrictDeletePost,
  citymanagementV1SysDistrictDeleteListPost,
  citymanagementV1SysDistrictDeleteNodePost,
  citymanagementV1SysDistrictDeleteNodeListPost,
  citymanagementV1SysDistrictFindByIdGet,
  citymanagementV1SysDistrictFindByIdPost,
  citymanagementV1SysDistrictFindNextChildNodeTreeGet,
  citymanagementV1SysDeptmentDeleteListPost,
  citymanagementV1SysDeptmentDeleteNodePost,
  citymanagementV1SysDeptmentDeleteNodeListPost,
  citymanagementV1SysDeptmentFindByIdGet,
  citymanagementV1SysDeptmentFindByIdPost,
  citymanagementV1SysDeptmentFindNextChildNodeTreeGet,
  citymanagementV1SysDeptmentFindNextChildNodeTreePost,
  citymanagementV1SysDeptmentImportDeptmentPost,
  citymanagementV1SysDeptmentQueryGet,
  citymanagementV1SysDeptmentQueryPost,
  citymanagementV1SysConfigcodeFindByIdGet,
  citymanagementV1SysConfigcodeFindByIdPost,
  citymanagementV1SysConfigcodeQueryGet,
  citymanagementV1SysConfigcodeQueryPost,
  citymanagementV1SysConfigcodeSaveAndUpdatePost,
  citymanagementV1SysConfigcodeSyncGet,
  citymanagementV1SysConfigcodeSyncPost,
  citymanagementV1SysConfigcodeUpdatePost,
  citymanagementV1SysDeptmentAddPost,
  citymanagementV1SysDeptmentDeletePost,
  citymanagementV1SysCodedefDeletePost,
  citymanagementV1SysCodedefDeleteListPost,
  citymanagementV1SysCodedefFindByIdGet,
  citymanagementV1SysCodedefFindByIdPost,
  citymanagementV1SysCodedefQueryGet,
  citymanagementV1SysCodedefQueryPost,
  citymanagementV1SysCodedefUpdatePost,
  citymanagementV1SysConfigcodeAddPost,
  citymanagementV1SysConfigcodeDeletePost,
  citymanagementV1SysConfigcodeDeleteListPost,
  citymanagementV1SysCodeQueryPost,
  citymanagementV1SysCodeSaveAndUpdatePost,
  citymanagementV1SysCodeSyncGet,
  citymanagementV1SysCodeSyncPost,
  citymanagementV1SysCodeUpdatePost,
  citymanagementV1SysCodedefAddPost,
  citymanagementV1SysBizlogQueryGet,
  citymanagementV1SysBizlogQueryPost,
  citymanagementV1SysBizlogSaveAndUpdatePost,
  citymanagementV1SysBizlogUpdatePost,
  citymanagementV1SysCodeAddPost,
  citymanagementV1SysCodeDeletePost,
  citymanagementV1SysCodeDeleteListPost,
  citymanagementV1SysCodeFindByIdGet,
  citymanagementV1SysCodeFindByIdPost,
  citymanagementV1SysCodeQueryGet,
  citymanagementV1SysBizlogExportExcelPost,
  citymanagementV1SysBizlogFindByIdGet,
  citymanagementV1SysBizlogFindByIdPost,
  citymanagementV1SysApicalldetailFindByIdPost,
  citymanagementV1SysApicalldetailQueryGet,
  citymanagementV1SysApicalldetailUpdatePost,
  citymanagementV1SysBizlogAddPost,
  citymanagementV1SysBizlogDeletePost,
  citymanagementV1SysBizlogDeleteListPost,
  citymanagementV1SysBizlogExportExcelGet,
  citymanagementV1SecurityLogoutGet,
  citymanagementV1SecurityLogoutPost,
  citymanagementV1SecurityReLogonPost,
  citymanagementV1SecurityResetPasswordPost,
  citymanagementV1SecuritySelectIdentityPost,
  citymanagementV1SecurityUpdateAvatarPost,
  citymanagementV1SysApicalldetailAddPost,
  citymanagementV1SysApicalldetailDeletePost,
  citymanagementV1SysApicalldetailDeleteListPost,
  citymanagementV1SysApicalldetailFindByIdGet,
  citymanagementV1SecurityChangePasswordPost,
  citymanagementV1SecurityChangeThemePost,
  citymanagementV1SecurityCheckGet,
  citymanagementV1SecurityCheckPost,
  citymanagementV1SecurityFindPasswordPost,
  citymanagementV1SecurityGetCurrentUserInfoGet,
  citymanagementV1SecurityGetCurrentUserInfoPost,
  citymanagementV1SecurityLogonGet,
  citymanagementV1SecurityLogonPost,
  citymanagementV1MessageUsergroupGetUserGroupListPagedPost,
  citymanagementV1MessageUsergroupGetUserListByUgIdPost,
  citymanagementV1MessageUsergroupGetUserListByUgIdPagedPost,
  citymanagementV1MessageUsergroupQueryGet,
  citymanagementV1MessageUsergroupQueryPost,
  citymanagementV1MessageUsergroupUpdatePost,
  citymanagementV1RandomCodeCheckPost,
  citymanagementV1RandomCodeGenerateGet,
  citymanagementV1RandomCodeGeneratePost,
  citymanagementV1SecurityAuthPost,
  citymanagementV1FileUploadFileToPathPost,
  citymanagementV1MessageUsergroupAddPost,
  citymanagementV1MessageUsergroupDeletePost,
  citymanagementV1MessageUsergroupDeleteListPost,
  citymanagementV1MessageUsergroupFindByIdGet,
  citymanagementV1MessageUsergroupFindByIdPost,
  citymanagementV1MessageUsergroupGetUserGroupListGet,
  citymanagementV1MessageUsergroupGetUserGroupListPagedGet,
  citymanagementV1DataProviderImportUsersDelete,
  citymanagementV1DataProviderImportUsersOptions,
  citymanagementV1DataProviderImportUsersPatch,
  citymanagementV1FileDeleteFileGet,
  citymanagementV1FileDownloadGet,
  citymanagementV1FileGetFileListByPathGet,
  citymanagementV1FileGetFileUrlGet,
  citymanagementV1FileMultipleFileUploadsPost,
  citymanagementV1FileNormalUploadPost,
  citymanagementV1DataProviderGetUserNoAndNameByGroupIdOptions,
  citymanagementV1DataProviderGetUserNoAndNameByGroupIdPatch,
  citymanagementV1DataProviderImportUsersGet,
  citymanagementV1DataProviderImportUsersHead,
  citymanagementV1DataProviderImportUsersPost,
  citymanagementV1DataProviderImportUsersPut,
  citymanagementV1DataProviderGetUserNoAndNameByGroupIdPut,
  citymanagementV1DataProviderGetUserNoAndNameByGroupIdDelete,
  citymanagementV1DataProviderGetUserNoAndNamePut,
  citymanagementV1DataProviderGetUserNoAndNameDelete,
  citymanagementV1DataProviderGetUserNoAndNameOptions,
  citymanagementV1DataProviderGetUserNoAndNamePatch,
  citymanagementV1DataProviderGetUserNoAndNameByGroupIdGet,
  citymanagementV1DataProviderGetUserNoAndNameByGroupIdHead,
  citymanagementV1DataProviderGetUserNoAndNameByGroupIdPost,
  citymanagementV1DataProviderGetUserNameByGroupIdDelete,
  citymanagementV1DataProviderGetUserNameByGroupIdOptions,
  citymanagementV1DataProviderGetUserNameByGroupIdPatch,
  citymanagementV1DataProviderGetUserNoAndNameGet,
  citymanagementV1DataProviderGetUserNoAndNameHead,
  citymanagementV1DataProviderGetUserNoAndNamePost,
  citymanagementV1DataProviderGetUserNameByGroupIdHead,
  citymanagementV1DataProviderGetUserNameByGroupIdPost,
  citymanagementV1DataProviderGetUserNameByGroupIdPut,
  citymanagementV1DataProviderGetUserNameGet,
  citymanagementV1DataProviderGetUserNameHead,
  citymanagementV1DataProviderGetUserNamePost,
  citymanagementV1DataProviderGetUserNamePut,
  citymanagementV1DataProviderGetUserNameDelete,
  citymanagementV1DataProviderGetUserNameOptions,
  citymanagementV1DataProviderGetUserNamePatch,
  citymanagementV1DataProviderGetUserNameByGroupIdGet,
  citymanagementV1DataProviderGetProjectListByUserIdPost,
  citymanagementV1DataProviderGetUserByDeptIdGet,
  citymanagementV1DataProviderGetUserByDeptIdHead,
  citymanagementV1DataProviderGetUserByDeptIdPost,
  citymanagementV1DataProviderGetUserByDeptIdPut,
  citymanagementV1DataProviderGetUserByDeptIdDelete,
  citymanagementV1DataProviderGetUserByDeptIdOptions,
  citymanagementV1DataProviderGetUserByDeptIdPatch,
  citymanagementV1DataProviderGetParameterValueHead,
  citymanagementV1DataProviderGetParameterValuePost,
  citymanagementV1DataProviderGetParameterValuePut,
  citymanagementV1DataProviderGetParameterValueDelete,
  citymanagementV1DataProviderGetParameterValueOptions,
  citymanagementV1DataProviderGetParameterValuePatch,
  citymanagementV1DataProviderGetProjectListByUserIdGet,
  citymanagementV1DataProviderGetNextCodeGet,
  citymanagementV1DataProviderGetNextValGet,
  citymanagementV1DataProviderGetParameterValueGet,
  citymanagementV1DataProviderGetImportDeptmentTreeListHead,
  citymanagementV1DataProviderGetImportDeptmentTreeListPost,
  citymanagementV1DataProviderGetImportDeptmentTreeListPut,
  citymanagementV1DataProviderGetImportDeptmentTreeListDelete,
  citymanagementV1DataProviderGetImportDeptmentTreeListOptions,
  citymanagementV1DataProviderGetImportDeptmentTreeListPatch,
  citymanagementV1DataProviderGetGroupTreeListGet,
  citymanagementV1DataProviderGetGroupTreeListHead,
  citymanagementV1DataProviderGetGroupTreeListPost,
  citymanagementV1DataProviderGetGroupTreeListPut,
  citymanagementV1DataProviderGetGroupTreeListDelete,
  citymanagementV1DataProviderGetGroupTreeListOptions,
  citymanagementV1DataProviderGetGroupTreeListPatch,
  citymanagementV1DataProviderGetImportDeptmentTreeListGet,
  citymanagementV1DataProviderGetGroupIdPatch,
  citymanagementV1DataProviderGetGroupNameGet,
  citymanagementV1DataProviderGetGroupNameHead,
  citymanagementV1DataProviderGetGroupNamePost,
  citymanagementV1DataProviderGetGroupNamePut,
  citymanagementV1DataProviderGetGroupNameDelete,
  citymanagementV1DataProviderGetGroupNameOptions,
  citymanagementV1DataProviderGetGroupNamePatch,
  citymanagementV1DataProviderGetFunNameOptions,
  citymanagementV1DataProviderGetFunNamePatch,
  citymanagementV1DataProviderGetGroupIdGet,
  citymanagementV1DataProviderGetGroupIdHead,
  citymanagementV1DataProviderGetGroupIdPost,
  citymanagementV1DataProviderGetGroupIdPut,
  citymanagementV1DataProviderGetGroupIdDelete,
  citymanagementV1DataProviderGetGroupIdOptions,
  citymanagementV1DataProviderGetDeptmentTreeListPatch,
  citymanagementV1DataProviderGetFunNameGet,
  citymanagementV1DataProviderGetFunNameHead,
  citymanagementV1DataProviderGetFunNamePost,
  citymanagementV1DataProviderGetFunNamePut,
  citymanagementV1DataProviderGetFunNameDelete,
  citymanagementV1DataProviderGetDeptmentListOptions,
  citymanagementV1DataProviderGetDeptmentListPatch,
  citymanagementV1DataProviderGetDeptmentTreeListGet,
  citymanagementV1DataProviderGetDeptmentTreeListHead,
  citymanagementV1DataProviderGetDeptmentTreeListPost,
  citymanagementV1DataProviderGetDeptmentTreeListPut,
  citymanagementV1DataProviderGetDeptmentTreeListDelete,
  citymanagementV1DataProviderGetDeptmentTreeListOptions,
  citymanagementV1DataProviderGetDeptmentByGroupIdDelete,
  citymanagementV1DataProviderGetDeptmentByGroupIdOptions,
  citymanagementV1DataProviderGetDeptmentByGroupIdPatch,
  citymanagementV1DataProviderGetDeptmentListGet,
  citymanagementV1DataProviderGetDeptmentListHead,
  citymanagementV1DataProviderGetDeptmentListPost,
  citymanagementV1DataProviderGetDeptmentListPut,
  citymanagementV1DataProviderGetDeptmentListDelete,
  citymanagementV1DataProviderGetDeptNamePut,
  citymanagementV1DataProviderGetDeptNameDelete,
  citymanagementV1DataProviderGetDeptNameOptions,
  citymanagementV1DataProviderGetDeptNamePatch,
  citymanagementV1DataProviderGetDeptmentByGroupIdGet,
  citymanagementV1DataProviderGetDeptmentByGroupIdHead,
  citymanagementV1DataProviderGetDeptmentByGroupIdPost,
  citymanagementV1DataProviderGetDeptmentByGroupIdPut,
  citymanagementV1DataProviderGetConfigCodeListPost,
  citymanagementV1DataProviderGetConfigCodeListPut,
  citymanagementV1DataProviderGetConfigCodeListDelete,
  citymanagementV1DataProviderGetConfigCodeListOptions,
  citymanagementV1DataProviderGetConfigCodeListPatch,
  citymanagementV1DataProviderGetDeptNameGet,
  citymanagementV1DataProviderGetDeptNameHead,
  citymanagementV1DataProviderGetDeptNamePost,
  citymanagementV1DataProviderGetCodeValueHead,
  citymanagementV1DataProviderGetCodeValuePost,
  citymanagementV1DataProviderGetCodeValuePut,
  citymanagementV1DataProviderGetCodeValueDelete,
  citymanagementV1DataProviderGetCodeValueOptions,
  citymanagementV1DataProviderGetCodeValuePatch,
  citymanagementV1DataProviderGetConfigCodeListGet,
  citymanagementV1DataProviderGetConfigCodeListHead,
  citymanagementV1DataProviderGetCodeTypeListGet,
  citymanagementV1DataProviderGetCodeTypeListHead,
  citymanagementV1DataProviderGetCodeTypeListPost,
  citymanagementV1DataProviderGetCodeTypeListPut,
  citymanagementV1DataProviderGetCodeTypeListDelete,
  citymanagementV1DataProviderGetCodeTypeListOptions,
  citymanagementV1DataProviderGetCodeTypeListPatch,
  citymanagementV1DataProviderGetCodeValueGet,
  citymanagementV1DataProviderGetCodeNamePut,
  citymanagementV1DataProviderGetCodeNameDelete,
  citymanagementV1DataProviderGetCodeNameOptions,
  citymanagementV1DataProviderGetCodeNamePatch,
  citymanagementV1DataProviderGetCodeListDelete,
  citymanagementV1DataProviderGetCodeListOptions,
  citymanagementV1DataProviderGetCodeListPatch,
  citymanagementV1DataProviderGetCodeNameGet,
  citymanagementV1DataProviderGetCodeNameHead,
  citymanagementV1DataProviderGetCodeNamePost,
  citymanagementTestSendMqttOptions,
  citymanagementTestSendMqttPatch,
  citymanagementUserGetroleGet,
  citymanagementUserLoginGet,
  citymanagementV1DataProviderGetCodeListGet,
  citymanagementV1DataProviderGetCodeListHead,
  citymanagementV1DataProviderGetCodeListPost,
  citymanagementV1DataProviderGetCodeListPut,
  citymanagementTestAddTopicOptions,
  citymanagementTestAddTopicPatch,
  citymanagementTestSendMqttGet,
  citymanagementTestSendMqttHead,
  citymanagementTestSendMqttPost,
  citymanagementTestSendMqttPut,
  citymanagementTestSendMqttDelete,
  citymanagementStatisticalRegeneratePermissionStatisticsGet,
  citymanagementTaskExportGet,
  citymanagementTaskSafetyGet,
  citymanagementTestAddTopicGet,
  citymanagementTestAddTopicHead,
  citymanagementTestAddTopicPost,
  citymanagementTestAddTopicPut,
  citymanagementTestAddTopicDelete,
  citymanagementStatisticalCompletionOfIntegrativeDetailGet,
  citymanagementStatisticalCompletionOfRectificationGet,
  citymanagementStatisticalCompletionOfRectificationDetailGet,
  citymanagementStatisticalCompletionOfSquadronGet,
  citymanagementStatisticalCompletionOfSquadronDetailGet,
  citymanagementStatisticalIntegrativeStatisticsGet,
  citymanagementStatisticalPermissionStatisticsGet,
  citymanagementStatisticalPermissionStatisticsDetailGet,
  citymanagementProcessUdpateEnclosuresPost,
  citymanagementProcessUpdatePost,
  citymanagementProcessWithdrawGet,
  citymanagementStatisticalCompletionOfApprovalMattersGet,
  citymanagementStatisticalCompletionOfApprovalMattersDetailGet,
  citymanagementStatisticalCompletionOfFeedbackPeriodGet,
  citymanagementStatisticalCompletionOfFeedbackPeriodDetailGet,
  citymanagementProcessReturnAssignGet,
  citymanagementProcessReturnPlanGet,
  citymanagementProcessReviewGet,
  citymanagementProcessScenePost,
  citymanagementProcessSquadronListPost,
  citymanagementProcessSquadronReturnGet,
  citymanagementProcessTeamListGet,
  citymanagementProcessTransferGet,
  citymanagementProcessMemberListGet,
  citymanagementProcessRecallGet,
  citymanagementProcessExportReportPost,
  citymanagementProcessExpressionsGet,
  citymanagementProcessGetByTypeGet,
  citymanagementProcessGetCommpanyByUnicodeGet,
  citymanagementProcessGetHnadOverResultGet,
  citymanagementProcessGetLinkEventGet,
  citymanagementProcessGetSceneDetailGet,
  citymanagementProcessLicenseDetailsGet,
  citymanagementProcessApprovalAllEventListPost,
  citymanagementProcessApprovalEventListPost,
  citymanagementProcessApprovedGet,
  citymanagementProcessDeleteEventGet,
  citymanagementProcessDetailsGet,
  citymanagementProcessEventInsertPost,
  citymanagementPlatformManagementRequestIdiomSettingGet,
  citymanagementPlatformManagementRequestIdiomTreeGet,
  citymanagementPlatformManagementRequestNoticeTimeGet,
  citymanagementPlatformManagementRequireApprovalManagementGet,
  citymanagementPlatformManagementUpdateDailySupervisionAutomaticPost,
  citymanagementPlatformManagementUpdateDailySupervisionContentPost,
  citymanagementProcessAppoingMemberGet,
  citymanagementProcessApprovalGet,
  citymanagementPlatformManagementDailySupervisionAutomaticLeafInfoGet,
  citymanagementPlatformManagementDailySupervisionAutomaticTreeGet,
  citymanagementPlatformManagementDailySupervisionContentGet,
  citymanagementPlatformManagementGetDayPost,
  citymanagementPlatformManagementGetDeadlineByTypeGet,
  citymanagementPlatformManagementRecApprovalDeleteGet,
  citymanagementPlatformManagementRecApprovalManagementPost,
  citymanagementPlatformManagementRecApprovalUpdatePost,
  citymanagementPlatformManagementRequestIdiomDeleteGet,
  citymanagementDataExportExportPermissionStatisticsGet,
  citymanagementDataExportExportPermissionStatisticsDetailGet,
  citymanagementFileManagementFileUploadPost,
  citymanagementFileManagementQueryFileInfoGet,
  citymanagementLawEnforcenmentListGet,
  citymanagementLawEnforcenmentTaskListGet,
  citymanagementPlatformManagementBusinessIdiomInsertPost,
  citymanagementPlatformManagementBusinessIdiomUpdateGet,
  citymanagementDataExportExportCompletionOfFeedbackPeriodGet,
  citymanagementDataExportExportCompletionOfFeedbackPeriodDetailGet,
  citymanagementDataExportExportCompletionOfIntegrativeDetailGet,
  citymanagementDataExportExportCompletionOfRectificationGet,
  citymanagementDataExportExportCompletionOfRectificationDetailGet,
  citymanagementDataExportExportCompletionOfSquadronGet,
  citymanagementDataExportExportCompletionOfSquadronDetailGet,
  citymanagementDataExportExportIntegrativeStatisticsGet,
  citymanagementDailysupervisionReturnGet,
  citymanagementDailysupervisionRevokeGet,
  citymanagementDailysupervisionTransferGet,
  citymanagementDailysupervisionTreatmentGet,
  citymanagementDailysupervisionWhethercaseGet,
  citymanagementDataExportExportApprovalAllEventListGet,
  citymanagementDataExportExportCompletionOfApprovalMattersGet,
  citymanagementDataExportExportCompletionOfApprovalMattersDetailGet,
  citymanagementBaseDataInitGetUserInfoByCodeGet,
  citymanagementBaseDataInitGetUserInfoByTokenGet,
  citymanagementCityCommunityRoadListGet,
  citymanagementDailysupervisionAssignGet,
  citymanagementDailysupervisionExamineGet,
  citymanagementDailysupervisionHandoverGet,
  citymanagementDailysupervisionInfoGet,
  citymanagementDailysupervisionListGet,
  citymanagementAppOutdoorSendMessageGet,
  citymanagementAppOutdoorSendMessageByRenewGet,
  citymanagementApprovalmanagementDeleteGet,
  citymanagementApprovalmanagementHistorylistGet,
  citymanagementApprovalmanagementJudgeGet,
  citymanagementApprovalmanagementLicenselistGet,
  citymanagementApprovalmanagementRevokePost,
  citymanagementBaseDataInitGetTokenByCodeGet,
  citymanagementAppOutdoorChangeStatusGet,
  citymanagementAppOutdoorEventTypeGet,
  citymanagementAppOutdoorGetLicenseListPost,
  citymanagementAppOutdoorGetLinkGet,
  citymanagementAppOutdoorGetPictureListGet,
  citymanagementAppOutdoorInfoGet,
  citymanagementAppOutdoorListGet,
  citymanagementMaterialManagementGetEnclosureEventPageListPost
}
