<template>
  <div class='footer'>   
      <router-link class='nav-tabs' active-class='active' to="/home">
        <i class='iconfont icon-home'></i>
        <p class="title" >首页</p>
      </router-link>
       <router-link class='nav-tabs'  active-class='active' to="/sort">
        <i class='iconfont icon-sort'></i>
        <p class="title" >分类</p>
      </router-link>
       <router-link class='nav-tabs'  active-class='active' to="/worthy">
        <i class='iconfont icon-hot'></i>
        <p class="title" >值得买</p>
      </router-link>
       <router-link class='nav-tabs'  active-class='active' to="/cart">
        <i class='iconfont icon-cart'></i>
        <p class="title" >购物车</p>
      </router-link>
       <router-link class='nav-tabs'  active-class='active' to="/personal">
        <i class='iconfont icon-my'></i>
        <p class="title" >个人</p>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      isActive:true
    }
  },
}
</script>

<style lang="stylus" scoped>
.footer
  height 98px
  position fixed
  width 100%
  bottom 0
  left 0
  display flex
  background #fff
  .nav-tabs
    flex 1
    width 20%
    height 98px
    text-align center
    &.active
      color red 
    .iconfont
      font-size 50px
    .title
      margin-top -3px
      font-size 24px
</style>
