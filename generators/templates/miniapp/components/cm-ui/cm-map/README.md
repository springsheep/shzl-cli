# 地图组件

```javascript
<template>
	<cm-map ref="map"></cm-map>
</template>

<script>
	export default {
		onReady() {
			this.$refs.map.addMarkers([{
				id: 1,
				latitude: 30.27415,
				longitude: 120.15515

			}], true)

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.circle_control{
		position: absolute;
		right: 12rpx !important;
		bottom: 14rpx !important;
		width: 80rpx;
		height: 80rpx;
		border-radius: 100%;
		background: #fff;
		scale: 0.5;
	}
</style>

```