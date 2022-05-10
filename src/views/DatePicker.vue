<template>
  <input type="text" :value="value" class="form-input" ref="input" placeholder="请选择日期"/>
</template>

<script>
import Pikaday from 'pikaday'
export default {
  props:{
    value:{required:true},
    format:{default:'YYYY-MM-DD'},
    options:{default:{}}
  },
  mounted(){      
    const picker = new Pikaday({
        field: this.$refs.input,
        format: this.format,
        onSelect: ()=>{this.$emit('input',picker.toString())},
        ...this.options
    });
  }
}
</script>