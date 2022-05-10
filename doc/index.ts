import axios from 'axios'
import type { AxiosInstance,AxiosRequestConfig} from 'axios'

interface HYRequestInterceptors{
  requestInterceptor:(config:AxiosRequestConfig)=>AxiosRequestConfig
  requestInterceptorCatch:(error:any)=>any
  responseInterceptor:(res:AxiosResponse)=>AxiosResponse
  responseInterceptorCatch:(error:any)=>any
}

class HYRequest{
  instance:AxiosInstance
  constructor(config:AxiosRequestConfig){
    this.instance=axios.create(config)
  }
  request(config:AxiosRequestConfig):void{
    this.instance.request(config).then((res)=>{
      console.log(res)
    })
  }
}

export default HYRequest