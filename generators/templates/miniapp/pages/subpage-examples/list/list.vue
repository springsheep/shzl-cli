<template>
	<view>
		<cm-load-item :needReload="true" @getData="_getAddrList" ref="list">
			<!-- 列表数据展示 -->
			<view v-for="(item, index) in dataList">
				<view class="cell-wrapper">
					{{ index }}、列表数据{{ item }}
				</view>
			</view>
		</cm-load-item>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: []
			}
		},
		onReady() {
			this.$refs.list.getData(this._getAddrList(), true)
		},
		methods: {
			_getAddrList() {
				return new Promise(resolve => {
					setTimeout(() => {

						for (let i = 0; i < 10; i++) {
							this.dataList.push({
								addrId: i
							})
						}

						resolve(true)
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
