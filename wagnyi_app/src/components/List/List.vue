<template>
 <div class="listContaiter">
   <!-- 类目热销榜 -->
    <div class="listContent">
      <span class="title" v-if=" indexData.categoryHotSellModule">{{indexData.categoryHotSellModule.title}}</span>
        <div class="category" v-if=" indexData.categoryHotSellModule">
          <div class="categoryItem" v-for="(item, index) in indexData.categoryHotSellModule.categoryList" :key="index">
            <span>{{item.categoryName}}</span>
            <img :src="item.picUrl" alt="">
          </div>
      </div>
     </div>
    <!-- 限时购 -->
    <div class="discount">
      <div class="timeTitle">
          <span class="left">限时购</span>
          <van-count-down :time="time" >
            <template v-slot="timeData">
              <span class="block">{{ timeData.hours }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.minutes }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
          <span class="right">更多></span>
      </div>
      <!-- 图片 -->
      <div class="discountContent">
        <div class="disCountItem" v-for="(item, index) in 6" :key="index">
          <img class="disCountImg" src="https://yanxuan-item.nosdn.127.net/064eea68d5a16b84ac4ab1a672104724.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
          <div class="price">
            <span class="priceNew">¥80</span>
            <span class="proceOld">¥90</span>
          </div>
        </div>
      </div>
    </div>
  <!-- 新品首发 -->
     <div class="discount">
      <div class="timeTitle">
          <span class="left">新品首发</span>
          <span class="right">更多></span>
      </div>
      <!-- 图片 -->
      <div class="discountContent">
        <div class="disCountItem" v-for="(item, index) in 6" :key="index">
          <img class="disCountImg" src="https://yanxuan-item.nosdn.127.net/2f89b8f4bc295469652f8c533485338b.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
          <div class="price">
            <span class="priceNew">¥80</span>
            <span class="proceOld">¥90</span>
          </div>
        </div>
      </div>
    </div>
  <!-- 底部 -->
    <div class="footerContent">
        <div class="btnList">
          <div class="btnLeft">下载APP</div>
          <div class="btnRight">电脑版</div>
        </div>
        <div class="copyright">
          <p class="copurightTitle">
            众里寻他千百度
            <br>
            蓦然回首，那人却在，灯火阑珊处。
          </p>
        </div>
    </div>
 </div>
</template>

<script>
import Vue from 'vue';
import { CountDown } from 'vant';
Vue.use(CountDown);
import {mapState} from 'vuex';
export default {
  name: 'List',
  data() {
    return {
       time: 3*60* 60 * 1000,
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
 
.listContaiter
  .listContent
    border-top 10px solid #eee
    border-bottom  10px solid #EEE
    box-sizing border-box
    padding 20px
    width 100%
    .title 
      font-size 32px
    .category
      display flex
      text-align center
      flex-wrap wrap
      align-items center
      .categoryItem
        flex 1
        padding-top 20px
        height 180px
        background #f5f5f5
        border-radius 10px
        margin 5px
        img 
          width 130px
          height 130px
  .discount
    padding 20px
    border-bottom 10px solid #EEE
    box-sizing border-box
    .timeTitle
      height 100px
      line-height 100px
      position relative
      .left
        float left
        font-size 32px
      .van-count-down
        float left   
        position absolute
        left 120px
        top 25px
        .colon 
          display inline-block
          margin 0 4px
          color:#000
          font-size 24px
        .block 
          display inline-block
          width 50px
          height 50px
          color #fff
          font-size 24px
          text-align center
          line-height 50px
          background-color #000
          border-radius 10px
      .right
        float right
        font-size 26px
    .discountContent
      margin-left 10px
      display flex
      flex-wrap wrap
      .disCountItem
        flex 1
        padding-bottom 20px
        .disCountImg
          background #eee
        .price
          margin-left 10px
          .priceNew
            color #DD1A21
            font-size 28px
          .proceOld
            color #7f7f7f
            margin-left 10px
            text-decoration: line-through;
  .footerContent
    background #333
    height 400px
    padding 60px
    box-sizing border-box
    .btnList
      margin 20px 0  0  80px
      color #fff
      .btnLeft
        width 150px
        height 50px
        line-height 50px
        text-align center
        display inline-block
        border 1px solid #999  
        border-radius 10px
        padding 5px
      .btnRight
        width 150px
        height 50px
        line-height 50px
        text-align center
        display inline-block
        border 1px solid #999  
        border-radius 10px
        padding 5px
        margin-left 100px
    .copyright
      text-align center
      color #999
      margin-top 40px
     
</style>  
