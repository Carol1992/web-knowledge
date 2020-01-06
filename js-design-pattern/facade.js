//外观模式：封装一些比较复杂或需要经常重复的代码，暴露一些简洁的接口来调用内部的功能，例如使用jQuery对DOM进行操作，jQuery封装了对于DOM操作比较复杂的代码，会考虑到性能、浏览器兼容性等，然后我们直接调用jQuery提供的API接口既可
//项目中一些公用的代码，例如封装一个数据请求模块、一个JS报错监控模块、对数组、对象、方法的有效性进行检验
var addMyEvent = function( el,ev,fn ){
 
  if( el.addEventListener ){
           el.addEventListener( ev,fn, false );
     }else if(el.attachEvent){
           el.attachEvent( "on" + ev, fn );
     } else{
          el["on" + ev] = fn;
   }

};
