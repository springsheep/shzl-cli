<template>
  <div id="app">
    <nav-layout>
      <keep-alive :include="includes">
        <router-view />
      </keep-alive>
    </nav-layout>
  </div>
</template>

<script>
import keepAlive from './mixins/keep-alive'
import NavLayout from './layout/NavLayout'

export default {
  components: {
    NavLayout
  },
  mixins: [keepAlive]
}
</script>

<style lang="scss">

</style>
