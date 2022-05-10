<template>
  <div>
    <ul>
      <li>watchEffect 用于自动收集响应式数据的依赖</li>
      <li>watch 需要手动指定侦听的数据源</li>
      <li>watchEffect 停止侦听</li>
      <li>watchEffect 侦听器的返回值是个函数，需要停止侦听的时候，在相应的位置执行一下该返回函数即可</li>

      <button @click="changeName">修改name</button>
      <button @click="changeAge">修改age</button>
    </ul>
  </div>
</template>

<script>
import { ref, watch, watchEffect } from 'vue'

export default{
  setup(){
    const name=ref("why")
    const age=ref(18)
    
    const changeName=()=>name.value="kobe"
    const changeAge=()=>{
      age.value++;
      if(age.value>25){
        stop()
      }
    }

    //生命周期函数在 setup 立即执行
    const stop=watchEffect(()=>{
      console.log("name:",name.value,"age:",age.value);
    })
    watch()

    return{
      name,age,
      changeName,
      changeAge
    }
      }
}
</script>