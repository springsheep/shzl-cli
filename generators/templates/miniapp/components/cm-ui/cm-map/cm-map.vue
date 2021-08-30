<template>
	<view class="map-wrapper" :style="customMapStyles">
		<map id="map" class="map" :style="customMapStyles" :longitude="longitude" :latitude="latitude"
			:show-location="true" :markers="markers" @updated="_initMap"></map>
		<!-- 右下角的当前定位控制器 -->
		<view class="circle_control" v-if="showMoveToCurrentLocationControl" @click="_moveToCurrentLocation">
			<view class="circle_bot"></view>
			<view class="circle_mid"></view>
			<view class="circle_top"></view>
		</view>
	</view>
</template>

<script>
	import {
		getLocation
	} from '@/utils/getLocation.js'
	export default {
		name: 'cm-map',
		props: {
			// 地图容器宽，默认750
			width: {
				type: Number,
				default: 750,
				required: false
			},
			// 地图容器高，默认375
			height: {
				type: Number,
				default: 375,
				required: false
			},
			// 是否展示位于右下角的定位到当前位置的控制器
			showMoveToCurrentLocationControl: {
				type: Boolean,
				default: true,
				required: false
			},
			// 中心经度, 默认去慈城古镇
			longitude: {
				type: Number,
				default: 121.4507,
				required: false
			},
			// 中心纬度, 默认去慈城古镇
			latitude: {
				type: Number,
				default: 29.98335,
				required: false
			},
			// 是否将当前的位置作为中心点
			showLocation: {
				type: Boolean,
				default: false,
				required: false
			}
		},
		data() {
			return {
				// 点位信息
				markers: []
			}
		},
		computed: {
			// 地图自定义样式
			customMapStyles() {
				const {
					width,
					height
				} = this.$props
				return `width: ${width}rpx;height: ${height}rpx`
			}
		},
		created() {
			this.context = uni.createMapContext('map', this)
		},
		methods: {
			/**
			 * 初始化地图,并触发updated方法
			 */
			_initMap() {
				if (this.$props.showLocation) {
					this._moveToCurrentLocation()
				}
				this.$emit('updated')
			},
			/**
			 * 移动地图的中心点到当前位置
			 */
			_moveToCurrentLocation() {
				getLocation().then(obj => {
					const {
						res
					} = obj
					const {
						longitude,
						latitude
					} = res

					this.moveToLocation(longitude, latitude)
				})
			},
			/**
			 * 
			 * 移动地图的中心点到指定的经纬度
			 * 
			 * @param {Object} longitude
			 * @param {Object} latitude
			 */
			moveToLocation(longitude, latitude) {
				if (this.context) {
					this.context.moveToLocation({
						latitude,
						longitude
					})
				}
			},
			/**
			 * 打点
			 */
			addMarkers(markers, clear = true) {
				if (clear) {
					this.$data.markers = []
				}
				this.$data.markers = this.$data.markers.concat(markers)
				this.context.includePoints({
					points: this.$data.markers,
					padding: [10,10,10,10]
				})
			}
		}
	}
</script>

<style lang="scss">
	.map-wrapper {
		position: relative;

		.circle_control {
			position: absolute;
			right: 24rpx;
			bottom: 28rpx;
			width: 80rpx;
			height: 80rpx;
			border-radius: 100%;
			background: #fff;

			.circle_bot {
				position: absolute;
				background-color: #0482FF;
				width: 56rpx;
				height: 56rpx;
				border-radius: 100%;
				top: 12rpx;
				left: 12rpx;
			}

			.circle_mid {
				position: absolute;
				background-color: #FFF;
				width: 44rpx;
				height: 44rpx;
				border-radius: 100%;
				top: 18rpx;
				left: 18rpx;
			}

			.circle_top {
				position: absolute;
				background-color: #0482FF;
				width: 24rpx;
				height: 24rpx;
				border-radius: 100%;
				top: 28rpx;
				left: 28rpx;
			}
		}


	}
</style>
