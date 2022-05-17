<template>
  <div>
    <h2>
      {{fullName}}

      <button @click="changeFirstName">修改第一个name</button>
    </h2>
  </div>
</template>


<script>
import { ref, computed } from 'vue'
export default{
  setup(){
    const firstName=ref('Kobe')
    const lastName=ref("Bryant")

    // const fullName=computed(()=>firstName.value+'/'+lastName.value)

    const fullName=computed({
      get:()=>firstName.value+" "+lastName.value,
      set(newValue){
        const names=newValue.split(" ")
        firstName.value=names[0]
        lastName.value=names[1]
      }
    })

    const changeFirstName=()=>{
      firstName.value="James"
    }
    return{
      fullName
    }
  }

}
</script>