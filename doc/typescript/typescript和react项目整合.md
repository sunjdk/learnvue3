1.在创建react项目的时候选择 typescript 类型的模板 参考连接 [react文档](https://create-react-app.dev/docs/adding-typescript/)

```bash

npx create-react-app my-app --template typescript

yarn create react-app my-app --template typescript

```

javascript 项目升级 typescript

```bash

npm install --save typescript @types/node @types/react @types/react-dom @types/jest

yarn add typescript @types/node @types/react @types/react-dom @types/jest

```


App.tsx demo

```typscript
import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';

type TiltleProps={
  name:string
}

/**
* interface TitleProps{
*   name:string
*   desc?:string
* }
*/


const Title:React.FC<TitleProps>=({ name ,desc})=>{
  return <p>{name}</p>
}

const App:React.FC=()=>{
  const [title,setTitle]=useState(1000)
  return {
    <div>
      <Title name="Bruce" desc="..."/>      
    </div>
  }
}

export default App;
```