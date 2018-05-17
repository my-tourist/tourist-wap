<template>
  <div>
    usercenter
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'userCenter',
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
</style>
