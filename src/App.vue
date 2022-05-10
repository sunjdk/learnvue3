<template>
<div>
  <DatePicker :value="now"></DatePicker>
</div>
</template>

<script>
import { defineComponent } from 'vue';
import DatePicker from './components/date-picker.vue';

export default{
    components: { DatePicker },
    data(){
      return{
        now:new Date()
      }
    }
}
</script>

<style lang="stylus">
div
  background red
</style>