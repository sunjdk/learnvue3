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

Pick<Type,Keys>

```typescript

interface Todo{
  title:string;
  description:string;
  completed:boolean;
}

type TodoPreview=Pick<Todo,"title" | "completed">

const todo:TodoPreview={
  title:"Clean room",
  completed:false,
}

todo;
```