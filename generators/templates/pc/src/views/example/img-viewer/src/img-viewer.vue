<template>
  <div class="img-viewer">
    <cm-img-viewer :images="imageList" />
    <!-- 带插槽 -->
    <cm-img-viewer
      :images="imageListSlot"
    >
      <template #default="{images}">
        <img
          v-for="(item ,i) in images"
          :key="item"
          :src="item"
          :index="i"
          :style="{width:'300px'}"
        >
      </template>
    </cm-img-viewer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageList: [require('@/assets/img/bg.png')],
      imageListSlot: [require('@/assets/img/bg.png'), require('@/assets/img/head.png')]
    }
  }
}
</script>
