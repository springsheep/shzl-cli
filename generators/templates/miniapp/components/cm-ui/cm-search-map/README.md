# 带搜索输入框的地图组件

```javascript
<template>
	<cm-search-map v-model="search" @focus="_pushToSearchPage" ref="searchMap"></cm-search-map>
</template>

<script>
	export default {
		data() {
			return {
				search: ''
			}
		},
		methods: {
			_pushToSearchPage() {
				this.$data.search = 'yyy'
				this.$refs.searchMap.moveToLocation(121.4507, 29.98335)

				this.$refs.searchMap.addMarkers([{
					id: 1,
					latitude: 29.98335,
					longitude: 121.4507
				}], true)

				this.$refs.searchMap.addMarkers([{
					id: 1,
					latitude: 29.88335,
					longitude: 121.3507
				}], false)
			}
		}
	}
</script>

<style lang="scss">
</style>

```