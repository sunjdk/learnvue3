<template>
  <div>
    <button v-why @click="increment">当前计数：{{counter}}</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default{
  directives:{
    why:{
      created(el,bindings,vnode,preVnode){
        console.log('why created');
        console.log('el',el);
        console.log('bindings',bindings);
        console.log('vnode',vnode);
        console.log('prevnode',preVnode);
      },
      beforeMount(){
        console.log('why beforeMount');
      },
      mounted(){
        console.log('why mounted');
      },
      beforeUpdate(){
        console.log('why beforeUpdate');
      },
      updated(){
        console.log('why updated');
      },
      beforeUnmount(){
        console.log('why beforeUnmount');
      },
      unmounted(){
        console.log('why unmounted');
      }
    }
  },
  setup(){
    const counter=ref(0)
    const increment=()=>counter.value++;

    return{
      counter,
      increment
    }
  }
}
</script>