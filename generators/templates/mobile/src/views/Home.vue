<template>
  <div
    class="home"
  >
    <van-button
      url="/form"
    >
      表单
    </van-button>
    <van-button
      url="/list"
    >
      列表
    </van-button>

    <van-button
      url="/keep-alive"
    >
      keepalive
    </van-button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  inject: ['nav'],
  mounted() {
    this.nav && this.nav.setTitle(<a>测试demo</a>)
    this.nav && this.nav.setRight(<a style='color:blue'>测试右边</a>)
    this.nav && this.nav.setLeft(<a>测试左边</a>)
  },
  methods: {
  }
}
</script>

<style>
.van-button{
  width:100%;
  margin:10px 0px;
}
</style>
