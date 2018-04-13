<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      hasFooter: true
    }
  },
  watch: {
    $route (to, from) {
      this.hasFooter = to.meta.hasFooter;
      console.log(to, from);
    }
  }
}
</script>

<style>
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
