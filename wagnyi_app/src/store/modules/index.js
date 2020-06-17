import {reqIndexDataNav,reqIndexData} from '../../api';
import {CHANGEINDEXDATANAV,CHANGEINDEXDATA} from '../mutations_type.js';
const state={
    indexDataNav:{}, //主页导航数据
    indexData:{}  //主页数据
}
const mutations={
  //修改主页导航
  [CHANGEINDEXDATANAV](state,indexDataNav){
    state.indexDataNav=indexDataNav
  },
  //修改主页数据
  [CHANGEINDEXDATA](state,indexData){
    state.indexData=indexData
  }
}
const actions={
  //请求主页导航数据
  async getIndexDataNavAction({commit}){
    let result=await reqIndexDataNav();
    result.code===200 & commit(CHANGEINDEXDATANAV,result.data)
  },
  //请求主页数据
  async getIndexDataAction({commit}){
    let result=await reqIndexData();
    result.code===200 & commit(CHANGEINDEXDATA,result.data)
  }
}
const getters={

}
export default {
  state,
  mutations,
  actions,
  getters
}