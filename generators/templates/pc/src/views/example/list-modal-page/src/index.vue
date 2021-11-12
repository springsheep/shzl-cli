<script>
import ListModalPage from '@cm/cm-ui/lib/list-modal-page'
import ListView from './list-view'
import EditView from './edit-view'
import AddView from './add-view'
import DetailView from './detail-view'
import OtherView from './other-view'

export default {
  components: {
    'list-view': ListView, // 列表页面
    'add-view': AddView, // 新增页面
    'edit-view': EditView, // 编辑页面
    'detail-view': DetailView, // 详情页面
    'other-view': OtherView // 其他页面
  },
  extends: ListModalPage
}
</script>

<style>
.cm-list-modal-page{
  padding:20px;
}
</style>
