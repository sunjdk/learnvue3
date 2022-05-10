<template>
  <div id="app">
    <div>counter:{{counter}}</div>
    <div>counter*2:{{doubleCounter}}</div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <div>存储{{data}}</div>

    <div class="scroll">
      <div class="scrolly-x">scrollX:{{scrollX}}</div>
      <div class="scrolly-y">scrollY:{{scrollY}}</div>
    </div>


    <div class="mouse">
      <div class="mousey-x">mouseX:{{mouseX}}</div>
      <div class="mousey-y">mouseY:{{mouseY}}</div>
    </div>

    <button @click="chageData">修改存储</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import {useCounter,useTitle,useMousePosition,useLocalStorage} from './views/hooks'
export default{
  setup(){
    // document.title="呵呵呵呵呵呵"
    const titleRef=useTitle("我是默认值")
    const scrollX=ref(0)
    const scrollY=ref(0)

    document.addEventListener('scroll',()=>{
      scrollX.value=window.scrollX
      scrollY.value=window.scrollY
    })

    //鼠标位置
    const { mouseX , mouseY } = useMousePosition();

    //存储钩子调用

    const data=useLocalStorage("info")


    setTimeout(()=>{
      titleRef.value="新标题"
    },3000)

    function chageData(){
      console.log(data.value);
      data.value="呵呵呵呵"
    }

    return{
       ...useCounter(),
       useTitle,
       scrollX,
       scrollY,
       mouseX,
       mouseY,
       data,
       chageData
    }
  }
}
</script>

<style scoped>
#app{
  width: 2000px;
  height: 1000px;
}
.scroll{
  position: fixed;
  right:50px;
  bottom:50px;
}

.mouse{
  position: fixed;
  right:150px;
  bottom:150px;
}
</style>