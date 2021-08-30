# 列表弹框组件

### 介绍

利用表单、表格、弹框封装的复合业务组件

### 使用场景

常用于集 列表、新增/编辑、详情这三种操作的页面。 可基于此组件再次封装，将新建、编辑、详情配置化（如果仅仅是基础的表单展现和编辑）

## 使用指南

下面列出几个典型页面的使用说明

- 主页面，需从`ListModalPage`继承而来，并注册各个业务子页面


- 列表页面，需混入`ListModalListMixins`，并根据实际情况调用混入方法实现业务

<demo-code>./demo/list-view.vue</demo-code>

- 新增页面，需混入`ListModalOtherMixins`，并根据实际情况调用混入方法实现业务

<demo-code>./demo/add-view.vue</demo-code>

- 编辑页面，需混入`ListModalOtherMixins`，并根据实际情况调用混入方法实现业务，其中上下文为`context`

<demo-code>./demo/edit-view.vue</demo-code>

## 混入函数说明

### ListModalList 列表业务混入函数

| 名称          | 说明     | 参数说明     | 参数类型  |
| ------------- | -------- | -------- |-------- |
_handleAdd | 处理新增 | modalTitle（默认`新增`） | _string_ |
_handleEdit | 处理编辑 | record, modalTitle（默认`编辑`） | _object_ _string_ |
_handleDetail | 处理详情 | record, modalTitle（默认`详情`） | _object_ _string_ |
_handleOther | 处理自定义 | record, modalTitle | _object_ _string_ |
_reset | 重置数据 | - | - |

### ListModalOther 其他业务混入函数

#### Method

| 名称          | 说明     | 参数说明     | 参数类型  |
| ------------- | -------- | -------- |-------- |
_backToRefresh | 返回列表，并刷新数据 | refresh（默认`true`） | _boolean_ |

#### Props

| 名称          | 说明     |    参数类型  |
| ------------- | -------- | -------- |
context | 上下文数据，一般是对应行数据，可能为空 | _object_ |
