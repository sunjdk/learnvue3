```javascript

function abcde(a:string,b:string):number{
  return a+b
}

function abcde(name:string,age?:number){
  if(age===undefinded) return -1
  return
}
```

箭头函数

```javascript

const func = ()=>{

}

const func2=()=>{
  return 1
}

```


断言

```javascript
type Data={
  userId:number,
  id:number,
  title:string,
  completed:boolean
}


async function getData(){
  const res=await fetch("http://api.cc.com/v1/list")
  const data=await res.json() as Data
}

const data1:Data ={
  "userId":1,
  "id":1,
  "title":"delectus aut autem",
  "completed":false
}

type Bata={
  name:string
}

const beta=data1 as unknown as Beta

```