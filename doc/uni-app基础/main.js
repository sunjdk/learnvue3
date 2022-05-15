import Vue from 'vue'
import App from './App'

import { $http } from '@escook/request-miniprogram'
import { unix } from 'dayjs'

unix.$http=$http

// 请求拦截器
$http.beforeRequest=function(options){
  uni.showLoading({
    title:'加载中...'
  })
}
// 响应拦截器
$http.afterRequest=function(options){
  uni.hideLoading()
}


uni.$showMsg=function(title='数据加载失败！',duration=1500){
  uni.showToast({
    title,
    duration,
    icon:'none'
  })
}

Vue.config.productTip=false
App.mpType='app'
const app=new Vue({
  ...App
})

app.$mount()
