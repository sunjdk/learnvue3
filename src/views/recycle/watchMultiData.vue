<template>
  <div id="app">
    <div>watch 侦听数组</div>
    <div>{{title}}</div>
    <div><button @click="changeData">修改数据</button></div>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue';
export default{
  setup(){
    const info=reactive({
      name:'why',
      age:19
    })

    const title=ref('vue3 watch 属性学习')

    watch([()=>({...info}),title],([newInfo,newTitle],[oldInfo,oldTitle])=>{
      console.log("newInfo:",newInfo,"oldInfo:",oldInfo);
      console.log("newTitle:",newTitle,"oldTitle:",oldTitle);
    })

    const changeData=()=>{
      info.name="哈呵呵"
      title.value="这个是新址"
    }

    return {
      info,
      title,
      changeData
    }
  }
}
</script>
