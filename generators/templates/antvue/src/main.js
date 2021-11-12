import Vue from 'vue';
import utils from '@/utils/index'
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(utils)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
