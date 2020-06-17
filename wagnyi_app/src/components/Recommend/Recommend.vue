<template>
  <div class="recommendContainer">
    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white"  @change="onChange">
      <van-swipe-item class="swiperItem" v-for="(item, index) in indexData.focusList" :key="item.id">
        <img v-lazy="item.picUrl" alt="">
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">
        <span v-for="(item, index) in indexData.focusList" :class="{active:swIndex===index}" ></span>
      </div>
   </van-swipe>
   <!-- 三个横向的图标 -->
   <div class="policyDescList">
     <div class="policyDescItem" v-for="(item, index) in indexData.policyDescList" :key="index">
       <img :src="item.icon" alt="">
       <span>{{item.desc}}</span>
     </div>
   </div>
   <!--kingKongList 10个小图标的列表 -->
   <div class="kingkongList" v-if="indexData.kingKongModule">
     <div class="kingkongItem" v-for="(item, index) in indexData.kingKongModule.kingKongList" :key="index">
       <img :src="item.picUrl" alt="">                                        
       <span>{{item.text}}</span>
     </div>
   </div>
   <!-- 新人专享部分 -->
   <div class="prople">
      <p>—&nbsp;&nbsp;新人专享礼&nbsp;&nbsp;—</p>
      <div class="propleContent">
         <div class="left">
            <span>新人专享红包</span>
            <img src="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="">
         </div>
        <div class="right">
          <div class="rightItem">
            <div class="itemLeft">
              <span class="title">福利社</span>
             <span class="text">今日特价</span>
            </div>
            <img src="https://yanxuan-item.nosdn.127.net/431a09a43914483f4d70aeda8ecb8a59.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
          </div>
          <div class="rightItem">
            <div class="itemLeft" >
              <span class="title">新人拼团</span>
              <span class="text">1元包邮</span>
            </div>
            <img src="https://yanxuan-item.nosdn.127.net/431a09a43914483f4d70aeda8ecb8a59.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
          </div>
        </div>
        </div>
      </div>
    <List></List>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem,Lazyload } from 'vant';
import List from '../List/List';
import {mapState} from 'vuex';
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
export default {
  name: 'Recommend',
  data() {
    return {
      swIndex:0,
    }
  },
  components:{
    List
  },
  methods: {
    onChange(index){
      this.swIndex=index
    }
  },
  computed: {
    ...mapState({
      indexData:state=>state.indexData.indexData
    })
  },
}
</script>

<style lang="stylus" scoped>
.recommendContainer
  .my-swipe
    height 296px
    .swiperItem
      width 100%
      height 100%
      img
        width 100%
        height 100%
    .custom-indicator
      width 100%
      height 10px
      position absolute
      bottom 20px
      left 20%    
      span 
        float left
        width 40px
        height 4px
        background #fff
        opacity .5
        margin 0 5px
        &.active
          opacity 1
  .policyDescList
    display flex
    height 70px
    line-height 70px
    .policyDescItem
      flex 1
      text-align center
      img 
        width 32px
        height 32px
        vertical-align middle
      span 
        font-size 24px
        vertical-align middle
  .kingkongList
    display flex
    flex-wrap wrap
    .kingkongItem
      width 20%
      display flex
      flex-direction column
      align-items center
      img
        width 110px
        height 110px
      span 
        font-size 24px
        line-height 50px
  .prople
    width 100%
    height 600px
    margin-top 10px
    border-top 10px solid #eee
    p
      font-size 34px
      text-align center
    .propleContent
      display flex
      margin-left 50px
      .left
        display flex
        flex-direction column
        width 330px
        height 450px
        background #F9E9CF
        margin-right 4px
        span 
          padding 40px 0 0 30px
          font-size 30px
        img 
          width 248px
          height 244px
          margin 20px auto
      .right
        width 330px
        height 450px
        display flex
        flex-direction column
        .rightItem
          width 100%
          height 50%
          background rgb(255 239 213)
          padding 20px 0 0 20px
          border-bottom 4px solid #fff
          box-sizing border-box
          .itemLeft
            width 50%
            float left 
            .title 
              font-size 30px
              display block
            .text
              display block
              color #333
          img 
            float right 
            width 200px
            height 200px
            margin-top -60px
</style>
