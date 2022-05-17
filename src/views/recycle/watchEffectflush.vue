<template>
  <div id="app">
    <div ref="title">vue3</div>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';
export default{
  setup(){
    const title=ref(null)
    
    // console.log(title.value);

    watchEffect(()=>{
      console.log(title.value);
    },{
      flush:"post"  //提前执行--默认值   "post" dom 挂载完了执行  "sync" 强制效果同步触发 非常低效率
    })

    return {
      title
    }
  }
}
</script>
