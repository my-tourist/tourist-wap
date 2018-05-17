<template>
  <div class="app-main">
    <div class="home-swiper">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="https://static.mysvw.com/2018/03/31/f64335f3-7064-450f-a79e-50e1c8e202ae.jpg?x-oss-process=image/resize,w_375" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="https://static.mysvw.com/2018/03/31/a059eb7d-339a-4ccd-ae58-7cbf9d02f14a.jpg?x-oss-process=image/resize,w_375" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="https://static.mysvw.com/2018/03/31/3781a335-f8b9-4ac0-b4a2-1f9849878d9a.jpg?x-oss-process=image/resize,w_375" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <ul class="home-nav" flex="box:mean">
      <li flex="dir:top cross:center main:center" v-for="(item, i) in homeNav" v-bind:key="i">
        <div class="nav-icon"></div>
        <span class="nav-name">{{item.name}}</span>
      </li>
    </ul>

    <div class="home-shop">
      <ShopItem />
      <ShopItem />
      <ShopItem />
      <ShopItem />
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui'
import ShopItem from '../../components/ShopItem/index.vue'
export default {
  name: 'homePage',
  components: {
    mtSwipe: Swipe,
    mtSwipeItem: SwipeItem,
    ShopItem: ShopItem
  },
  data () {
    return {
      homeNav: [{
        name: '简介'
      }, {
        name: '美食'
      }, {
        name: '交通'
      }, {
        name: '景点'
      }, {
        name: '游记'
      }]
    }
  },
  created () {
    console.log()
  },
  beforeRouteLeave (to, from, next) {
    console.log(document.getElementsByClassName('app-main')[0].scrollTop)
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
<style scoped lang="scss">
  .app-main{
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }
  .home-swiper{
    height: 4rem;
  }
  .home-nav{
    padding: 0.12rem 0.28rem 0;
    .nav-icon{
      height: 0.9rem;
      width: 0.9rem;
      border-radius: 50%;
      background-color: #FFCE55;
    }
    .nav-name{
      padding: 0.09rem 0 0.28rem;
    }
  }
</style>
