```typescript

interface CarProps{
  name:string
  age:number
}

class Car implements CarProps{
  private name:string
  age:number
  constructor(name:string,age:number){
    this.name=name
    this.age=age
  }
}

```