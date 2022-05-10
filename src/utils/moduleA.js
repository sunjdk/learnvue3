//放大模式
var moduleA=(function(){
  var count=10;
  function showA(){
    count+=20;
    alert(count)
  }
  return {
    outA:showA
  }
}());



// 宽放大模式

var moduleA=(function(mod){
  var count=10;
  function showA(){
    count+=20;
    alert(count)
  }
  mod.outA=showA;
  return mod;
}(moduleA || {}))
