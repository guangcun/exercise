import ajax from './ajax';
//请求主页导航数据
export const reqIndexDataNav=()=>ajax.get('/homeNav')
//请求主页数据
export const reqIndexData=()=>ajax.get('/home')