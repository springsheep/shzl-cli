<template>
  <div class="page page-demo">
    <cm-modal
      v-model="modalShow"
      :title="title"
      :ok-func="_submit"
      @ok="_handleOk"
      @cancel="_cancel"
      ok-text="确定了"
      ok-type="danger"
      cancel-text="取消"
      closable="false"
      width="600px"
    >
      <div>
        弹框
      </div>
    </cm-modal>
    <button
      @click="modalShow=true"
      type="primary "
    >
      点击显示》》》
    </button>

    <button @click="_showModalByJS">
      通过JS显示弹框
    </button>
  </div>
</template>

<script>
import Modal from '@cm/cm-ui/es/modal/index'

export default {
  name: 'Modal',
  data() {
    return {
      modalShow: false,
      title: '标题'
    }
  },
  beforeDestroy() {
    // Modal.destroy()
    // Modal.destroyAll()
  },
  methods: {
    _submit() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    },
    _handleOk() {
      this.$message('点击确定的回调')
    },
    _cancel() {
      this.$message('点击取消的回调')
    },

    // js调用显示
    _showModalByJS() {
      Modal.show({
        title: '标题',
        okText: '确定',
        cancelText: '取消',
        content: () => {
          return (
            <div>AAAAAAAAA</div>
          )
        },
        onOk: () => {
          return this._submit()
        },
        onCancel: (prams) => {
          this.$message('cancel', prams)
        }
      })
    }
  }
}
</script>
