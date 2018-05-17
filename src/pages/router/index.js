import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../views/HomePage/index.vue'
import Find from '../views/Find/index.vue'
import Mall from '../views/Mall/index.vue'
import UserCenter from '../views/UserCenter/index.vue'
import Demo from '../views/Demo/index.vue'

Vue.use(Router)

const scrollBehavior = (to, from, savedPosition) => {
  console.log('=====', savedPosition, from)
  if (savedPosition) {
    return savedPosition
  } else {
    if (from.meta.keepAlive) {
      console.log(document.getElementsByClassName('app-main')[0].scrollTop)
      from.meta.savedPosition = document.body.scrollTop
    }
    return { x: 0, y: to.meta.savedPosition || 0 }
  }
}

export default new Router({
  mode: 'history', // 隐藏路由的 #
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: {
        hasHeader: true,
        hasFooter: true,
        keepAlive: true
      }
    },
    {
      path: '/find',
      name: 'Find',
      component: Find,
      meta: {
        hasFooter: true
      }
    },
    {
      path: '/mall',
      name: 'Mall',
      component: Mall,
      meta: {
        hasFooter: true
      }
    },
    {
      path: '/usercenter',
      name: 'UserCenter',
      component: UserCenter,
      meta: {
        hasFooter: true
      }
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo,
      meta: {
        hasHeader: true,
        hasFooter: true
      }
    }
  ],
  scrollBehavior
})
