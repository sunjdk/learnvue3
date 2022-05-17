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
export default{
  setup(){
    const {  counter,doubleCounter,increment,decrement }=useCounter();

    // return{
    //   ...useCounter()
    // }
    
    return{
       counter,doubleCounter,increment,decrement
    }

  }
}
</script>