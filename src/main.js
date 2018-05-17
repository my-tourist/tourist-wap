// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './pages/router'
import store from './pages/store'

// ajax请求 参考：https://github.com/imcvampire/vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// UI-框架 参考：https://github.com/ElemeFE/mint-ui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

// 引入全局flex.css  参考：http://cnodejs.org/topic/56d1148d9f876b7e6658579e
import 'flex.css'

// 引入全局scss

// 引入全局组件
import Footer from './pages/components/Layout/Footer/index.vue'
import Header from './pages/components/Layout/Header/index.vue'
import Main from './pages/components/Layout/Main/index.vue'

Vue.config.productionTip = false

// 取消 Vue 所有的日志与警告。
Vue.config.silent = true

// 注册全局组件
Vue.component('app-footer', Footer)
Vue.component('app-header', Header)
Vue.component('app-main', Main)

Vue.use(VueAxios, axios)
Vue.use(Mint)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
