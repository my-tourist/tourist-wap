<template>
  <div flex="dir:left box:mean" id="app-footer">
    <div flex="main:center cross:center"
         v-for="(item, index) in navList"
         v-bind:key="index" @click="changeRoute(item.href)">
      {{item.name}}
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
        href: '/'
      }, {
        name: 'demo',
        href: '/demo'
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
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  height: 0.88rem;
  font-size: 0.32rem;
}
</style>
