<script>
import auth from '@/utils/auth'
export default {
  onLaunch: function() {
    console.log('App Launch')
    auth()
    this.$store.dispatch('GetUploadConfig')


    // #ifdef MP-WEIXIN
    // 位置变更，同步到store
    const _locationChangeFn = res => {
      this.$store.dispatch('UpdateCoord', {
        latitude: res.latitude,
        longitude: res.longitude,
        address: ''
      })
    }

    wx.onLocationChange(_locationChangeFn)
    // #endif
  },
  onShow: function() {
    console.log('App Show')

    // #ifdef MP-WEIXIN
    // 启动位置监听
    wx.startLocationUpdate()
    // #endif
  },
  onHide: function() {
    console.log('App Hide')

    // #ifdef MP-WEIXIN
    //关闭位置监听
    wx.stopLocationUpdate()
    // #endif
  },
  globalData: {
    parkNotice: 0
  }
}
</script>

<style lang="scss">
page {
  background-color: #f7fafb;
}

/*每个页面公共css */
/*引入uView的样式*/
@import '@/uview-ui/index.scss';

/*全局css*/
@import './common/css/flex.css';
@import './common/css/skin.scss';
@import './common/css/public.scss';
@import './common/css/border.css';
</style>
