<template>
  <div class="cm-layout">
    <!-- 导航栏  -->
    <van-nav-bar
      v-if="!hideNavBar"
      ref="navbar"
      :title="title"
      :fixed="true"
      :border="false"
      :placeholder="true"
      :safe-area-inset-top="true"
      :left-arrow="!hideLeftArrow"
      :left-text="leftTextToShow"
      @click-left="_handleLeftArrowClick"
    />
    <!-- 内容 -->
    <slot />
  </div>
</template>

<script>
export default {
  name: 'NavLayout',
  data() {
    return {
      title: '',
      leftText: '返回'
    }
  },
  provide() {
    return {
      nav: this
    }
  },
  computed: {
    // 是否隐藏导航栏
    hideNavBar() {
      return this.$route.meta && this.$route.meta.customNavBar === true
    },
    // 是否隐藏返回按钮
    hideLeftArrow() {
      return this.$route.meta && this.$route.meta.hideLeftArrow === true
    },
    // 左边显示的文字
    leftTextToShow() {
      return this.hideLeftArrow ? '' : this.$data.leftText
    }
  },
  watch: {
    '$route': {
      handler(newVal) {
        this.$data.title = newVal.meta.title || ''
      },
      immediate: true
    }
  },
  methods: {
    _handleLeftArrowClick() {
      this.$router.go(-1)
    },
    /**
     * 设置标题，支持字符串和render方式
     * @param title
     */
    setTitle(title) {
      if (typeof title === 'string') {
        this.$data.title = title
      } else {
        if (this.$refs.navbar) {
          this.$refs.navbar.$slots['title'] = title
        }
      }
    },
    /**
     * 设置左边的内容，支持字符串和render方式
     * @param left
     */
    setLeft(left) {
      if (typeof left === 'string') {
        this.$data.leftText = left
      } else {
        if (this.$refs.navbar) {
          this.$refs.navbar.$slots['left'] = left
        }
      }
    },
    /**
     * 设置右边的内容，支持字符串和render方式
     * @param right
     */
    setRight(right) {
      if (this.$refs.navbar) {
        this.$refs.navbar.$slots['right'] = right
      }
    }
  }
}
</script>

<style scoped>

</style>
