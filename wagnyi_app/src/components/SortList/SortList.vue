<template>
  <div class="SortContent">
    <!-- 前四个 -->
    <div class="SortFour" v-if="sortObj">
        <img :src="sortObj.titleImg" alt="">
        <div class="SortItemContent">
          <div class="SortItem" v-for="(item, index) in sortObj.categoryList" :key="index">
            <img :src="item.bannerUrl" alt="">
            <span>{{item.name}}</span>
          </div>
        </div>
    </div>
    <!-- 之后的 -->
    <div class="SortFour" v-if="sortObjOff">
        <img :src="sortObjOff.imgUrl" alt="">
        <div class="SortItemContent">
          <div class="SortItem" v-for="(item, index) in sortObjOff.subCateList" :key="index">
            <img :src="item.wapBannerUrl" alt="">
            <span>{{item.name}}</span>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  props:['sortListId'],
  name: 'SortList',
  computed: {
    ...mapState({
      sortData:state=>state.sortData.sortData,
      sortDataOff:state=>state.sortData.sortDataOff
    }),
    sortObj(){
      return this.sortData.length>0 ? this.sortData.find(item => item.id === this.sortListId ) : undefined
    },
    sortObjOff(){
      return this.sortDataOff.length>0 ? this.sortDataOff.find(item => item.id === this.sortListId ) : undefined
    }
  },
}
</script>

<style lang="stylus" scoped>
.SortContent
  padding 40px
  box-sizing border-box
  .SortFour
    img 
      width 100%
    .SortItemContent
      display flex
      flex-wrap wrap
      margin-top 40px
      .SortItem
        display flex
        flex-direction column
        margin-bottom 20px
        text-align center
        width 33.33%
        img 
          width 144px
          height 144px 
        span 
          display block
          width 144px
          display -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow hidden
          white-space pre-wrap    

</style>
