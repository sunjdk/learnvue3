import request from '../utils/request'

// 获取路由
export const getRouters = () => {
  console.log(34324234);
  return request({
    url: '/getRouters',
    method: 'get'
  })
}