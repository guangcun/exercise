import ajax from './ajax';

//请求主页导航数据
export const reqIndexDataNav=()=>ajax.get('/api/homeNav')
//请求主页数据
export const reqIndexData=()=>ajax.get('/api/home')
//请求分页导航数据
export const reqSortDataNav=()=>ajax.get('/api/sortNav')
//请求分类列表的数据前
export const reqSortData=()=>ajax.get('/api/sortFour')
//请求分类列表的数据后 
export const reqSortDataOff=()=>ajax.get('/api/sortOff')
//请求值得买导航数据
export const reqWorthyNav=()=>ajax.get('/host/topic/v1/know/navWap.json')
//请求登录
export const reqLogin=(userName,password)=>ajax.post(`/api/login?username=${userName},&password=${password}`)
