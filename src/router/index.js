import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/pages/HomePage/index.vue';
import Demo from '@/pages/Demo/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history', // 隐藏路由的 #
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: {
        hasFooter: true
      }
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo,
      meta: {
        hasFooter: false
      }
    }
  ]
})
