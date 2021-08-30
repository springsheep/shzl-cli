<!--
 * @Author: tao.xie
 * @CreateTime: 2021-5-8 09:40:36
 * @Description: 上下拉加载数据的组件, 支持展示列表,空数据,网络错误
 -->
<template>
	<view class="cm-load-wrapper" v-if="!ignoreLoadMore">
		<!-- 返回顶部按钮-->
		<u-back-top :scrollTop="scrollTop"></u-back-top>
		<!-- 协议错误展示 wifi -->
		<slot v-if="isError" name="error">
			<u-empty mode="wifi" text="网络请求失败" margin-top="200"></u-empty>
		</slot>
		<!-- 空数据展示 -->
		<slot v-if="isEmpty" name="empty">
			<u-empty :mode="emptyMode" :text="emptyText" margin-top="200"></u-empty>
		</slot>
		<!-- 列表数据展示 -->
		<slot v-if="isList"></slot>
		<!-- 加载更多 -->
		<view v-if="showLoadMode" class="load-more-wrapper">
			<u-loadmore :status="loadStatus" :loadText="loadText" color="#aaa" fontSize="26" v-if="loadText">
			</u-loadmore>
		</view>
	</view>
</template>

<script>
	import {
		LOAD_MODE
	} from './cmLoadListType.js';

	export default {
		name: 'cm-load-list',
		props: {
			// 当前展示模式
			mode: {
				type: String,
				default: LOAD_MODE.LIST
			},
			// 加载更多状态
			loadStatus: {
				type: String,
				default: null
			},
			// 加载组件的文字
			loadText: {
				type: Object,
				default: () => {
					return {
						loadmore: '加载更多',
						loading: '正在加载...',
						nomore: '没有更多了'
					};
				}
			},
			// 页面滚动的scrollTop
			scrollTop: {
				type: Number,
				default: 0
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

			// 是否忽略上拉加载下一页的UI
			ignoreLoadMore: false
		},
		data() {
			return {};
		},
		computed: {
			isList() {
				return this.mode === LOAD_MODE.LIST;
			},
			isEmpty() {
				return this.mode === LOAD_MODE.EMPTY;
			},
			isError() {
				return this.mode === LOAD_MODE.ERROR;
			},
			showLoadMode() {

				// if (this.$props.ignoreLoadMore) {
				// 	return false
				// } else {
				// 	return this.isList || this.mode === null;
				// }

				return this.isList || this.mode === null;
			}
		}
	};
</script>

<style scoped lang="scss">
	.cm-load-wrapper {
		padding-top: 1rpx;

		.load-more-wrapper {
			margin: 30rpx 0;
			color: $uni-text-color-grey;
		}
	}
</style>
