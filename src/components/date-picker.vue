<template>
  <div>
    <input type="text" :value="value">
    <div>
      content
    </div>
  </div>
</template>
<script>
export default{
  props:{
    value:{
      type:Date,
      default:()=>new Date
    }
  }
}
</script>