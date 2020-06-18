import {CHANGESORTDATANAV,CHANGESORTDATA,CHANGESORTDATAOFF} from '../mutations_type.js';
import {reqSortDataNav,reqSortData,reqSortDataOff} from '../../api/index.js';
const state={
  sortDataNav:{},
  sortData:{},
  sortDataOff:{}
}
const mutations={
  [CHANGESORTDATANAV](state,sortDataNav){
    state.sortDataNav=sortDataNav
  },
  [CHANGESORTDATA](state,sortData){
    state.sortData=sortData
  },
  [CHANGESORTDATAOFF](state,sortDataOff){
    state.sortDataOff=sortDataOff
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
  async getchangeSortDataOff({commit}){
    let result=await reqSortDataOff()
    result.code===200 & commit(CHANGESORTDATAOFF,result.data)
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