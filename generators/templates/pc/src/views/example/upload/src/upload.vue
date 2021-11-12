<template>
  <div class="page page-demo">
    <cm-form
      ref="Form"
      :inline="false"
      :items="fields"
      :model="formModel"
      upload-action="https://www.baidu.com"
    />
  </div>
</template>
<script>
export default {
  name: 'Upload',
  data() {
    return {
      formModel: {
        img: ['https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100', 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100']
      },
      fields: [
        {
          label: '上传',
          prop: 'img',
          xType: 'upload',
          placeholder: '请输入',
          anchor: 6,
          props: { limit: 3, listType: 'picture-card' }
        }
      ]
    }
  },
  methods: {
    _change() {
    }
  }
}
</script>
<style></style>
