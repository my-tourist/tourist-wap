<template>
  <div class="a" @click="changeSign">this is Demo</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'homePage',
  computed: mapState({
    isSign: 'isSign'
  }),
  data () {
    return {

    }
  },
  created () {
  },
  methods: {
    changeSign () {
      this.$store.commit('changeSign')
    }
  }
}
</script>

<!--scoped 限制样式只适用于当前组件-->
<style scoped>
  .a{
    font-size: 1rem;
    width: 10rem;
  }
</style>
