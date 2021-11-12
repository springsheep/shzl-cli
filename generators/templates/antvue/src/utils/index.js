import AntD from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import '@/style/index.scss'

export default {
  install(Vue) {
    Vue.use(AntD)
    Vue.prototype.transObj = (obj) => {
      const keys = Object.keys(obj);
      const arr = keys.map((item) => ({
        name: item,
        value: obj[item]
      }))
      return arr;
    }
    Vue.prototype.transArr = (arr) => {
      const obj = Object.create(null)
      arr.forEach((item) => {
        obj[item.key] = item.value
      })
      return obj;
    }
  }
}
