async getSwiperList(){
  const {data,res}=await uni.$http.get('/api/public/v1/home/swiperdata')
  if(res.meta.status!==200) return uni.$showMsg()
  this.swiperList=res.message
}