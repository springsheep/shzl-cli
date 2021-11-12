/**
 * @Description: 用户信息展示
 * @author tao.xie
 * @date 2021/8/12
*/
<template>
  <div
    class="user"
  >
    <img
      :src="require('@/assets/img/head.png')"
      class="user-icon"
    >
    <span class="user-slogan"> {{ userName }} </span>
    <span class="nav-line" />
    <img
      @click="logout"
      :src="require('@/assets/img/logout.png')"
      class="logout-img"
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UserInfo',
  computed: {
    ...mapGetters([
      'userData'
    ]),
    userName() {
      return this.userData.userName || '**'
    }
  },
  methods: {
    logout() {
      // TODO 退出
    }
  }
}
</script>

<style lang="scss">
.user {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  height: 100%;
  margin-right:20px;

  .user-icon {
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }

  .user-slogan {
    font-size: 14px;
    color: #fff;
    margin-left: 8px;
  }

  .nav-line {
    margin: 0 12px;
    width: 1px;
    height: 12px;
    background-color: rgba(255, 255, 255, 0.4);
  }

  .logout-img {
    width: 15px;
    height: 15px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
