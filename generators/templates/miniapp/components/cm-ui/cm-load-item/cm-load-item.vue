<!--
 * @Author: tao.xie
 * @CreateTime: 2021-5-8 09:40:23
 * @Description: 单块数据加载组件，展示加载中，无数据，加载失败，加载成功 
 -->
<template>
	<view class="cm-load-item-wrapper">
		<!-- 加载中 -->
		<view v-if="state === stateEnum.LOADING" class="flex-v flex-vc loading-wrapper" :style="emptyStyle">
			<u-loading size="40" mode="circle" :margin-top="marginTop"></u-loading>
			<text>数据加载中...</text>
		</view>

		<!-- 获取失败 -->
		<view v-else-if="state === stateEnum.ERROR" class="flex-v flex-vc empty-wrapper">
			<slot name="error">
				<u-empty mode="wifi" text="网络请求失败" :margin-top="marginTop"></u-empty>
				<tui-button v-if="needReload" width="200rpx" height="64rpx" :plain="true" shape="circle" :size="26" margin="20rpx 0 0 0" @click="_emitGetData">重新加载</tui-button>
			</slot>
		</view>

		<!-- 无数据 -->
		<view v-else-if="state === stateEnum.EMPTY" class="flex-v flex-vc empty-wrapper">
			<slot name="empty"><u-empty :mode="emptyMode" :text="emptyText" :margin-top="marginTop"></u-empty></slot>
		</view>

		<!-- 有数据展示 -->
		<view v-if="state === stateEnum.DATA" class="load-data" @click="_emitClick"><slot></slot></view>
	</view>
</template>

<script>
// 加载状态
const LOAD_STATE = {
	DATA: 'data', // 有数据
	EMPTY: 'empty', // 空数据
	ERROR: 'error', // 出错
	LOADING: 'loading' // 加载中
};
export default {
	name: 'cm-load-item',
	props: {
		// 默认展示的状态
		defaultState: {
			type: String,
			default: LOAD_STATE.LOADING
		},
		// 空数据模式
		emptyMode: {
			type: String,
			default: 'data'
		},
		// 空数据提示文字
		emptyText: {
			type: String,
			default: '暂无数据'
		},
		// 网络错误是否要重试，默认否
		needReload: {
			type: Boolean,
			default: false
		},
		// 错误和空数据的top
		marginTop: {
			type: [Number, String],
			default: 0
		}
	},
	data() {
		return {
			stateEnum: LOAD_STATE,
			// 当前展示状态
			state: this.defaultState
		};
	},
	computed: {
		emptyStyle() {
			return `margin-top:${this.marginTop}rpx`;
		}
	},
	methods: {
		_emitClick() {
			this.$emit('click');
		},
		_emitGetData() {
			this.$emit('getData', this.getData);
		},
		// 获取数据，可供外部使用
		getData(promise, reset = false) {
			if (!promise) return;
			if (reset === true) {
				this.state = LOAD_STATE.LOADING;
			}
			promise
				.then(hasData => {
					this.state = hasData ? LOAD_STATE.DATA : LOAD_STATE.EMPTY;
				})
				.catch(error => {
					// 只有把状态重置为加载中后获取失败才会展示失败模块
					if (this.state === LOAD_STATE.LOADING) {
						this.state = LOAD_STATE.ERROR;
					}
				});
		}
	}
};
</script>

<style lang="scss" scoped>
.cm-load-item-wrapper {
	/* 加载中 */
	.loading-wrapper {
		color: #cccccc;
		padding: 60rpx 0;

		text {
			padding-top: 20rpx;
		}
	}

	/* 空数据，错误 */
	.empty-wrapper {
		padding: 60rpx 0;
	}

	/* 正常展示 */
	.load-data {
		width: 100%;
	}
}
</style>
