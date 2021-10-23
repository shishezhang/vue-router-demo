import Vue from 'vue'
import App from './App.vue'
// 引入路由
import Myrouter from './router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注入路由
  router: Myrouter
}).$mount('#app')
