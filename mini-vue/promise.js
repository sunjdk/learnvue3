const PEDING="PEDING"
const FULFILLED="FULFILLED"
const REJECTED="REJECTED"

class MyPromise{
  constructor(executor){
    this.status=PEDING;
    this.value=undefined;
    this.reason=undefined;
    this.onResolvedCallbacks=[];
    this.onRejectedCallbacks=[];

    //成功回调
    let resolve=(value)=>{
      this.status=FULFILLED;
      this.value=value;
      this.onResolvedCallbacks.map((fn)=>fn());
    }

    //失败回调
    let reject=(reason)=>{
      if(this.status===PEDING){
        this.status=REJECTED;
        this.reason=reason;
        this.onRejectedCallbacks.map((fn)=>fn());
      }
    }

    try{
      executor(resolve,reject)
    }catch(error){
      reject(error)
    }
  }
  then(onFulfilled,onRejected){
    
  }
  catch(onRejected){

  }
}