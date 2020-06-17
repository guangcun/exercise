


import {css} from './transform.js';
export const scorllY=function (swiperWrap,list){

  css(list,"translateZ",0)
  //元素向上滑的最远距离
  var minY=swiperWrap.clientHeight-list.offsetHeight
  //console.log('____',swiperWrap.clientHeight,list.offsetHeight,minY);
   //滑块的初始位置
   var eleStartY=0;
   //手指的初始位置
   var szStartY=0;
    //手指的上一次移动完成时的位置
    var lastPoint=0;
    //move移动时的距离
    var pointDisX=0;
    //上一次完成的时间
    var lastTime=0;
    //每一次移动结束后的时间
    var timeDis=0;
  swiperWrap.addEventListener('touchstart',function (ev) {
    ev=ev||event;
    //拿到手指
    var touchC=ev.changedTouches[0];
    //滑块的初始位置
     eleStartY=css(list,"translateY");
    //手指的初始位置
     szStartY=touchC.clientY;
    //按下时手指的位置
     lastPoint=touchC.clientY;
     //按下时手指的时间
     lastTime=new Date().getTime()
     //正常滑时取消动画
     list.style.transition=''
     pointDisX=0;
     timeDis=1; //避免出现bug
     list.isSpeed=false;
  })
  swiperWrap.addEventListener('touchmove',function (ev) {
    ev=ev||event;
     //拿到手指
     var touchC=ev.changedTouches[0];
     //手指的实时位置
     var nowPoint=touchC.clientY;
     var nowTime=new Date().getTime();
     //移动时 本次与上一次移动的距离差
     pointDisX=nowPoint-lastPoint 
     //时间差
     timeDis=nowTime-lastTime
     lastPoint=nowPoint  
    lastTime=nowTime
     var szNowY=touchC.clientY;
     var szDisY=szNowY-szStartY
     var traslateY=szDisY+eleStartY
      // 当traslateY>0 是 元素向下
     //比例
      if (traslateY>0) {
        traslateY=0
        return 
      }
      console.log(traslateY) 
     traslateY=css(list,"translateY")+(pointDisX)
     css(list,"translateY",traslateY)
  })
  swiperWrap.addEventListener('touchend',function (ev) {
    if (list.isSpeed) {
      var traslateY=css(list,"translateY");
      if (traslateY>0) {
        traslateY=0
      }else if (traslateY<minY) {
        traslateY=minY
      }
      list.style.transition='.5s transform'
      css(list,'translateY',traslateY)
    }else{
      //滑动的速度
        var speed=pointDisX/timeDis
        //速度的区间
        speed=Math.abs(speed)<0.5?0:speed
        var traslateY=css(list,"translateY");
        traslateY=traslateY+speed*3000
          if (traslateY>0) {
            traslateY=0
          }else if (traslateY< minY) {
            traslateY=minY
          }
          list.style.transition='.5s '+' transform'
          css(list,"translateY",traslateY)
        }
  })
}