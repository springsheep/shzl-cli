<template>
  <cmm-list :get-list="_getList">
    <!--   列表数据      -->
    <template
      slot="list"
      slot-scope="{list}"
    >
      <div
        v-for="(item,index) in list"
        :key="index"
      >
        <div class="list-cell">
          子元素{{ item.pageIndex }}-{{ item.index }}
        </div>
      </div>
    </template>
  </cmm-list>
</template>

<script>
export default {
  name: 'List',
  methods: {
    _getList({ pageIndex }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (pageIndex === 3) {
            reject(new Error('失败'))
          } else {
            const list = []

            for (let i = 0; i < 10; i++) {
              list.push({
                pageIndex,
                index: i
              })
            }

            resolve({
              list,
              count: 25
            })
          }
        }, 1000)
      })
    }
  }
}
</script>

<style scoped>
.list-cell {
  text-align: center;
  height: 100px;
  line-height: 100px;
  background-color: #dedede;
  margin: 8px 0px;
}
</style>
