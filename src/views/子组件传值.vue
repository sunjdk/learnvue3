<template>
  <div id="app">
    {{childData}}
    <hello-world @increment="getCounter" message="呵呵呵呵呵呵"></hello-world>
  </div>
</template>

<script setup>
import { ref } from "vue";
import HelloWorld from "./views/HelloWorld.vue";
const childData=ref("")

function getCounter(payload){
  console.log(payload);
  childData.value=payload
}
</script>