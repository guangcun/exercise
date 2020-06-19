let Koa = require('koa')
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();


let indexDataNav=require('./datas/indexCateModule.json')
//请求主页导航
router.get('/homeNav',(ctx,next)=>{
  ctx.body={
    code:200,
    data:indexDataNav
  }
})
//主页数据
let indexData=require('./datas/index.json')
router.get('/home',(ctx,next)=>{
  ctx.body={
    code:200,
    data:indexData
  }
})
//分类列表的导航的数据
let cateNavData=require('./datas/cateNavDatas.json')
router.get('/sortNav',(ctx,next)=>{
  ctx.body={
    code:200,
    data:cateNavData
  }
})
//分类列表的数据
let cateData=require('./datas/cateLists.json')
let cateListFoue=cateData.splice(0,4)
router.get('/sortFour',(ctx,next)=>{
  ctx.body={
    code:200,
    data:cateListFoue
  }
})
//登录
let loginData={
  userName:'102',
  img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2011397336,2566224281&fm=26&gp=0.jpg',
  isLogin:true,
}
router.post('/login',(ctx,next)=>{
  // console.log(ctx.query);
  const {username,password}=ctx.query
  console.log(ctx.query);
  console.log(ctx.params);
  
  if (!username || !password) {
    ctx.body={
      code:400,
      msg:'用户名或者密码出错'
    }
    return
  }
  ctx.body={
    code:200,
    data:JSON.stringify(loginData)
  }
})


router.get('/sortOff',(ctx,next)=>{
  ctx.body={
    code:200,
    data:cateData
  }
})












app
  .use(router.routes())
  .use(router.allowedMethods())



app.listen('3001', () => {
  console.log('服务器地址: http://localhost:3001');
})
