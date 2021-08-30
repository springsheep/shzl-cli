<template>
  <cm-search-table
    ref="table"
    :search-items-schema="searchItems"
    :table-fields-schema="fields"
    :load-data="_loadData"
    :table-selection-col="true"
    @selection-change="_selectionChange"
  >
    <c-button
      slot="toolPanel"
      @click="_add"
      type="primary"
    >
      添加
    </c-button>
    <c-button
      slot="toolPanel"
      @click="_other"
    >
      批量
    </c-button>

    <template
      slot="otherHobby"
      slot-scope="scope"
    >
      <a @click="_handleDetail(scope.row,'详情标题')"> 详情{{ scope.$index }}</a>
    </template>

    <template
      slot="otherHobby2"
      slot-scope="scope"
    >
      <a @click="_edit(scope)">编辑</a>
    </template>
  </cm-search-table>
</template>

<script>
import ListModalListMixins from '@cm/cm-ui/lib/mixins/list-modal-list'

export default {
  mixins: [ListModalListMixins],
  data() {
    return {
      searchItems: [
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
      ],
      fields: [
        { prop: 'funId', label: '功能编号', sortable: true },
        { prop: 'funName', label: '功能名称' },
        { prop: 'location', label: '地址' },
        { prop: 'orderNo', label: '排序号' },
        {
          prop: 'logFlag',
          label: '是否记日志',
          formatter: (row, column, cellValue) => cellValue ? '是' : '否'

        },
        { prop: 'icon', label: '图标' },
        { prop: 'version', label: '版本' },
        {
          label: '其他',
          prop: 'other',
          scopedSlots: {
            customRender: 'otherHobby'
          }
        },
        {
          label: '头像',
          prop: 'src',
          scopedSlots: {
            default: () => (
              <a>123</a>
            )
          }
        },
        {
          label: '其他2',
          prop: 'other2',
          scopedSlots: {
            customRender: 'otherHobby2'
          }
        }
      ],
      data: []
    }
  },
  methods: {
    _loadData(params) {
      console.info('_loadData', params)
      return new Promise(resolve => {
        const { page, limit } = params
        const list = []
        for (let i = 0; i < limit; i++) {
          list.push({
            funId: `1212-${page}-${i}`,
            funName: '功能112',
            location: '地址姿势',
            orderNo: '212',
            logFlag: '212',
            icon: '21',
            version: '12'
          })
        }

        return resolve({
          list,
          count: 100
        })
      }
      )
    },
    _selectionChange(values) {
      console.info('_selectionChange', values)
    },
    _edit(scope) {
      // console.info('edit===>', scope)
      // this.$emit('edit', scope.row)
      this._handleEdit(scope.row, '编辑标题')
    },
    _add() {
      this._handleAdd('新增标题')
    },

    _other() {
      this._handleOther(null, 'other-view', '其他标题')
    }

  }
}
</script>
