<!--
 * @Author: tao.xie
 * @CreateTime: 2021-5-10 15:32:50
 * @Description: 带搜索输入框的地图组件 
 -->
<template>
	<view class="wrapper">
		<view class="input-wrapper flex-h flex-vc">
			<image src="/static/search.png" class="search-icon"></image>
			<view class="search-input" @click="_focus()">{{value||placeholder}}</view>
		</view>
		<cm-map ref="map" :width="width" :height="height"
			:showMoveToCurrentLocationControl="showMoveToCurrentLocationControl" :longitude="longitude"
			:latitude="latitude" :showLocation="showLocation" @updated="_delegateUpdatedEvent"></cm-map>
	</view>
</template>

<script>
	import CMMap from '../cm-map/cm-map.vue'
	export default {
		name: 'cm-search-map',
		props: {
			...CMMap.props,
			// 输入提示
			placeholder: {
				type: String,
				default: '当前位置/搜索位置',
				required: false
			},
			// 关键字，用于v-model
			value: {
				type: String,
				default: '',
				required: false
			}
		},
		data() {
			return {
				keyword: ''
			}
		},

		watch: {
			value: {
				handler(newVal) {
					this.$data.keyword = newVal
				},
				immediate: true
			}
		},
		methods: {
			/**
			 * 触发更新事件
			 */
			_delegateUpdatedEvent() {
				this.$emit('updated')
			},
			/**
			 * 输入框聚焦
			 */
			_focus() {
				this.$emit('focus')
			},
			/**
			 * 
			 * 移动地图的中心点到指定的经纬度
			 * 
			 * @param {Object} longitude
			 * @param {Object} latitude
			 */
			moveToLocation() {
				this.$refs.map && this.$refs.map.moveToLocation(...arguments)
			},
			/**
			 * 打点
			 */
			addMarkers() {
				this.$refs.map && this.$refs.map.addMarkers(...arguments)
			}
		}
	}
</script>

<style lang="scss">
	.wrapper {
		position: relative;

		.input-wrapper {
			position: absolute;
			top: 24rpx;
			left: 24rpx;
			width: calc(100% - 24px);
			height: 72rpx;
			background: #FFF;
			z-index: 22;
			padding: 0 28rpx;
			border-radius: 6px;
		}

		.search-icon {
			width: 32rpx;
			height: 32rpx;
		}

		.search-input {
			width: 586rpx;
			height: 72rpx;
			line-height: 72rpx;
			padding: 0 8rpx;
			color: #999;
		}
	}
</style>
