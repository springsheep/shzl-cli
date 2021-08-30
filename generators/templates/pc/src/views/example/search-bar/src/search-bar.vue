<template>
  <div class="page page-demo">
    <cm-search-bar
      :items-schema="searchFields"
      @reset="handleReset"
      @search="handleSearch"
    />
  </div>
</template>
<script>
// import {addResizeListener} from '@cci/cui/lib/utils/resize-event';

export default {
  data() {
    return {
      searchModel: {},
      searchFields: [
        { label: '任务编号', prop: 'funId', placeholder: '请输入任务编号', hidden: true },
        {
          label: '任务类型', prop: 'funType1', xType: 'select',
          xStore: () => {
            return [
              {
                label: 'xxx',
                value: '12'
              }
            ]
          },
          on: {
            change: () => {
              // console.log('hehehhe', arguments)
            }
          },
          relatedFields: ['funId']
        },
        {
          label: '审批类别', prop: 'funId', placeholder: '请输入审批类别',
          on: {
            'el.form.update': (a, b, c, d) => {
              this.searchModel.funId = 'adfadfa'
              console.log('ab', a, b, c, d)
            }
          }
        },
        { label: '广告设置人', prop: 'funName', placeholder: '输入广告设置人' },
        { label: '地址', prop: 'location', placeholder: '输入地址' },
        { label: '开始时间', prop: 'orderNo', placeholder: '输入排序号' },
        { label: '记日志', prop: 'logFlag', xType: 'switch', 'active-value': 1, 'inactive-value': 0 },
        { label: '图标', prop: 'icon' },
        { label: '版本', prop: 'version' }
      ]
    }
  },
  mounted() {
    // addResizeListener(this.$el, e => {
    //   console.info('resize', e.target.offsetWidth)
    // });
  },
  methods: {
    handleReset() {
      console.info('handleReset')
    },
    handleSearch(params) {
      console.info('handleSearch', params)
    }
  }
}
</script>
