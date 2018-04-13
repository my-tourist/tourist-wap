// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 引入全局flex.css  参考：http://cnodejs.org/topic/56d1148d9f876b7e6658579e
import 'flex.css'

// 引入全局组件
import Footer from './components/Footer/index.vue'

Vue.config.productionTip = false

// 取消 Vue 所有的日志与警告。
Vue.config.silent = true

// 注册全局组件
Vue.component('app-footer', Footer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
