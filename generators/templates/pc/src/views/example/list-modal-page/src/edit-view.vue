<template>
  <div>
    <div>edit-view</div>
    <div>{{ context }}</div>
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

