<template>
  <div></div>
</template>

<script>
var ws=new WebSocket("http://localhost:8000")

export default{
  mounted(){
    ws.addEventListener('open',this.handleWsOpen.bind(this),false)
    ws.addEventListener('close',this.handleWsClose.bind(this),false)
    ws.addEventListener('error',this.handleWsError.bind(this),false)
    ws.addEventListener('message',this.handleWsMessage.bind(this),false)
  },

  methods:{
    handleSendBtnClick(){
      const msg=this.msg;
      if(!msg.trim().length){
        return;
      }
    },
    handleWsOpen(e){},
    handleWsClose(e){},
    handleWsError(e){},
    handleWsMessage(e){}
  }
}
</script>