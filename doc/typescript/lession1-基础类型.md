https://typescript.bootcss.com/functions.html

布尔值

```javascript
let isDone:boolean=false;
```

数字

```javascript
let decLiteral:number=6;
let hexLiteral:number=0xf00d;
let binaryLiteral:number=0b1010;
let octalLiteral:number=0o744;
```

字符串

```javascript
let name:string="bob";
let name:string=`Gene`
let age:number=26;
let sentence:string=`hello,my name is${name}.I'll be ${age+1} years old next month.`;
```

数组：

```javascript
let list:number[]=[1,2,3];
let list:Array<number>=[1,2,3];
```

元组Tuple：

```javascript
let x:[string,number];
x=['hello',10];

console.log(x[0].substr(1))
console.log(x[1].substr(1))
```

枚举enum:

```javascript
enum Color{Red,Green,Blue}
let c:Color=Color.Green;

enum Color {Red=1,Green,Blue}
let c:Color=Color.Green;

enum Color{Red=1,Green=2,Blue=4}
let c:Color=Color.Green;

enum Color{Red=1,Green,Blue}
let colorName:string=Color[2];

enum LiveStatus{
    SUCCESS=0,
    FAIL=-1,
    STREAMING=1
}
alert(colorName)
```

任意值：

```javascript
let notSure:any=4;
notSure="maybe a string instead";
notSure=false;

let notSure:any=4;
notSure.ifItExists();
notSure.toFixed();

let prettySure:Object=4;
prettySure.toFixed();

let list:any[]=[1,true,"free"];
list[1]=100;
```

空值：

```javascript
function warnUser:void{
    alert("this is my warning message");
}


let unusable:void=undefined;
```

null 和 undefined

```javascript
let u:undefined=undefined;
let n:null=null;
```

never类型

```javascript
function error(message:string):never{
    throw new Error(message);
}

function fail(){
    return error("something failed");
}

function infiniteLoop():never{
    while(true){}
}
```

类型断言

```javascript
let someValue:any="this is a string";
let strLength:number(<string>someValue).length;

let someValue:any="this is string";
let strLength:number=(someValue as value).length;
```

