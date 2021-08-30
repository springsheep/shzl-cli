import Vue from 'vue'

// 标记定义
const PUSH = Symbol('push')
const POP = Symbol('pop')

/**
 * 缓存组件混入方法
 * 注意：需要缓存的组件必须设置name，且全局唯一
 */
export default {
  data() {
    return {
      // 需要被缓存的组件名称集合额
      includes: [],
      positions: []
    }
  },
  created() {
    const router = this.$router
    let dir = PUSH
    const { positions } = this.$data

    // 劫持push方法，添加标记
    const routerPush = router.push
    router.push = function push(...args) {
      dir = PUSH
      routerPush.apply(router, args)
    }

    // eslint-disable-next-line no-unused-vars
    router.afterEach((to, from) => {
      console.info('dir===>', dir)

      if (dir === PUSH) {
        this.$data.includes.push(to.name)
        positions.push({})
      } else if (dir === POP) {
        this.$data.includes.pop()
        this.unKeepPosition(positions.pop({}))
        this.restorePosition(positions)
      }
      dir = POP
    })

    Vue.directive('keep-position', {
      bind(el, { value }) {
        const parent = positions[positions.length - 1]
        if (parent) {
          const obj = {
            x: 0,
            y: 0
          }
          const key = value
          parent[key] = obj
          obj.el = el
          obj.handler = function({ currentTarget }) {
            obj.x = currentTarget.scrollLeft
            obj.y = currentTarget.scrollTop
          }
          el.addEventListener('scroll', obj.handler)
        }
      }
    })
  },
  methods: {
    /**
     * 恢复滚动条
     * @param positions
     */
    restorePosition(positions) {
      Vue.nextTick(() => {
        const parent = positions[positions.length - 1]
        for (const key in parent) {
          const { el, x, y } = parent[key]
          el.scrollLeft = x
          el.scrollTop = y
        }
      })
    },
    /**
     * 移除监听
     * @param parent
     */
    unKeepPosition(parent) {
      for (const key in parent) {
        const obj = parent[key]
        obj.el.removeEventListener('scroll', obj.handler)
      }
    }
  }
}
