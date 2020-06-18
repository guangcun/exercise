import ajax from './ajax';
//请求主页导航数据
export const reqIndexDataNav=()=>ajax.get('/homeNav')
//请求主页数据
export const reqIndexData=()=>ajax.get('/home')
//请求分页导航数据
export const reqSortDataNav=()=>ajax.get('/sortNav')
//请求分类列表的数据
export const reqSortData=()=>ajax.get('/sort')