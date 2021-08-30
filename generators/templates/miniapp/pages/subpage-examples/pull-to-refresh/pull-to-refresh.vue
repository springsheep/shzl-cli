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
			getDataList(params) {
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
