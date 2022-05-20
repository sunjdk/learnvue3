class Live{
  roomName:string
  private id:string
  protected name:string

  constructor(roomName1:string,id1:string,name1:string){
    console.log('建立直播中');
    this.roomName=roomName1
    this.id=id1
    this.name=name1
  }
  start(){
    this.id
  }
}

class CarLive extends Live{
  constructor(roomName1:string,id1:string,name1:string){
    super(roomName1,id1,name1)
  }

  start(){
    super.name
  }
}

const live=new Live('1号','000001','bruce')
const carLive=new CarLive('car room','000002','bruce2')

console.log(live);
console.log(carLive);


class Live2{
  #name
  constructor(name:string){
    this.#name=name
  }
}


const live2=new Live2('live2')
console.log(live2.#name);

