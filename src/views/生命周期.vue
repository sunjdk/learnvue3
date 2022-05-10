<template>
  <div id="app">
    <div>生命周期</div>
    <div>onMounted</div>
    <table>
      <tr>
        <td>beforeCreate</td>
        <td>not needed</td>
      </tr>
      <tr>
        <td>Created</td>
        <td>not needed</td>
      </tr>

      <tr>
        <td>beforeMount</td>
        <td>onBeforeMount</td>
      </tr>

      <tr>
        <td>mounted</td>
        <td>onMounted</td>
      </tr>

      <tr>
        <td>beforeUpdate</td>
        <td>onBeforeUpdate</td>
      </tr>

      <tr>
        <td>updated</td>
        <td>onUpdated</td>
      </tr>

      <tr>
        <td>beforeUnmount</td>
        <td>onBeforeUnmount</td>
      </tr>

      <tr>
        <td>unmounted</td>
        <td>onUnmounted</td>
      </tr>

      <tr>
        <td>activated</td>
        <td>onActivated</td>
      </tr>

      <tr>
        <td>deactivated</td>
        <td>onDeactived</td>
      </tr>
    </table>
    <h2>{{title}}</h2>
    <div><button @click="changeData">onUpdated</button></div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated, ref } from 'vue';
export default{
  setup(){
    const title=ref('生命周期测试')
    onMounted(()=>{      
      console.log('onmounted 生命周期');    
    })

    onUpdated(()=>{
      console.log('onUpdated 生命周期1');
    })

    onUpdated(()=>{
      console.log('onUpdated 生命周期2');
    })

    onUnmounted(()=>{
      console.log('onUnmounted 卸载生命周期');
    })

    function changeData(){
      title.value="改变吗"
    }
    return {
      title,
      changeData
    }
  }
}
</script>
