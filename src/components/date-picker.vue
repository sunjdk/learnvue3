<template>
  <div>
    <input type="text" :value="value" @blur="blur" @focus="focus">
    <div class="pannel" v-if="isVisible">
      <div class="pannel-nav">
        <span @click="prevYear">&lt;</span>
        <span @click="prevMonth">&lt;&lt;</span>
        <span>{{time.year}}年</span>
        <span>{{time.month+1}}月</span>
        <span @click="nextMonth">&gt;&gt;</span>
        <span @click="nextYear">&gt;</span>
      </div>
      <div class="pannel-content">
        <div class="days">
          <span class="cell" v-for="i in 7" :key="`_`+i">{{weekDays[i-1]}}</span>
          <!-- 直接列出一个 6*7 的一个列表 99 乘法表 -->
          <div v-for="i in 6" :key="i">
          <!-- 判断是不是当月的日期，不是就变灰色 -->
            <span class="cell cell-days" 
            @click="chooseDate(visibeDays[(i-1)*7+(j-1)])"
            :class="[
              {notCurrentMonth:!isCurrentMonth(visibeDays[(i-1)*7+(j-1)])},
              {today:isToday(visibeDays[(i-1)*7+(j-1)])},
              {select:isSelect(visibeDays[(i-1)*7+(j-1)])}
              ]" 
            v-for="j in 7" :key="j">
              {{visibeDays[(i-1)*7+(j-1)].getDate()}}
            </span>
          </div>
        </div>
      </div>
      <div class="pannel-foot">
        今天
      </div>
    </div>
  </div>
</template>
<script>
import * as common from '../utils/common'
export default {
  directives:{
    // clickOutside:{
    //   mounted(el,bindings,vnode){
    //     console.log('vnode',vnode);
    //     let handler=(e)=>{
    //       console.log(e.target);
    //       if(el.contains(e.target)){
    //         this.isVisible=true
    //       }else{
    //         this.isVisible=false
    //       }
    //     }
    //     el.handler=handler;
    //     //把事件绑定给document
    //     document.addEventListener('click',handler)
    //   },
      
    //   unmounted(el){
    //     document.removeEventListener('click',el.handler)
    //   }
    // }
  },
  data(){
    let {year,month}=common.getYearMonthDay(this.value)
    return {
      weekDays:['日','一','二','三','四','五','六'],
      time:{year,month},
      isVisible:false //控制面板师傅可见
    }
  },
  props:{
    value:{
      type:Date,
      default:()=>new Date()
    }
  },
  mounted(){
    this.visibeDays
  },
  computed:{
    visibeDays(){
      // 获取当前日期的年月
      // let {year,month}=common.getYearMonthDay(this.value)
      let {year,month}=common.getYearMonthDay(common.getDate(this.time.year,this.time.month,1))
      //当前月份第一天
      let currentFirstDay=common.getDate(year,month,1)
      let week=currentFirstDay.getDay()
      // 每个月开始与第几天
      let startDay=currentFirstDay-week*60*60*1000*24
      console.log(week);
      //循环 42 天，造出日历 二维表格
      let arr=[]
      for(let i=0;i<42;i++){
        arr.push(new Date(startDay+i*60*60*1000*24));
      }
      return arr
    },
    FormData(){
      let {year,month,day}=common.getYearMonthDay(this.value)
      return `${year}-${month+1}-${day}`   //getFullYear
    }
  },
  methods:{
    //判断一个日期是不是当月   2018-5-18   2018-4-28  2018-6-8  
    isCurrentMonth(date){
      let {year,month}=common.getYearMonthDay(common.getDate(this.time.year,this.time.month,1))
      let {year:y,month:m}=common.getYearMonthDay(date)
      return year===y && month===m
    },
    //是否是今天
    isToday(date){
      let {year,month,day}=common.getYearMonthDay(this.value)
      let {year:y,month:m,day:d}=common.getYearMonthDay(date) 
      return year === y && month===m && day===d
    },
    focus(){
      this.isVisible=true
    },
    blur(){
      this.isVisible=false
    },
    //选择日期的触发方法
    chooseDate(date){
      this.time=common.getYearMonthDay(date);
      this.$emit('input',date)
      this.blur(); //关闭弹窗
    },
    //是否选中了
    isSelect(date){
      let {year,month,day}=common.getYearMonthDay(this.value)
      let {year:y,month:m,day:d}=common.getYearMonthDay(date) 
      return year === y && month===m && day===d
    },
    prevYear(){
      let d=common.getDate(this.time.year,this.time.month,1)
      d.setMonth(d.getYear()-1);      
      this.time=common.getYearMonthDay(d)
    },
    prevMonth(){
      // 获取当前年月的一个日期
      let d=common.getDate(this.time.year,this.time.month,1)
      d.setMonth(d.getMonth()-1);      
      this.time=common.getYearMonthDay(d)
    },
    nextMonth(){
      let d=common.getDate(this.time.year,this.time.month,1)
      d.setMonth(d.getMonth()+1);      
      this.time=common.getYearMonthDay(d)  
    },
    nextYear(){
      let d=common.getDate(this.time.year,this.time.month,1)
      d.setMonth(d.getYear()+1);      
      this.time=common.getYearMonthDay(d)
    }
  }
}
</script>

<style lang="stylus" scoped>
.pannel
  width 32*7px;
  position absolute;
  background: #fff;
  box-shadow: 2px 2px 2px pink,-2px -2px 2px pink;
  .pannel-nav
    display: flex;
    justify-content: space-around;
    height 30px;
    span 
      cursor: pointer
      user-select: none;
      line-height: 30px
  .pannel-content
    .cell
      display inline-flex;
      justify-content center;
      align-items center;
      width 32px;
      height 32px;
      font-weight: bold;
    .cell-days:hover,.select
      border: 1px solid pink;
      box-sizing: border-box;
  .pannel-foot
    height 30px;
    text-align: center
.notCurrentMonth{
  color:gray;
}
.today
  background: red;
  color:#fff;
  border-radius: 4px;
</style>