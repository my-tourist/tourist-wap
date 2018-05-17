<template>
  <div id="app" :flex="flex">
    <app-header v-if="hasHeader" hasMessage="true" />
    <keep-alive>
    <app-main>
      <router-view/>
    </app-main>
    </keep-alive>
    <app-footer v-if="hasFooter" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      hasFooter: true,
      hasHeader: true,
      flex: ''
    }
  },
  watch: {
    $route (to, from) {
      console.log(to, from)
      const { hasFooter, hasHeader } = to.meta
      this.hasFooter = hasFooter
      this.hasHeader = hasHeader
      this.watchRoute(hasHeader, hasFooter)
    }
  },
  created () {
    this.watchRoute(this.hasHeader, this.hasFooter)
  },
  methods: {
    watchRoute (hasHeader, hasFooter) {
      let flex = 'dir:top '
      if (hasFooter && hasHeader) {
        flex += 'box:justify'
      } else if (hasHeader) {
        flex += 'box:first'
      } else if (hasFooter) {
        flex += 'box:last'
      }
      console.log(flex)
      this.flex = flex
    }
  }
}
</script>

<style lang="scss">
@import "pages/assets/css/main";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 0.24rem;
  width: 100%;
  height: 100%;
}
@media screen and (min-width: 750px){
  #app {
    width: 750px;
    margin: 0 auto;
  }
}
</style>
