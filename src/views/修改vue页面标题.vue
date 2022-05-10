<template>
  <div id="app">
    <div>counter:{{counter}}</div>
    <div>counter*2:{{doubleCounter}}</div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
import useCounter from './views/hooks/useCounter'
import useTitle from './views/hooks/useTitle'
export default{
  setup(){
    // document.title="呵呵呵呵呵呵"
    const titleRef=useTitle("我是默认值")

    setTimeout(()=>{
      titleRef.value="新标题"
    },3000)

    return{
       ...useCounter(),
       useTitle
    }
  }
}
</script>