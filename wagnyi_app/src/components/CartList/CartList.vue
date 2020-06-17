<template>
  <div class="cartListContaiter">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
import {mapState} from 'vuex';
export default {
  props:['navId'],
  name: 'CartList',
  computed: {
    ...mapState({
      indexDataNav:state=>state.indexData.indexDataNav,
    }),
    cartListData(){
      return this.indexDataNav.find(item=>item.id===this.navId)
    }
  },
}
</script>

<style lang="stylus" scoped>
.cartListContaiter
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
