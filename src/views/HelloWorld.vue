<template>
  <div>hello world</div>
  <div>{{message}}</div>

  <button @click="emitEvent">发送事件</button>
</template>
<script setup>
import { defineProps } from 'vue';
const porps=defineProps({
  message:{
    type:String,
    default:"呵呵呵"
  }
})

const emit=defineEmits(["increment","decrement"])


function emitEvent(){
  emit('increment','100000')
}
</script>