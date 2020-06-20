<template>
  <div class="sortContaiter">
    <!-- 头部 -->
    <div class="searchHeader"  @click="toSearch">
			<div class="search">
        <i class="iconfont icon-search"></i>
				搜索商品, 共33331款好物
			</div>
		</div>
    
    <div class="content">
      <!-- 左导航 -->
        <div class="leftNav" ref="leftNavContent">
          <div>
            <van-sidebar v-model="activeKey" >
            <van-sidebar-item :title="item.name" v-for="(item, index) in sortDataNav.categoryL1List" :key="index" 
            @click="onChange(index,item.id)"
            />
          </van-sidebar>
          </div>
        </div>
   
      <div class="rightNav" ref="rightNav">
        <div class="list" >
          <SortList :sortListId='sortListId'></SortList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Sidebar, SidebarItem } from 'vant';
import bScroll from 'better-scroll'
Vue.use(Sidebar);
Vue.use(SidebarItem);
import {mapState,mapActions} from 'vuex'
import SortList from '../../components/SortList/SortList';
export default {
  name: 'Sort',
   data() {
    return {
      activeKey: 0,
      sortListId:11,
    };
  },
  components:{
    SortList,
  },
  mounted() {
    this.getchangeSortDataNav()
    this.getchangeSortData()
    this.getchangeSortDataOff()
     let scorllNav=new bScroll(this.$refs.leftNavContent,{
          scrollY:true,
          click:true
      })
      let rightNav=new bScroll(this.$refs.rightNav,{
          scrollY:true,
          click:true
      })
  },
  methods: {
    ...mapActions({
      getchangeSortDataNav:'getchangeSortDataNav',
      getchangeSortData:'getchangeSortData',
      getchangeSortDataOff:'getchangeSortDataOff'
    }),
    onChange(index,id){
      this.activeKey=index
      this.sortListId=id
    },
    toSearch(){
      this.$router.push('/search')
    }
  },
  computed: {
    ...mapState({
      sortDataNav:state=>state.sortData.sortDataNav
    })
  }
}
</script>

<style lang="stylus" scoped>
.sortContaiter
  .searchHeader
    padding 20px 0
    .search
      width 90%
      height 60px
      color #999
      line-height 60px
      text-align center
      margin 0 auto
      background #ededed
      border-radius 10px
      font-size 26px
      .iconfont
        font-size 30px
  .content
    border-top 2px solid #eee
    height calc(100vh - 302px)
    overflow hidden
    display flex
    .leftNav
      display inline-block
      width 160px
      border-right 2px solid #eee
      .van-sidebar 
        width 160px
        .van-sidebar-item 
          margin-top 40px
          width 160px
          height 50px
          background #fff
          font-size 28px
          &::before
            height 50px
            top 56%
    .rightNav
      height 850px
      .list
        display inline-block

</style>
