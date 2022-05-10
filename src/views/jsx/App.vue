<script lang='jsx'>
import HelloWorldVue from "./HelloWorld.vue";

export default{
  // cnpm install @vue/babel-plugin-jsx  -D 安装 babel 插件以支持 jsx 语法
  data(){
    return{
      counter:0
    }
  },
  render(){
    const increment=()=>this.counter++;
    const decrement=()=>this.counter--;
    return (
      <div>
        <h2>当前计数：{this.counter}</h2>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>

        <HelloWorldVue>
          {{default:props=><button>我是按钮</button>}}
        </HelloWorldVue>
      </div>
    )
  }
}
</script>

