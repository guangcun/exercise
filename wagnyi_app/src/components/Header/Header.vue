<template>
  <div class="headerContaiter">
    <router-link class="left" to="/home">
      <i class="iconfont icon-home" ></i>
    </router-link>
    <span class="title">{{title}}</span>
    <div class="right">
      <i class="iconfont icon-search"></i>
      <router-link to="/cart">
        <i class="iconfont icon-cart"></i>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  props:['title'],
  name: 'Header',
   methods: {
     
  },
}
</script>

<style lang="stylus">
.headerContaiter
  padding 0 20px
  box-sizing border-box
  height 100px
  line-height 100px
  text-align center
  background #fff
  .left
    float left
    height 100px
    .iconfont
      font-size 48px
  .title
    display inline-block
    font-size 36px
    margin-left 80px
  .right
    float right 
    height 100px
    .iconfont
      box-sizing border-box
      display inline-block
      margin-left 30px
      font-size 48px
</style>
