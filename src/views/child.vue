<template>
  <div>home</div>
  <div>{{name}}</div>
  <div>{{counter}}</div>

  <button @click="increment">home+1</button>
</template>

<script>
import { inject } from 'vue'
export default{
  setup(){
    const name=inject('name','')
    const counter=inject('counter',0)

    function increment(){
      counter.value++
    }

    return{
      name,
      counter,
      increment
    }
  }
}
</script>