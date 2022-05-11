一、安装

1. 在页面上以 [CDN 包](https://v3.cn.vuejs.org/guide/installation.html#cdn)的形式导入。
2. 下载 JavaScript 文件并[自行托管](https://v3.cn.vuejs.org/guide/installation.html#下载并自托管)。
3. 使用 [npm](https://v3.cn.vuejs.org/guide/installation.html#npm) 安装它。
4. 使用官方的 [CLI](https://v3.cn.vuejs.org/guide/installation.html#命令行工具-cli) 来构建一个项目，它为现代前端工作流程提供了功能齐备的构建设置 (例如，热重载、保存时的提示等等)



```bash
$ npm install vue@next

$ npm install -D @vue/compiler-sfc

yarn global add @vue/cli
# 或

npm install -g @vue/cli


vue upgrade --next
```





```bash
# npm 6.x
$ npm init vite@latest <project-name> --template vue

# npm 7+，需要加上额外的双短横线
$ npm init vite@latest <project-name> -- --template vue

$ cd <project-name>
$ npm install
$ npm run dev
```



```bash
$ yarn create vite <project-name> --template vue
$ cd <project-name>
$ yarn
$ yarn dev
```





```html

<html>
    <head>
        <title>vue3 第一课</title>
    </head>
    <body>
        <div id="counter">
            <h1>
                counter:{{num}} 
            </h1>
        </div>
        
        <script>
        	const Counter={
                data(){
                    return{
                        num:0
                    }
                }
            }
            let app=Vue.createApp(Counter).mount("#counter")
        </script>
    </body>
</html>


```





```javasc
import {createApp} from 'vue'
import App from './App.vue'

const app=createApp(App)
app.mount('#app')
```



vue 3  可以没有根标签



```javascript
import {h} from 'vue'
export default{
    name:'App',
    setup(){
        let name="张三"
        let age=18
        function sayHello(){
            alert(2343234+"${name}")
        }
        return {
            name,
            age,
            sayHello
        }
        
        return ()=>{return h('h1','尚硅谷')}
    }
}
```





demo2

```javascript
{{name}}

{{age}}

@click="changeInfo"
{{job.type}}
{{job.salary}}


import {ref} from 'vue'
export default{
    name:'App',
    setup(){
        //let name="张三"
        //let age=90
        
        const name=ref('name')
        const age=ref('age')
        const job=ref({
            type:'前端工程师',
            salary:'30k'
        })
        
        const job=reactive({
            type:'前端工程师',
            salary:'30k'
        })
        
        console.log(name)
        // RefImpl{}
        //reference implement  引用实现对象   引用对象
        
        function changeInfo(){
            //name="里斯"
            //age=89
            name.value="李四"
            age.value=89
            job.value.type="后端工程师"
            job.value.salary="40k"
        }
        
        return {
            name,
            age,
            changeInfo,
            job
        }
    }
}
```





```javasc
import {reactive} from 'vue'
export default{
	name:'App',
	setup(){
		let person=reactive({
			name:'张三',
			age:19,
			job:{
				type:'前端工程师',
				salary:'30k'，
				a:{
					b:{
						c:666
					}
				}
			}，
			hobby:['抽烟','喝酒','烫头']
		})
		
		function changeInfo(){
			person.name="李四"
			person.age=43
			person.job.type="UI设计师"
			person.job.salary="60k"
			person.job.a.b.c=898
			person.hobby[0]='学习'
		}
		
		return {
			person,
			changeInfo
		}
	}
}
```

