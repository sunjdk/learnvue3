moduleA=(function(mod){
  function showC(){
    alert('hello world');
  }
  mod.outC=showC;
  return mod;
})(moduleA)

//放大模式

moduleA=(function (mod){
  function showC(){
    alert("hello world");
  }
  mod.outC=showC;
  return mod;
}(moduleA || {}))