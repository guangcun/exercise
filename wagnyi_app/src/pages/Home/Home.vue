<template>
  <div id="indexContainer">
    <!-- 头部 -->
    <div class="header">
      <img class="logo" src="./images/logo.png" alt="">
      <div class="searchInput" @click="toSearch">
        <i class="iconfont icon-search"></i>
        <span class="placeholder">搜索商品</span>
      </div>
      <div class="btn" @click="toLogin">{{userInfo.userName?userInfo.userName:'登录'}}</div>
    </div>
    <!-- 导航 -->
    <div class="navContent" ref="navContent">
      <div class="nav">
        <div class="navItem" 
          :class="{active:navIndex===0}"
          @click="changeIndex(0,0)"
          >
          <span>推荐</span>
        </div>
        <div
          class='navItem '
          :class="{active:navIndex===(index+1)}"
          @click="changeIndex(index+1,item.id)"
          v-for="(item, index) in indexDataNav" :key="item.id">
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
    <!-- 内容区 -->
    <div class="swiper-wrap" ref="swiper">
      <div class="list" >
        <Recommend v-if="navId===0"></Recommend>
        <CartList v-else :navId='navId'></CartList>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
import BScroll from 'better-scroll'
import Recommend from '../../components/Recommend/Recommend';
import CartList from '../../components/CartList/CartList';
export default {
  name: 'Home',
  components:{
    Recommend,
    CartList
  },
  data() {
    return {
      navIndex:0,
      navId:0,
      userInfo:{

      }
    }
  },
  mounted() {
    this.getIndexDataNavAction();
    this.getIndexDataAction()
    let wrapper = this.$refs.navContent
    scroll = new BScroll(wrapper, {
        　scrollX: true,
          click: true
    })
    let swiper=this.$refs.swiper
    scrollY=new BScroll(swiper,{
      　scrollY:true,
        click:true
    })
    let userInfo=localStorage.getItem('userInfo')
    if (userInfo) {
      this.userInfo=JSON.parse(userInfo)
    }
  },
  methods: {
    ...mapActions({
      getIndexDataNavAction:'getIndexDataNavAction',
      getIndexDataAction:'getIndexDataAction'
    }),
    changeIndex(navIndex,navId){
      this.navIndex=navIndex
      this.navId=navId
    },
    toLogin(){
      if (!this.userInfo.userName) {
        this.$router.push('/login')
      }
    },
    toSearch(){
      this.$router.push('/search')
    }
  },
  computed: {
    ...mapState({
      indexDataNav:state=>state.indexData.indexDataNav,
    })
  },
}
</script>

<style lang="stylus" scoped>
#indexContainer
  width 750px
  .header
    display flex
    align-items center
    padding 10px 0
    .logo
      width 140px
      height 40px
      margin 20px
    .searchInput
      position relative
      flex 1
      height 60px
      background #eee
      line-height 60px
      border-radius 10px
      .placeholder
        font-size 28px
        margin-left 60px
        color #333
      .iconfont
        font-size 28px
        position absolute
        left 20px
        top 0
    .btn
      width 74px
      height 40px
      line-height 40px
      text-align center
      font-size 24px
      color #DD1A21
      border 1px solid #DD1A21
      border-radius 8px
      margin 0 20px
  .navContent
    width 750px
    height 80px
    overflow hidden
    .nav
      display inline-flex
      flex-direction row
      padding-left 30px
      height 70px
      .navItem
        padding  20px
        font-size 30px
        white-space nowrap
        &.active
          color #DD1A21
          border-bottom 2px solid #DD1A21
  .swiper-wrap
    height 1100px
    overflow hidden      
.text
  font-size 0
</style>
