const Ws=require('ws')

;((Ws)=>{
  const server=new Ws.Server({port:8000});
  const init=()=>{
    function bindEvent(){
      server.on('open',handleOpen);
      server.on('close',handleClose);
      server.on('error',handleError);
      server.on('connection',handleConnection);
    }
  }

  function handleOpen(e){
    console.log('WebSocket open',e);
  }
  function handleClose(e){
    console.log('WebSocket close',e);
  }
  function handleError(e){
    console.log('WebSocket error',e);
  }
  function handleConnection(ws){
    console.log('WebSocket connection');
    ws.on('message',handleMessage)
  }
  function handleMessage(msg){
    console.log(msg);
    server.clients.forEach(function(c){
      c.send(msg)
    })
  }
  init()
})(Ws)