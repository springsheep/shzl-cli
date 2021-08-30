<template>
  <div>
    详情页
    <div>
      {{ $route.params.id }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  mounted() {
    console.warn('Detail', 'mounted')
  }
}
</script>

<style scoped>

</style>
