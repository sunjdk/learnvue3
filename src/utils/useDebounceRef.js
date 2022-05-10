import { customRef } from 'vue'
//自定义ref
export default function(value){
  //防抖函数
  return costomRef((track,trigger)=>{
    return {
      get(){
        track();//收集依赖
        return value;
      },
      set(newValue){        
        clearTimeout(timer)
        timer=setTimeout(()=>{
          value=newValue;
          trigger
        },1000)
      }
    }
  })
}