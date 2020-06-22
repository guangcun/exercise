<template>
  <div class="searchContainer">
    <!-- 搜索框 -->
    <div class="searchInp">
      <form action="/">
        <van-search v-model="value" placeholder="趋势新宠，低至5折抢"  
        show-action	
        @cancel="onCancel"
        @input='onSearch' />
      </form>
    </div>
    <!-- 初始化数据 -->
    <div class="suggestion" v-if="!searchData.length>0">
      <div class="headerSug">
        <h3>热门搜索</h3>
      </div>
      <div class="contentInit">
        <div class="content" v-for="(item, index) in searchInit.hotKeywordVOList" :key="index">
          <span :class="{active:item.algSort}">{{item.keyword}}</span>
        </div>
      </div>
    </div>
    <div class="searchShow" v-else>
      <div class="showItem" v-for="(item, index) in searchData" :key="index">
        <van-cell :title="item" is-link />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Search,Form,Cell, CellGroup } from 'vant';
import debounce from 'lodash/debounce';
import {reqSearchInit,reqSearch} from '../../api/index';
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Search);
export default {
  name: 'Search',
  data() {
    return {
      value:'',
      searchInit:{}, //初始化数据
      searchData:[],//搜索的数据
    }
  },
  mounted() {
    this.getSearchInit()
  },
  methods: {
    //初始化的数据
    async getSearchInit(){
      let result= await reqSearchInit()
      if (result.code==='200') {
        console.log(result.data);
        this.searchInit=result.data
      }
    },
    //搜索的数据
     async getSearch(keyword){
      let result= await reqSearch(keyword)
      if (result.code==='200') {
        this.searchData=result.data;
      }
      
    },
    //防抖
    getdebounce:debounce(function (keyword) {
        this.getSearch(keyword)
    },1000),
    onSearch(val) {
      this.getdebounce(val)
      //debounce(this.getSearch(val),1000)
      // let timer   
      // let shiw=true
      // clearTimeout(timer)
      // if (!shiw) {
      //   return
      // }
      // timer=setTimeout(() => {
      //   shiw=false
      //   this.getSearch(val)
      //   console.log(1111);
      // }, 2000);
        //this.getSearch(val)
     
    },
    onCancel() {
      console.log('取消');
    },
  },
}
</script>

<style lang="stylus">
.searchContainer
  background #eee
  height calc(100vh - 100px)
  .searchInp
    height 90px
    .van-search
      padding 0 40px
      box-sizing border-box
      height 90px
      .van-search__content
        height 60px
        line-height 50px
        .van-field__left-icon
          line-height 50px
          .van-icon
            font-size 34px
        .van-field__body
          line-height 50px
          font-size 28px
          .van-icon
            font-size 34px
      .van-search__action
        font-size 28px
  .suggestion
    padding 0 40px
    box-sizing border-box
    display inline-block
    background #fff
    width 100%
    .headerSug
      h3
        font-size 28px
        color #999
        font-weight normal
    .contentInit
      .content
        display inline-block
        margin-right 40px
        margin-bottom 40px
        span 
          padding 10px
          border 1px solid #999
          border-radius 5px
          color #333333
          &.active
            color #DD1A21
            border-color #DD1A21
  .searchShow
    .showItem
      height 100px
      .van-cell
        padding 0 40px
        height 100px
        line-height 100px
        box-sizing border-box
        .van-cell__title
          font-size 30px
          border-bottom 1px solid #999     
        .van-icon
          line-height 100px  
          font-size 30px
</style>
