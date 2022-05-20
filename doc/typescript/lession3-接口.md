```javascript

interface CatInfo{
  age:number;
  breed:string;
}

type CatName="miffy" | "boris" | "mordred" | "bruce"

const casts:Record<CatName,CatInfo>={
  miffy:{age:10,breed:"Persian"},
  boris:{age:5,breed:"Maine Coon"},
  mordred:{age:15,breed:"British Shorthair"},
  bruce:{age:16,breed:"british Shorthair"}
}

const obj1:Record<string,boolean>={
  name:true
}

```


Omit<Type,Keys>

```javascript

interface Todo{
  title:string,
  description:string,
  completed:boolean;
  created:number;
}

type TodoPreview=Omit<Todo,"description">;

const todo:TodoPreview={
  title:"Clean room",
  completed:false,
  createdAt:1658923231,
}

type TodoInfo=Omit<Todo,"completed" | "createdAt">
const todoInfo:TodoInfo={
  title:"pick up kids",
  description:"Kingrrtem close at spm"
}
```