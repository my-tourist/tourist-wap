<template>
  <div class="shop-item plr-md fs-sm">
    <p class="title">上海著名景点</p>
    <div flex="box:first">
      <img src="" class="pic" alt="">
      <div class="pl-md" flex="dir:top">
        <span class="name fs-lg">东方明珠电视塔</span>
        <span>门票价格：￥100</span>
        <span>地址：浦东新区陆家嘴金融中心</span>
        <div>
          <span>推荐：</span>
          <span>⭐️️⭐️️⭐️️⭐️️⭐️️⭐</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopItem'
}
</script>

<style scoped lang="scss">
  .shop-item{
    color: #4D4D4D;
  .title{
    font-size: 0.2rem;
    line-height: 1;
    padding: 0.2rem 0 0.1rem;
  }
  .pic{
    width: 3.2rem;
    height: 1.8rem;
    background-color: #7f7f7f;
  }
  .name{
    padding-bottom: 0.3rem;
    font-weight: bold;
  }
  }
</style>
