<template>
  <div>抱歉，你访问的页面走丢了！！！</div>
</template>
<script setup>
function redirect(){
  setTimeout(()=>{
    window.location.href="/"
  },3000)
}
redirect()
</script>