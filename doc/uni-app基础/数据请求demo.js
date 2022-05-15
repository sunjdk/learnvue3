export default{
  data(){
    return {
      swipperList:[]
    }
  },
  onLoad(){
    this.getSwipperList()
  },
  methods:{
    async getSwipperList(){
      const {data:res}=await uni.$http.get("/api/public/v1/home/swiperdata")
      if(res.meta.status!==200){
        return uni.showToast({
          title:'数据请求失败',
          duration:1500,
          icon:'none'
        })
      }
      this.swipperList=res.message
    }
  }
}