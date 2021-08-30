<template>
	<view>
		<cm-map ref="map" @updated="_addMarkers"></cm-map>
		<tki-qrcode :loadMake="true" val="qrcode" foreground="#00ff00" pdground="#00ff00"></tki-qrcode>
	</view>



</template>

<script>
	import tkiQrcode from "@/components/tki-qrcode/tki-qrcode.vue"
	export default {
		components: {
			tkiQrcode
		},

		onReady() {


		},
		methods: {
			_addMarkers() {
				this.$refs.map.addMarkers([{
						id: 1,
						latitude: 30.27415,
						longitude: 120.15515,
						iconPath: require("@/static/images/map_shop.png")
					},
					{
						id: 2,
						latitude: 30.37415,
						longitude: 100.25515,
						iconPath: require("@/static/images/map_shop.png")
					}
				], true)
			}
		}
	}
</script>

<style lang="scss">
</style>
