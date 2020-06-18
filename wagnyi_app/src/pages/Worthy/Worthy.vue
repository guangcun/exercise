<template>
  <div class="worthyContaiter">
    <Header :title="title"></Header>
    <div class="worthyBannerContent">
      <div class="worthyTop">
        <img class="worthyBac" src="https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png" alt="">
        <div class="worthyTitle">
          <img src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
          <div class="title">严选好物&nbsp;用心生活</div>
        </div>
      </div>
      <div class="worthyBot">
        <div class="worthyContent">
          <div class="wortItem" v-for="(item, index) in worthyData.navList" :key="index">
            <img :src="item.picUrl" alt="">
            <span class="title">{{item.mainTitle}}</span>
            <span class="text">{{item.viceTitle}}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 瀑布流 -->
    <div> 123</div>
  </div>
</template>

<script>
import Header from '../../components/Header/Header';
import {reqWorthyNav} from '../../api/index';
export default {
  name: 'Worthy',
  data() {
    return {
      title:'值得买',
      worthyData:{}
    }
  },
  mounted() {
    this.getWorthyNav()
  },
  methods: {
    async getWorthyNav(){
      let result=await reqWorthyNav();
      console.log(result);
      if (result.code==="200") {
        this.worthyData=result.data
      }
    }
  },
  components:{
    Header,
  }
}
</script>

<style lang="stylus" scoped>
.worthyContaiter
  background #eee
  .worthyBannerContent
    height 680px
    padding-top 140px
    box-sizing border-box
    position relative
    .worthyTop
      position absolute
      left 0 
      top 0
      z-index 1
      .worthyBac
        width 100% 
        height auto
      .worthyTitle
        position absolute
        top 50px
        left 20px
        height 100px
        line-height 100px
        img 
          widows 130px
          height 68px
          position absolute
          top 10px
        .title 
          color #ffffff
          font-size 30px
          margin-left 130px
    .worthyBot
      width 710px
      height 540px
      background #fff
      position absolute
      bottom 0
      left 50%
      transform translateX(-50%)
      z-index 9
      border-radius 20px
      overflow hidden
      .worthyContent
        display flex
        flex-wrap wrap
        padding 40px 0
        height 520px
        overflow hidden
        box-sizing border-box
        .wortItem
          width 25%
          display flex
          flex-direction column
          align-items center
          height 240px
          img
            width 120px
            height 120px
          .title
            color #333
            font-size 26px
            font-weight bold
            padding-top 10px 
          .text
            color #999
            font-size 24px
</style>
