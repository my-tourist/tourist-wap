<template>
  <div flex="dir:left box:mean" id="app-footer">
    <div flex="dir:top main:center cross:center"
         v-for="(item, index) in navList"
         v-bind:key="index" @click="changeRoute(item.href)">
      <i :class="`iconfont ${item.icon}`" style="font-size: 0.44rem"></i>
      <span>{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      navList: [{
        name: '首页',
        icon: 'icon-home',
        href: '/'
      }, {
        name: '发现',
        icon: 'icon-shopping',
        href: '/find'
      }, {
        name: '行程',
        icon: 'icon-customer',
        href: '/demo'
      }, {
        name: '我的',
        icon: 'icon-user',
        href: '/usercenter'
      }],
      select: 0
    }
  },
  methods: {
    changeRoute (href) {
      this.$router.push(href)
    }
  }
}
</script>

<style scoped>
#app-footer{
  height: 1rem;
  font-size: 0.24rem;
  border-top: 1px solid #E8EBEF;
  background-color: #ffffff;
  color: #808890;
}
</style>
