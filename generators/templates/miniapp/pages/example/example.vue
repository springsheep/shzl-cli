<template>
	<view>
		<u-button v-for="(item,index) in list" :key="index" @click="_push(item.pageName)">{{item.buttonName}}</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						buttonName: '表单',
						pageName: 'example-form'
					},
					{
						buttonName: '列表',
						pageName: 'example-list'
					},
					{
						buttonName: '下拉刷新',
						pageName: 'example-pull-to-refresh'
					},
					{
						buttonName: '地图',
						pageName: 'example-map'
					},
					{
						buttonName: '带搜索的地图',
						pageName: 'example-search-map'
					}
				]
			}
		},
		methods: {
			_push(name) {
				this.$cmRoute({
					name
				})
			}
		}
	}
</script>

<style>
	button {
		margin: 20rpx 0;
	}
</style>
