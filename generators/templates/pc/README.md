# cm-admin-base

## 介绍

城管PC端管理端脚手架项目

## 文档相关
[cm-ui](http://10.12.107.126:7301)
[cm-lib](http://10.12.107.126:7303)
[easy-mock](http://10.12.107.126:7304)

## 优化点

- 集成easy-mock假数据平台
- plop模版代码生成脚手架及模版
- 首屏优化：开启公共库CDN加载、开启gzip
- layout：集成三中心统一layout布局

## Easy-Mock使用说明

- 从swagger在线文档中通过F12在控制台中下载并保存api-doc.json文件
- 登录Easy-Mock平台：http://10.12.107.126:7300，新建项目并在设置中导入api-doc.json即可同步swagger接口
- 在项目中根目录的.easymockrc中配置项目信息，其中id对应Easy-Mock平台中项目Project ID，name对应生成的api代码文件夹
- 全局安装easy-mock-cli， 运行命令`easymock init`，即可将api代码下载到对应的目录中
- 生成的代码中的config.js里可配置api请求环境，即 mock、dev、pre、prod
- easy-mock-cli生成的代码模版可自定义修改，目前项目中用的模版为`/easy-mock-template/hump-axios/`

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
