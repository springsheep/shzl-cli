<template>
  <div style="display: flex;flex-direction: column;height: 100%;">
    <div>列表页</div>
    <div
      v-keep-position="'list1'"
      style="flex: 1;overflow: scroll;"
    >
      <div
        v-for="item in list"
        :key="item.id"
      >
        <router-link
          style="line-height: 100px;display:block;"
          :to="{ name: 'Detail', params: { id: item.id } }"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
    <div
      v-keep-position="'list2'"
      style="flex: 1;overflow: scroll;"
    >
      <div
        v-for="item in list"
        :key="item.id"
      >
        <router-link
          style="line-height: 100px;display:block;"
          :to="{ name: 'Detail', params: { id: item.id } }"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KeepAlive',
  data() {
    return {
      list: new Array(10).fill(1).map((_, index) => {
        return { id: index + 1, name: `item${index + 1}` }
      })
    }
  },
  mounted() {
    console.warn('List', 'mounted')
  },
  activated() {
    console.warn('List', 'activated')
  },
  deactivated() {
    console.warn('List', 'deactivated')
  }
}
</script>

<style scoped>

</style>

