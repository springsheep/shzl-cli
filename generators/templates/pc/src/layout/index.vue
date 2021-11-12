/**
* @Description: 基础布局，提供logo、user、footer等插槽
* @author tao.xie
* @date 2021/8/12
*/
<template>
  <cm-layout
    :menu="menu"
    :show-tags-view="true"
  >
    <template #logo>
      <logo />
    </template>

    <template #user>
      <user-info />
    </template>
    <router-view />
  </cm-layout>
</template>
<script>
import UserInfo from '@/layout/UserInfo'
import Logo from '@/layout/Logo'

export default {
  name: 'Layout',
  components: { UserInfo, Logo },
  computed: {
    menu() {
      return this.$store.getters.menu
    }
  },
  methods: {}
}
</script>
<style lang="scss">

</style>
