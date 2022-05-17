<template>
  <div id="app">
    <div>https://www.youtube.com/watch?v=0k_ueJogQwY&list=PLQAeuK_iqYCcO1NhqCnl-6PGY-GCt713_&index=17</div>
    <div ref="title">watch 侦听单个数据源</div>
    <div>{{info.name}}</div>
    <div>{{student}}</div>
    <div><button @click="changeData">修改数据</button></div>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue';
export default{
  setup(){
    const info=reactive({
      name:"why",
      age:18
    })

    const student=ref("张三")
    //1.传入的是 getter 函数
    // watch(()=>info.name,(newValue,oldValue)=>{
    //   console.log('newValue',newValue,'oldValue',oldValue);
    // })

    // watch(info,(newValue,oldValue)=>{
    //   console.log('newValue',newValue,'oldValue',oldValue);
    // })

    // watch(student,(newValue,oldValue)=>{
    //   console.log('newValue',newValue,'oldValue',oldValue);
    // })


    watch(()=>{
      return {...info}
    },(newValue,oldValue)=>{
      console.log('newValue',newValue,'oldValue',oldValue);
    })

    const changeData=()=>{
      info.name="呵呵呵"
      student.value="李四"
    }
    return {
      info,
      student,
      changeData
    }
  }
}
</script>
