<template>
  <div class="detailContainer">
    <!-- 头部 -->
   <Header></Header>
    <!-- 内容 -->
    <div class="content">
      <img :src="shopDetail.wapBannerUrl"  class="Img" alt="">
      <div class="tag">暖春特惠</div>
      <span class="txt">${{shopDetail.priceNew}}</span>
      <span class="tit">{{shopDetail.name}}</span>
       <!-- 内容 -->
      <ul class="list">
          <li>1) 100%桑蚕丝填充，丝丝精粹不掺杂</li>
          <li>2) 创新井字拉网工艺，桑蚕丝不易黏连结块</li>
          <li>3) 两种面料可选，贡缎手感细腻，竹棉清爽透气</li>
          <li>4) AB双面设计，多种活性印花不易褪色</li>
      </ul>
    </div>
    <!-- 底部导航 -->
    <div class="detailFooter">
      <i class="iconfont icon-kefu ic"></i>
      <div class="btn addShopCart" @click="addCart" >加入购物车</div>
    </div>

  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
import Header from '../../components/Header/Header';
  export default {
    name:'Detail',
    data(){
      return {
        shopDetail:{}
      }
    },
    components:{
      Header
    },
    mounted(){
      this.shopDetail=this.$route.query.data
    },
    methods:{
      ...mapMutations({
         changeCartList:'changeCartList'
      }),
     addCart(){
       //添加购物车
       this.changeCartList(this.shopDetail)
       this.$router.push('/cart')
     }
    }
  }
</script>

<style lang="stylus">
.detailContainer
  display flex
  flex-direction column
  .content
    height calc(100vh-90px)
    .Img
      width 100%
			height 700px
      border 1px solid #333
    .tag 
      width 90%
      height 100px
      line-height 100px
      text-align center
      font-size 30px
      color #fff
      margin 20px auto
      background #DD1A21
      border-radius 10px
    .txt
      font-size 50px
      color #DD1A21
      line-height 70px
      margin-left 5%
    .tit
      font-size 28px
      color #333
      margin-left 5%
    .list
      margin-left 5% 
      margin-top 15px
      font-size 28px
      line-height 50px
  .detailFooter
    display flex
    height 80px
    line-height 80px
    position fixed
    bottom 100px
    right 0
    text-align center
    .ic
      font-size 60px
      width 150px
      color #333
    .btn 
      width 300px 
      &.addShopCart
        background #DD1A21
				color #fff
</style>
