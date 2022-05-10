<template>
  <h2 v-format-time>{{timestamp}}</h2>
</template>

<script>
import { ref } from 'vue'
export default{
  directives:{

  },
  setup(){
    const timestamp=1652159302
    return{
      timestamp
    }
  }
}
</script>