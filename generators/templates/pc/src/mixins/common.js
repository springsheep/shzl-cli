export const commonMixin = {
  provide() {
    return {
      Page: this
    }
  },
  // beforeCreate() {
  //   const name = this.$options.name
  //   console.log('commonMixin.beforeCreate:::::', this)
  //   if (name && this.$vnode && this.$vnode.data) {
  //     // this._vnode.data.class = this._vnode.data.class + ' ' + name
  //     this.$vnode.data.staticClass = this.$vnode.data.staticClass ? this.$vnode.data.staticClass + ' ' + name : name
  //   }
  // },
  activated() {
    if (this.$options.name) {
      this.$el.classList.add(this.$options.name || '')
    }
  },
  methods: {
    listenCall() {
      return ''
    }
  }
}
