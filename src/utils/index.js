;((doc,Socket,Storage)=>{

  const oList=doc.querySelector("#list");
  const oMsg=doc.querySelector("#message");
  const oSendBtn=doc.querySelector("#send");
  const ws=new Socket("ws:localhost:8000/chat")
  let username="";
  const init=()=>{
    bindEvent()
  }
  function bindEvent(){
    oSendBtn.addEventListener('click',handleSendBtnClick,false);
    ws.addEventListener('open',handleOpen,false);
    ws.addEventListener('close',handleClose,false);
    ws.addEventListener('error',handleError,false);
    ws.addEventListener('message',handleMessage,false);
  }
  
  function handleSendBtnClick(){
    console.log('Send message.');
    const msg=oMsg.value;
    if(!msg.trim().length){
      return;
    }
    ws.send(JSON.stringify({
      user:username,
      dateTime:new Date().getTime(),
      message:msg
    }))

    oMsg.value="";
  }

  function handleOpen(){
    console.log('Websocket open');
    username=Storage.getItem('username')
    if(!username){
      location.href='entry.html';
      return;
    }
  }

  function handleClose(){
    console.log('Websocket close');
  }

  function handleError(){
    console.log('Websocket error');
  }

  function handleMessage(e){
    console.log('Websocket message');
    const msgData=JSON.parse(e.data)
    oList.appendChild(createMsg(msgData))
  }

  function createMsg(data){
    const {user,dataTime,message}=data;
    const oItem=doc.createElement('li');
    oItem.innerHTML=`
      <p>
        <span>${user}</span>
        <i>${new Date(dateTime)}</i>        
      </p>
      <p>消息：${message}</p>
    `
  }

  init();
})(document,WebSocket,localStorage)