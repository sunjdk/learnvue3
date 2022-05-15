<template>
  <view class="my-search-container" :style="{'background-color':bgColor}" @click="searchBoxHalder">
    <view class="my-search-box" :style="{'border-radius':radius+'px'}">
      <uni-icons type="search" size="17"></uni-icons>
      <text class="placeholder">搜索</text>
    </view>
  </view>
</template>

<script>
const sysInfo=uni.getSystemInfoSync()
this.wh=sysInfo.widowHeight-50;
export default{
  props:{
    bgColor:{
      type:String,
      default:"#c00000"
    },
    radius:{
      type:Number,
      default:18
    }
  },
  data(){
    return{

    }
  },
  methods:{
    searchBoxHalder(){
      console.log('~~~~~~~~~~~~');
      this.$emit('myclick')
    }
  }
}
</script>
<style>
.my-search-container{
  background-color: #c00000;
  height:50px;
  padding:0 10px;
  display: flex;
  align-items: center;
}
.my-search-box{
  height:36px;
  background-color: #ffffff;
  border-radius: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.placeholder{
  font-size:15px;
  margin-left:5px;
}
</style>