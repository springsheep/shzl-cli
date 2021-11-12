# cm-admin-base

## 介绍

- 城管PC端管理端脚手架项目，基于统一研发平台admin-base二次优化
- 从XXX项目YYY分支作为基点（如果需要的话）

## 改动点

- XXXXXX
- XXXXXX
- XXXXXX
- XXXXXX

## 优化点

- 集成easy-mock假数据平台
- plop模版代码生成脚手架及模版
- 首屏优化：开启公共库CDN加载、开启gzip
- XXXXXX
- XXXXXX
- XXXXXX
- XXXXXX

## 依赖包

- vue-cli 3.x
- vue
- vue-router
- vuex
- cui [帮助文档](http://10.12.102.194:8070/index.html#/zh-CN/installation)
- scss
- axios

## 代码结构

```text

├── build/                               // 构建目录
│   └── version.js                          // 版本信息脚本
│
├── docs/                                // 项目文档说明 
│
├── easy-mock-template/                  // easy-mock内建模版              
│
│
├── plop-templates/                      // plop内建模版              
│
├── public                               // vue-cli 静态页面模板目录
│   ├── favicon.ico                         // 站点图标
│   └── index.html                          // 站点主页模板
│
├── src/                                 // 源码目录
│   ├── main.js                             // 项目入口 js 文件
│   ├── permission.js                       // 进入路由权限判断
│   ├── App.vue                             // 入口页面组件
│   ├── api/                                // api 接口目录
│   │   ├── login.js                        // 封装 login 相关接口请求
│   │   └── ...
│   │
│   ├── assets/                             // 静态资源目录
│   ├── components/                         // 公共组件目录
│   │   ├── Tree                              // tree 视图业务组件目录
│   │   │   └── TreeRender.vue                // tree 操作菜单项渲染组件
│   │   ├── ScrollBar/                        // 左侧边栏滚动组件目录
│   │   │   └── index.vue                     // 左侧边栏滚动组件
│   │   ├── ScrollPane/                       // 顶部标签切换滚动组件目录
│   │   │   └── index.vue                     // 顶部标签切换滚动组件
│   │   └── SvgIcon/                          // svg icon 组件目录
│   │       └── index.vue                     // svg icon 组件
│   │
│   ├── icons/                              // icon 目录
│   │   ├── index.js                          // 全局注册 svg icon 组件
│   │   └── svg/                              // svg 文件目录
│   │       ├── example.svg
│   │       ├── ...
│   │
│   ├── router/                             // 路由目录
│   │   ├── index.js                          // 生成路由配置，并导出 router 实例
│   ├── store/                              // vuex
│   │   ├── index.js                         // 导出 vuex 实例
│   │   └── modules/                         // modules 目录
│   │       ├── app.js                         // app 模块
│   │       ├── user.js                        // user 模块
│   │       ├── tagsView.js                    // tagsView 模块
│   │       └── ...
│   │
│   ├── styles/                          // 样式目录
│   │   ├── cui.scss                        // 针对 cui 库样式
│   │   ├── index.scss                      // 一些全局样式
│   │   ├── mixin.scss                      // mixin
│   │   ├── sidebar.scss                    // 针对 sidebar 样式
│   │   ├── transition.scss                 // transition
│   │   └── variables.scss                  // 定义项目中使用的样式变量
│   │
│   ├── utils/                           // 工具函数目录
│   │   ├── auth.js                         // 操作 cookie 相关函数
│   │   ├── createRoutes.js                 // 根据目录文件生成路由配置函数
│   │   ├── index.js                        // 常规工具函数
│   │   ├── request.js                      // axios 二次封装
│   │   └── validate.js                     // 常见正则验证
│   │
│   └── views/                           // 页面目录
│
├── package.json                            // 项目依赖文件
├── .easymockrc                             // easymock配置文件
└── vue.config.js                           // 项目 vue webpack 配置文件

```

## 项目原型地址（如果有的话）

http://www.baidu.com

## 项目摹客地址（如果有的话）

http://www.baidu.com

## Easy-Mock使用说明

- 从swagger在线文档中通过F12在控制台中下载并保存api-doc.json文件
- 登录Easy-Mock平台：http://10.12.107.126:7300，新建项目并在设置中导入api-doc.json即可同步swagger接口
- 在项目中根目录的.easymockrc中配置项目信息，其中id对应Easy-Mock平台中项目Project ID，name对应生成的api代码文件夹
- 全局安装easy-mock-cli， 运行命令`easymock init`，即可将api代码下载到对应的目录中
- 生成的代码中的config.js里可配置api请求环境，即 mock、dev、pre、prod
- easy-mock-cli生成的代码模版可自定义修改，目前项目中用的模版为`/easy-mock-template/hump-axios/`

## plop前端代码生成小工具

plop是一个基于generator的前端代码构建cli，能够灵活的定义配置并生成代码模版

### 目前支持的生成代码类型：

- store
- view
- 后续扩展...

### 运行方式:

终端运行```plop```命令，按提示操作即可

## Project setup

```
npm install  
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 其他注意事项

- xxxx
- xxxx
- xxxx
- xxxx
