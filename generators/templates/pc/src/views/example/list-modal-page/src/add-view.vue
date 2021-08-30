<template>
  <div class="add-view">
    <cm-form
      ref="Form"
      :inline="false"
      :items="fields"
      :model="formModel"
      upload-action="http://www.baidu.com"
    >
      <template slot="timer">
        <c-time-select
          v-model="formModel.time"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30'
          }"
          placeholder="选择时间"
        />
      </template>
    </cm-form>
    <div>
      <c-button @click="_save">
        保存
      </c-button>
      <c-button @click="_cancel">
        取消
      </c-button>
    </div>
  </div>
</template>

<script>
import ListModalOtherMixins from '@cm/cm-ui/lib/mixins/list-modal-other'

export default {
  name: 'AddView',
  mixins: [ListModalOtherMixins],
  data() {
    return {
      formModel: {
        funName: '',
        checkbox: [''],
        select: '',
        logFlag: '',
        num: '',
        time: ''
      },
      fields: [
        { label: '功能名称', prop: 'funName', placeholder: '输入功能名称', anchor: 8, focus: true },
        {
          label: '选项', prop: 'checkbox', placeholder: '输入功能名称', anchor: 8, xType: 'checkbox', xStore: [{
            label: 'yes',
            text: '是'
          },
          {
            label: 'no',
            text: '否'
          }]
        },
        {
          label: '类型选择', prop: 'select', anchor: 8, xType: 'select', xStore: [{
            label: '车',
            value: '1'
          },
          {
            label: '船',
            value: '2'
          }]
        },
        { label: '记日志', prop: 'logFlag', xType: 'switch', anchor: 24, 'active-value': 1, 'inactive-value': 0 },
        { label: '数字', prop: 'num', xType: 'number', anchor: 6 },
        { label: '时间', prop: 'time', xType: 'slot', anchor: 6, customRender: 'timer' }
      ],
      rules: {
        funId: [
          { required: true, message: '请输入功能编号', trigger: 'blur' }
        ],
        funName: [
          { required: true, message: '请输入功能名称', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    _save() {
      this._backToRefresh()
    },
    _cancel() {
      this._backToRefresh(false)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
