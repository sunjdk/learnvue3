<template>
  <date-picker :value="date" format="MMM D YYYY" :options="{firstDay:2}"></date-picker>
</template>
<script>
import Pikaday from 'pikaday'
import DatePicker from './views/DatePicker.vue';
import '/node_modules/pikaday/css/pikaday.css'
export default{
	components: { DatePicker },
    data(){
      return {
        // date:'2022-05-10'
        date:'May 10 2022'
      }
    }
}
</script>
<style scoped>

</style>