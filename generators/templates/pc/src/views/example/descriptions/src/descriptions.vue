<template>
  <cm-descriptions
    :col="3"
    :gutter="5"
    class="page page-demo"
    size="large"
    layout="vertical"
    title="个人信息"
  >
    <!-- title-slot -->
    <!-- <div slot="title" :style="{color:'red'}">
      订购记录
    </div> -->
    <cm-description-item term="姓名">
      甲某某
    </cm-description-item>

    <!-- term-slot -->
    <cm-description-item>
      <span
        slot="term"
        :style="{color:'blue'}"
      >爱好</span>
      AAAAAAAAAAA
    </cm-description-item>

    <!-- anchor -->
    <cm-description-item
      :anchor="12"
      term="备注"
    >
      xxxxxxxx
    </cm-description-item>
  </cm-descriptions>
</template>
<script>
export default {
  name: 'Descriptions'
}
</script>
