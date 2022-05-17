<template>
<div>
  <!-- :value="now" @input="val=>value=>val" -->
  <DatePicker v-model="now"></DatePicker>
</div>
</template>

<script>
import DatePicker from './components/date-picker.vue';
export default{
    components: { DatePicker },
    data(){
      return{
        now:new Date("2019-5-18")
      }
    }
}
</script>

<style lang="stylus">

</style>