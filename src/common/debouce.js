export function debouce(func, delay = 50) {
 
    var handle;
    　　//这里用到了闭包，一个函数里面return另一个函数，变量相互签引导致垃圾回收机制不会销毁handle变量
            return function(){
    　　　　　　//在这里一定要清除前面的定时器，然后创建一个新的定时器
                clearTimeout(handle) 
    　　　　　　//最后这个定时器只会执行一次也就是事件触发完成之后延迟500毫秒再触发（这里的变量赋值是跟定时器建立连接，进行地址赋值，一定要重新赋值给handle  
             handle=setTimeout(function(){
                func()
             },delay)
            }
    
}