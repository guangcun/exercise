import Vue from 'vue'
import App from './App.vue'
import waterfall from 'vue-waterfall2'
import router from './router/index';
import store from './store';
import 'lib-flexible'
Vue.use(waterfall)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
