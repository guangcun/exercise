import Vue from 'vue';
const state={
  cartList:[
      {
        "count":1,
        "selected":true,
        "categoryType": 0,
        "showIndex": 1,
        "superCategoryId": 1005000,
        "level": "L2",
        "wapBannerUrl": "https://yanxuan.nosdn.127.net/1d89de114797fb9237314920695c564d.png",
        "name": "秋冬好物",
        "id": 109243003,
        "frontDesc": "温暖秋冬",
        "type": 0,
        "priceNew":"75",
        "priceOld":"187",
        "subCateList": [],
        "frontName": "秋冬好物"
    },
    {
        "count":1,
        "categoryType": 0,
        "selected":true,
        "showIndex": 2,
        "superCategoryId": 1005000,
        "level": "L2",
        "wapBannerUrl": "https://yanxuan.nosdn.127.net/0fe3073506c10f604c4ed7e0ba65d1f4.png",
        "name": "主题床品",
        "id": 109243004,
        "frontDesc": "设计点亮，品质当道",
        "type": 0,
        "priceNew":"75",
        "priceOld":"105",
        "subCateList": [],
        "frontName": "设计点亮，品质当道"
    }
  ]
}
const mutations={
  //添加到购物车
  changeCartList(state,cartItem){
    //判断 数据中存在添加的商品
    let item=state.cartList.find(item=>item.id===cartItem.id) 
    if (item) {
      item.count+=1
    }else{
      //添加 响应式属性
      Vue.set(cartItem,'count',1)
      Vue.set(cartItem,'selected',true) 
      state.cartList.push(cartItem)
    }
  },
  //加 减
  changecount(state,{isAdd,index}){
    if (isAdd) { //加
      state.cartList[index].count+=1
    }else{ //减
      if (state.cartList[index].count>1) { //当数据中的数量大于一的话 可以减
        state.cartList[index].count-=1
      }else{
        state.cartList.splice(index,1) //当数据中的属性小于等于一的话 ,删除该商品
      }
    }
  },
  //改变 选中
  changeSelected(state,{selected,index}){
    state.cartList[index].selected=selected
  },
  //改变全部选中
  changeAllSeleted(state,allSelected){
    state.cartList.forEach(item=>item.selected=allSelected)
  }
}
const actions={

}
const getters={
  //全选
  allSelected(state){
    //假设是全选状态
    let result=true
    state.cartList.find(item=>!item.selected && (result=false))
    return result
  },
  //计算选中几个
  totalCount(state){
		return state.cartList.reduce((pre,shopItem)=>{
			return pre+=shopItem.selected? shopItem.count:0
		},0)
  },
  //计算总价格
	totlaPrice(state){
		return state.cartList.reduce((pre,shopItem)=>{
			return pre+=shopItem.selected? shopItem.count*shopItem.priceNew:0
		},0)
	}
}


export default{
  state,
  mutations,
  actions,
  getters
}