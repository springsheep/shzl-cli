# 页面下拉刷新,上拉加载。同时支持以插槽的方式扩展空数据和异常的ui展示

## load-more-mixin 上下拉混入

### 使用方法
在 vue 中 javascript 代码块导入。
```javascript
import loadMoreMixin from '@/mixins/load-more-mixin.js';
export default {
	name: 'index-page',
	mixins: [loadMoreMixin],
	// ...
}
```
在 vue 中 template 中使用，需配合组件 e-load-list 使用。
其中 pageMode、 scrollTop 和 loadStatus 是混入中的参数，可直接使用。
```html
<view>
	<!-- 列表数据组件 -->
	<cm-load-list :mode="pageMode" :loadStatus="loadStatus" :scrollTop="scrollTop">
	</cm-load-list>
</view>
```

## cm-load-list 列表组件

### 使用方法
需配合load-more-mixin.js的混入使用，中 pageMode 和 scrollTop 是混入中的参数，可直接使用。
```html
<template>
	<view>
		<cm-load-list :mode="pageMode" :loadStatus="loadStatus" :scrollTop="scrollTop">
			<!-- 列表数据展示 -->
			<view v-for="(item, index) in dataList">
				<view class="cell-wrapper">
					{{ index }}、列表数据{{ item }}
				</view>
			</view>
		</cm-load-list>
	</view>
</template>

<script>
	import loadMoreMixin from '@/mixins/load-more-mixin.js'
	export default {
		mixins: [loadMoreMixin],
		data() {
			return {

			}
		},
		methods: {
			getDataList(padeIndex, pageSize) {
				return new Promise(resolve => {
					setTimeout(() => {
						const list = []
						for (let i = 0; i < 10; i++) {
							list.push({
								addrId: i
							})
						}
						resolve({
							list: list,
							count: 99
						})
					}, 1000)
				})
			}
		}
	}
</script>

<style>
	.cell-wrapper {
		height: 200rpx;
	}
</style>

```