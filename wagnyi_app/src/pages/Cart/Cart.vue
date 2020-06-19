<template>
  <div class="cartContainer">
    <div class="title">购物车</div>

    <template v-if='!userInfo.userName'>
      <!-- 未登录 -->
      <div class="header">
        <span>30天无忧退货</span>
        <span>48小时快速退货</span>
        <span>满99元免邮费</span>
      </div>
      <div class="contentContainer">
        <img src="../../../static/images/carts/emptyCart.gif" class="Img" alt="">
        <button @click="toLogin">登录</button>
      </div>
    </template>
    <template v-else>
      <!-- 登录 -->
      <template v-if="true">
        <!-- 登录后购物车 -->
        <div class="cartList">
          <div class="cartItem">
            <span class="iconfont icon-xuanzhong" ></span>
            <div class="shopItem">
              <img src="" alt="" class="shopImg">
              <div class="shopInfo">
                <span class="title">文字</span>
                <span class="price">$</span>
              </div>
            </div>
            <!-- 数量 -->
            <div class="countCtronal">
              <span class="add" >+</span>
              <span class="count">数量</span>
              <span class="del" >-</span>
            </div>
          </div>
        </div>
        <!-- 底部下单 -->
        <div class="cartFooter">
          <span class="iconfont icon-xuanzhong" ></span>
          <span class="allSelected">已选</span>
          <div class="right">
            <span class="totalPrice">合计:$1214</span>
            <span class="preOrder">下单</span>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="cart">
          <img  class="cartImg" 
            src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp" >
          <div class="hint">购物车还是空的，赶紧去购物吧!</div>
        </div>
      </template>
    </template>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name:'Cart',
    data(){
      return{
        userInfo:{}
      }
    },
    mounted() {
      let userInfo=localStorage.getItem("userInfo")
      if (userInfo) {
        this.userInfo=JSON.parse(userInfo)
      }
    },
    methods:{
      toLogin(){
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="stylus">
.cartContainer
  // background #f4f4f4
  height 100%
  .title 
    font-size 30px
    line-height 80px
    margin-left 30px
    margin-bottom 1px solid #eee
  .header
    display flex
    background #E6E6E6
    span  
      width 33.333%
      height 80px
      line-height 80px
      text-align center
      font-size 26px
  .contentContainer 
    position absolute
    .Img
      display inline
      width 400px
      height 300px
      position absolute
      top 330px
      left 160px
      text-align center
    button 
      width 480px
      height 100px
      background #DD1A21
      font-size 28px
      font-weight bold
      color #fff
      border-radius 10px
      position absolute
      top 630px
      left 145px
  .cartList
    .cartItem 
      position relative
      display flex
      height 170px
      background #eee
      margin-top 20px
      padding 20px 
      .iconfont 
        font-size 40px
        line-height 170px
        margin 0 40px
        color #999
       /*  &.selected
						color: #BB2C08 */
      .shopItem
        display flex
        .shopImg
          width 170px
          height 170px
          box-sizing border-box
          border 1px solid #333
        .shopInfo
          font-size 28px
          display flex
          flex-direction column
          margin-left 20px
          .title 
            line-height 60px
          .price
            color: #BB2C08
      .countCtronal
        position absolute
        right 20px
        bottom 80px
        span 
          display inline-block
          width 50px
          height 50px
          text-align center
          line-height 50px
          border 1px solid #333
          &:nth-child(2)
            border none
            border-top 1px solid #333
            border-bottom 1px solid #333
  .cartFooter
    position absolute
    display flex	
    bottom 100px
    height 90px
    line-height 90px
    width 100%
    background #fff
    font-size 28px
    .iconfont
      font-size 4px
      margin 0 20px
      color: #999
      /* &.selected
        color: #BB2C08 */
    .right 
      height 90px
      position absolute
      right 0
      .totalPrice
        display inline-block
        height 90px
        line-height 90px
      .preOrder
        display inline-block
        background #DD1A21
        width 200px
        height 90px
        line-height 90px
        text-align center
        font-size 28px
        color #fff
        margin-left 30px
        border-radius 10px
  .cart
    margin-top 230px 
    .hint
      text-align center
      font-size 28px
    .cartImg
      display block
      width 480px
      height 480px
      margin-left 130px    
</style>

