<template>
  <div id="app">
    <date-picker v-model="date" format="MMM D YYYY"></date-picker>
    <input type="text" v-model="formatDate" />
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue'
import DatePicker from './DatePicker.vue';
import * as common from '../utils/common'
export default{
    setup() {
        const proxy = getCurrentInstance();
        console.log(proxy.appContext.config.globalProperties.$name);
    },
    components: { DatePicker },
    data(){
      return {
        date:'Mon Feb 19 2022 06:00:00 GMT+0800 '
      }
    },
    props:{
      value:{
        type:Date,
        default:()=>new Date()
      }
    },
    computed:{
      formatDate(){
        let {year,month,day}=common.getYearMonthDay(this.value)
        return `${year}-${month}-${day}`
      }
    }
}
</script>