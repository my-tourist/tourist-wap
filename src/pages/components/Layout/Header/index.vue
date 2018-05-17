<template>
  <div id="app-header" class="bg-1" flex="box:justify">
    <div class="left" flex="main:center cross:center">
      <span class="fs-lg">上海</span>
      <i class="iconfont icon-xiangxia" style="font-size: 0.14rem"></i>
    </div>
    <div class="search bg-2" flex="box:first">
      <div class="icon-search" flex="cross:center"><i class="iconfont icon-sousuo" style="font-size: 0.3rem"></i></div>
      <div class="input-search"><input type="text" placeholder="景点、美食"></div>
    </div>
    <div class="right" flex="main:center cross:center" v-if="hasMessage">
      <i class="iconfont icon-liuyan" style="font-size: 0.52rem; color: #808080"></i>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: ['hasMessage']
}
</script>

<!--scoped 限制样式只适用于当前组件-->
<style scoped lang="scss">
#app-header{
  height: 1rem;
  border-bottom: 1px solid #d4d4d4;
  .left, .right{
    width: 1.2rem;
  }
  .search{
    height: 0.52rem;
    margin: 0.24rem 0;
    border-radius: 0.1rem;
    input{
      display: block;
      width: 100%;
      height: 100%;
      border: 0;
      outline: 0;
    }
  }
  .icon-search{
    padding: 0 0.24rem;
  }
}
</style>
