# cm-miniapp-base

## 说明
城管二部小程序前端基础版本

## 文档
[easy-mock](http://10.12.107.126:7304)

## 技术栈
- vue
- uni-app
- scss
- uview

## 依赖
- uni-crazy-router：路由守卫
- uni-read-pages: 页面配置扩展
- uview-ui: uview-ui框架
- vuex-persist: vuex持久化
- easy-mock-cli: easy-mock

## 项目结构 
```text
├── api/
|   ├── config.js                        // api接入环境配置
|   ├── index.js                         // api整体导出
|   ├── util.js                          // api工具
│   └── mp-api                           // 模块api目录
│        ├──index.js                      // api函数封装
│        ├──instance.js                   // 模块配置
|   
├── common/                             // 公共资源目录 
│      └── css/                           // 公共css资源目录
│ 
├── components/                         // 公共组件目录
|      └── cm-ui/                         // 城管业务组件，该目录下的组件支持easycom组件模式
|           ├── cm-form/                    // 支持配置化的表单
|           ├── cm-load-item/               // 业务列表组件
|           ├── cm-load-list/               // 业务下拉列表组件
|           ├── cm-map/                     // 地图组件
|           ├── cm-search-map/              // 带搜索的地图组件
│
├── constants/                          // 项目内部模块常量、字段定义目录 
│
├── core/                               // 核心文件目录 
|    ├── bootstrap.js                      // 应用核心启动初始化函数
│
├── mixins/                             // 公共混入函数
|    ├── load-more-mixins.js               // 下拉列表组件混入函数
│
├── pages/                              // 页面代码目录 
│
├── router/                             // 路由 
│
├── static/                             // 静态文件目录 
│
├── store/                              // vuex目录 
|   ├── getters.js                        // 状态导出
|   ├── index.js                          //  入口
│   ├── modules/                          // 模块目录
|  
├── utils/                              // 工具类目录 
|    ├── auth.js              		      // 授权登录
|    ├── cmRoute.js                       // 二次封装的路由跳转工具
|    ├── dateFormat.js                    // 日期格式化
|    ├── getLocation.js                   // 定位工具
|    ├── request.js                       // 协议请求工具
|    ├── storage.js                       // 数据持久化工具
|    ├── uniAdapter.js                    // axios adapter适配函数
|    ├── wxservice.js                     // 微信服务
│
├── uview-ui/                           // uview-ui，为了支持h-builder代码提示，采用源码导入 
│
├── App.vue                            // 启动
├── main.js                            // 项目入口
├── manifest.json                      // 项目各平台配置文件
├── package.json                       // 项目依赖文件
├── pages.json                         // uni页面配置文件
├── uni.scss                           // 全局scss
├── vue.config.js                      // vue项目配置文件
```

## 运行方式
hbuilder菜单栏的运行或者控制台的运行按钮

## 相关文档
- [uniapp官方文档](https://uniapp.dcloud.io)
- [微信小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)
- [uview-ui官方文档](https://www.uviewui.com/components/intro.html)
- [uniapp easycom组件模式](https://uniapp.dcloud.io/collocation/pages?id=easycom)

## 摹客文档
- [点击查看](https://app.mockplus.cn/app/-K_rWiRdkWN/specs/design/Ko0dv2RePtBk)

## 注意事项
- uniapp 发布微信端小程序遵循主包最大为2M的限制，所以不建议将太大的静态资源打包在程序内，同时页面过多时建议分包。[相关文档](https://uniapp.dcloud.io/collocation/pages?id=pages)
- 微信小程序开发过程中需要添加开发人员，测试预览阶段需要添加体验人员。[相关文档](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/release.html#小程序的版本)
- 微信小程序上线需要设置服务器域名、上传下载域名及业务域名。[相关文档](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html#1.%20服务器域名配置)
- 如需接入微信小程序授权登录，需要将开发配置中的appid、appsecret发给后台开发进行对接。 [相关文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html)
- 发布体验版之后，体验人员需要点击右侧的按钮打开调试开关，才能忽略服务器域名及业务域名的校验，进行体验
- hbuilder菜单栏的运行和发行按钮，分别对应开发调试过程打包和发布生产过程打包
