```typescript

function print<T> (data:T){
  console.log('data',data)
}

print <number> (999)

print <string> ('bruce')

print <boolean> (true)

class Print<T>{
  data:T
  construct(d:T){
    this.data=d
  }
}

const p=new Print<number>(999)
const p1=new Print<string>('bruce')

console.log('p',p)
console.log('p1',p1)

```

unility    Record<Keys,Type>  

```typescript

interface CatInfo{
  age:number,
  breed:string
}

type CatName="miffy" | "boris" | "mordred"
const cats:Record<CatName,CatInfo>={
  miffy:{age:10,breed:"Persion"},
  boris:{age:5,breed:"Maine Coon"},
  mordred:{age:16,bread:"British Shorthair"}
}

cat.boris;


```