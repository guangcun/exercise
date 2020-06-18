import {CHANGESORTDATANAV,CHANGESORTDATA} from '../mutations_type.js';
import {reqSortDataNav,reqSortData} from '../../api/index.js';
const state={
  sortDataNav:{},
  sortData:{}
}
const mutations={
  [CHANGESORTDATANAV](state,sortDataNav){
    state.sortDataNav=sortDataNav
  },
  [CHANGESORTDATA](state,sortData){
    state.sortData=sortData
  },
}
const actions={
  async getchangeSortDataNav({commit}){
    let result=await reqSortDataNav();
    result.code===200 & commit(CHANGESORTDATANAV,result.data)
  },
  async getchangeSortData({commit}){
    let result=await reqSortData();
    result.code===200 & commit(CHANGESORTDATA,result.data)
  },
}
const getters={

}

export default {
  state,
  mutations,
  actions,
  getters
}