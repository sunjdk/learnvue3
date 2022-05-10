<template>
  <div id="app">
    <home></home>
    <div>父组件数据：</div>
    <div>{{counter}}</div>
    <button @click="increment">app+1</button>
  </div>
</template>

<script>
import { provide, readonly, ref } from 'vue';
import child from './child.vue';
export default{
	components: { child },
  setup(){
    const name=ref("coderwhy")
    let counter=ref(100);
  
    provide("name",readonly(name))
    provide("counter",readonly(counter))

    function increment(){
      counter.value++
    }

    return{
      counter,
      increment
    }

  }
}
</script>