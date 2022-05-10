<template>
  <div id="app">
    <div>https://www.youtube.com/watch?v=QNnZHOqc7EE&list=PLQAeuK_iqYCcO1NhqCnl-6PGY-GCt713_&index=17</div>
    <div>watch 侦听数组</div>
    <div>{{title}}</div>
    <div>{{info.friend.name}}</div>
    <div><button @click="changeData">修改数据</button></div>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue';
export default{
  setup(){
    const info=reactive({
      name:'why',
      age:19,
      friend:{
        name:"kaola"
      }
    })

    const title=ref('vue3 watch 属性学习')

    watch(()=>({...info}),(newInfo,oldInfo)=>{
      console.log("newInfo:",newInfo,"oldInfo:",oldInfo);
    },{
      deep:true,
      immediate:true
    })

    const changeData=()=>{
      info.friend.name="和我和好"
    }

    return {
      info,
      title,
      changeData
    }
  }
}
</script>
