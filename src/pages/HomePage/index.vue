<template>
  <div>
    <div class="app-main app-has-footer">
      <div>this is HomePage</div>
      <div class="a" @click="changeSign"> to Demo </div>
      <hello-world /><hello-world /><hello-world /><hello-world />
    </div>
    <app-footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HelloWorld from '../../components/HelloWorld.vue'
export default {
  name: 'homePage',
  computed: mapState({
    isSign: 'isSign'
  }),
  components: {
    'hello-world': HelloWorld
  },
  data () {
    return {

    }
  },
  created () {
  },
  methods: {
    changeSign () {
      // this.$store.commit('changeSign')
      this.$router.push('/demo')
    }
  }
}
</script>

<!--scoped 限制样式只适用于当前组件-->
<style scoped>
  .app-main{
    position: absolute;
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }
  .app-has-footer{
    padding-bottom: 0.88rem;
  }
  .a{
    height: 0.88rem;
  }
</style>
