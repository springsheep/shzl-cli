<template>
  <cmm-form
    ref="form"
    :data="data"
    :field-schema="fieldSchema"
    label-width="100"
    upload-action="http://10.10.77.194:8092/oamp-store/file/uploadFile"
    @change="_handleChange"
  >
    <template
      slot="other"
      slot-scope="{value}"
    >
      我是自定义插槽内容：
      <div>{{ value }}</div>
    </template>

    <button @click="_submit">
      提交
    </button>
  </cmm-form>
</template>

<script>
import { FORM_FIELD_TYPES } from '@cm/cm-mobile-ui/lib/form/types'
export default {
  name: 'Form',
  data() {
    return {
      data: {
        name: '张三',
        partIn: true,
        partInRepeat: true,
        partInGames: ['a'],
        sex: 'male',
        num: 1,
        rate: 3,
        score: 50,
        city: '',
        birthday: '2012-11-11 13:11',
        area: '330102',
        areaName: '浙江省杭州市上城区',
        calendar: null,
        imgs: ['https://img01.yzcdn.cn/vant/leaf.jpg'],
        slotkey: '123'
      },
      fieldSchema: [
        {
          xType: FORM_FIELD_TYPES.FIELD,
          prop: 'name',
          props: {
            label: '姓名',
            placeholder: '请输入姓名'
          },
          scopedSlots: {
            label: () => <div>姓名</div>,
            button: () => <button>插槽按钮</button>
          }
        },
        {
          xType: FORM_FIELD_TYPES.SWITCH,
          prop: 'partIn',
          props: {
            label: '是否参加活动',
            size: '20',
            activeValue: 1,
            inactiveValue: 0
          }
        },
        {
          xType: FORM_FIELD_TYPES.CHECKBOX,
          prop: 'partInRepeat',
          props: {
            label: '是否第二次参加',
            shape: 'squre'
          },
          scopedSlots: {
            // icon: props => this._getIcon(props),
            default: () => '打勾勾'
          }
        },
        {
          xType: FORM_FIELD_TYPES.CHECKBOX,
          prop: 'partInGames',
          props: {
            label: '参加的项目',
            direction: 'horizontal'
          },
          extra: {
            group: true,
            options: [
              {
                props: {
                  name: 'a',
                  shape: 'squre'
                },
                scopedSlots: {
                  default: () => '篮球'
                  // icon: props => this._getIcon(props),
                }
              },
              {
                props: {
                  name: 'b',
                  shape: 'squre'
                },
                scopedSlots: {
                  default: () => '足球'
                  // icon: props => this._getIcon(props),
                }
              }
            ]
          }
        },

        {
          xType: FORM_FIELD_TYPES.RADIO,
          prop: 'sex',
          props: {
            label: '性别',
            direction: 'horizontal'
          },
          extra: {
            options: [
              {
                props: {
                  name: 'male',
                  shape: 'squre'
                },
                scopedSlots: {
                  default: () => '男',
                  icon: props => this._getIcon(props)
                }
              },
              {
                props: {
                  name: 'female',
                  shape: 'squre'
                },
                scopedSlots: {
                  default: () => '女',
                  icon: props => this._getIcon(props)
                }
              }
            ]
          }
        },
        {
          xType: FORM_FIELD_TYPES.STEPPER,
          prop: 'num',
          props: {
            label: '购买数量'
          }
        },
        {
          xType: FORM_FIELD_TYPES.RATE,
          prop: 'rate',
          props: {
            label: '评分'
          }
        },
        {
          xType: FORM_FIELD_TYPES.SLIDER,
          prop: 'score',
          props: {
            label: '成绩'
          },
          scopedSlots: {
            button: (prop) => this._getScoreButton(prop)
          }
        },
        {
          xType: FORM_FIELD_TYPES.PICKER,
          prop: 'city',
          props: {
            label: '城市',
            placeholder: '请选择城市',
            columns: ['杭州', '上海']
          },
          scopedSlots: {
            title: () => <div>自定义标题</div>
          }
        },
        {
          xType: FORM_FIELD_TYPES.DATETIME_PICKER,
          prop: 'birthday',
          props: {
            label: '生日',
            placeholder: '请选择生日',
            type: 'datetime'
          },
          extra: {
            valueFormat: 'yyyy-MM-dd hh:mm'
          }
        },
        {
          xType: FORM_FIELD_TYPES.AREA_PICKER,
          prop: 'area', // 用于协议的传输
          relativeProp: 'areaName', // 用于显示
          props: {
            label: '选择地区',
            placeholder: '请选择地区'
          }
        },
        {
          xType: FORM_FIELD_TYPES.CALENDAR,
          prop: 'calendar',
          props: {
            label: '日历',
            placeholder: '请选择日历',
            type: 'range'
          },
          extra: {
            valueFormat: 'yyyy-MM-dd',
            showFormat: value => value && value.join('-')
          }
        },
        {
          xType: FORM_FIELD_TYPES.UPLOADER,
          prop: 'imgs',
          props: {
            label: '头像'
          }
        },
        {
          xType: FORM_FIELD_TYPES.SLOT,
          prop: 'slotkey',
          props: {
            label: '插槽名',
            customRender: 'other'
          }
        }
      ]
    }
  },
  methods: {
    _getIcon({ checked }) {
      return checked ? <img src='https://img01.yzcdn.cn/vant/user-active.png' style={'height:20px;'}/>
        : <img src='https://img01.yzcdn.cn/vant/user-inactive.png' style={'height:20px;'}/>
    },
    _getScoreButton({ value }) {
      return <button>{value}</button>
    },
    _handleChange() {
      // eslint-disable-next-line prefer-rest-params
      console.info('_handleChange', arguments)
    },
    _submit() {
      console.info('getValue', this.$refs.form && this.$refs.form.getValue())
    }
  }
}
</script>

<style scoped>

</style>
