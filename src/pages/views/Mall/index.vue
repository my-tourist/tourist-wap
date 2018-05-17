<template>
  <div>
    mall
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'mall',
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
