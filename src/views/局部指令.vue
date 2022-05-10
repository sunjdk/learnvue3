<template>
  <div>
    <input type="text" v-focus>
  </div>
</template>

<script>
export default{
  directives:{
    //局部指令
    focus:{
      mounted(el,bindings,vnode,preVnode){
        console.log("focus mounted");
        el.focus();
      }
    }
  }
}
</script>