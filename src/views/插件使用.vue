<template>
  <div id="app">
    <teleport to="#why">
      <h2>当前计数</h2>
      <button>+1</button>
    </teleport>
    <teleport to="#why">
      <span>呵呵呵呵</span>
    </teleport>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue'
export default{
  setup(){
    const proxy=getCurrentInstance()
    console.log(proxy.appContext.config.globalProperties.$name);
  }
}
</script>