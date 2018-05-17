<template>
  <div id="app-main">
    <slot></slot>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'main',
  computed: mapState({
    isSign: 'isSign'
  }),
  data () {
    return {

    }
  }
}
</script>

<!--scoped 限制样式只适用于当前组件-->
<style scoped>
  #app-main{
    overflow: hidden;
  }
</style>
