<template>
  <div class="cartListContaiter">
    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" @change="onChange">
      <van-swipe-item v-for="(item, index) in cartListData.bannerUrlList" :key="index">
        <img class="bannerImg" v-lazy="item" alt="">
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">
        <span v-for="(item, index) in cartListData.bannerUrlList" :key="index" 
        :class="{active:banIndex===index}"
      ></span>
      </div>
    </van-swipe>
    <!-- 展示商品 -->
    <div class="product">
      <div class="header">
        <span class="title">口碑好物</span>
        <span class="subhead">口碑好物</span>
      </div>
    </div>
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
  data() {
    return {
      banIndex:0,
    }
  },
  methods: {
    onChange(index){
      this.banIndex=index
    }
  },
  computed: {
    ...mapState({
      indexDataNav:state=>state.indexData.indexDataNav,
    }),
    cartListData(){
      return this.indexDataNav.find(item=>item.id===this.navId)
    }
  }
}
</script>

<style lang="stylus" scoped>
.cartListContaiter
  .my-swipe .van-swipe-item 
    color #fff
    text-align center
    background #eee
    border-bottom 10px solid #eee
    .bannerImg
      width 100%
      height 370px
  .custom-indicator
    height 10px
    display inline
    position absolute
    bottom 20px
    left 50%  
    transform translateX(-50%)
    span 
      float left
      width 40px
      height 4px
      background #fff
      opacity .5
      margin 0 5px
      &.active
        opacity 1
  .product
    .header
      padding 20px 0
      box-sizing border-box
      height 120px
      text-align center
      .title
        font-size 34px
        display block
        margin-bottom 10px
      .subhead
        font-size 24px
        color #999
</style>
