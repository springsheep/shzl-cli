<template>
  <div class="page page-demo">
    <cm-wrap-descriptions
      :items-schema="items"
      :data-source="dataSource"
      :col="3"
      :gutter="6"
      title="描述列表"
      layout="vertical"
      size="large"
    />
  </div>
</template>
<script>
import { DESCRIPTIONS_ITEM_TYPES } from './type'

export default {
  name: 'WrapDes',
  data() {
    return {
      items: [
        {
          type: DESCRIPTIONS_ITEM_TYPES.TEXT, term: '单词', key: 'word', anchor: 8, customTextRender: value => {
            return (
              <a>{value}</a>
            )
          }
        },
        {
          type: DESCRIPTIONS_ITEM_TYPES.ENUM,
          term: '成语',
          key: 'idiom',
          enumOptionList: [
            {
              value: 0,
              label: '无中生有'
            },
            {
              value: 1,
              label: '顺手牵羊'
            }
          ]
        },
        {
          type: DESCRIPTIONS_ITEM_TYPES.TEXT,
          term: '文本',
          key: 'text',
          customTextRender: value => {
            return `${value}没了`
          }
        },
        {
          type: DESCRIPTIONS_ITEM_TYPES.IMAGE, term: '图片自定义渲染', key: 'img', customImgRender: images => {
            return (
              <div>
                {images.map(src => {
                  return <img src={src} style={{ height: '200px' }}/>
                })}
              </div>
            )
          }
        },
        {
          type: DESCRIPTIONS_ITEM_TYPES.DICT, term: '字典', key: 'dict'
        }
      ],
      dataSource: {
        word: 'aaaa',
        idiom: 1,
        text: '鼠标',
        img: ['http://photos.tuchong.com/381448/f/7401197.jpg', 'http://photos.tuchong.com/381448/f/7401197.jpg'],
        dict: 'dd'
      }
    }
  },
  methods: {}
}
</script>
<style></style>
