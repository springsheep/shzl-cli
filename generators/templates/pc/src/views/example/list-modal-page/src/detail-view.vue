<template>
  <div>{{ context }}</div>
</template>

<script>
import ListModalOtherMixins from '@cm/cm-ui/lib/mixins/list-modal-other'

export default {
  name: 'DetailView',
  mixins: [ListModalOtherMixins]
}
</script>
