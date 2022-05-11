01 | 组件渲染：vnode 到真实 DOM 是如何转变的？

https://www.youtube.com/watch?v=0XdoUrFKJQg&list=PL5d0qARooeQhwB6oKev6sQWLQ79n6OCYK&index=4
组件是一个抽象的概念，它是对一棵DOM树的抽象
在页面中写一个组件节点:
<hello-world-</helloword>

应用程序初始化
。一个组件可以通过“模板加对象描述”的方式创建
组件创建好以后是如何被调用并初始化的呢?
·因为整个组件树是由根组件开始渲染的
为了找到根组件的渲染入口，需要从应用程序的初始化过程开始分析


使用ensureRenderer().createApp()来创建app对象∶


在整个app对象创建过程中，Vue.js利用闭包和函数柯里化的技巧，很好地实现了参数保比如，在执行app.mount的时候，不需要传入渲染器render
因为在执行createAppAPI的时候渲染器render参数已经被保留下来了


因为Vue.js 不仅仅是为Web平台服务，它的目标是支持跨平台渲染createApp函数内部的app.mount方法是一个标准的可跨平台的组件渲染流程:


先思考一下，为什么要重写这个方法
而不把相关逻辑放在app对象的mount方法内部来实现呢?


重写的目的:
既能让用户在使用API时可以更加灵活也兼容了Vue.js 2.x的写法
比如app.mount的第一个参数就同时支持选择器字符串和DOM对象两种类型


核心渲染流程:创建vnode和渲染vnode

vnode本质上是用来描述DOM的JavaScript对象，它在Vue.js中可以描述不同类型的节
比如普通元素节点、组件节点等

引入vnode，可以把渲染过程抽象化
抽象
从而使得组件的抽象能力也得到提升
因为patch vnode的过程不同平台可以有自己的实现
跨平台
基于vnode再做服务端渲染、weex平台、小程序平台的渲染


核心渲染流程:创建vnode和渲染vnode
·首先这种基于vnode实现的MVVM框架，在每次render to vnode的过程中渲染组件会有一定的JavaScript耗时，特别是大组件


当我们去更新组件的时候，用户会感觉到明显的卡顿
虽然diff算法在减少DOM操作方面足够优秀，但最终还是免不了操作DOM所以说性能并不是vnode的优势


参数n1
表示旧的vnode，当n1为null的时候，表示是一次挂载的过程
参数n2
新的vnode节点，后续会根据这个vnode类型执行不同的处理逻
参数container
表示DOM容器，在vnode渲染生成DOM后，会挂载到container下面


创建组件实例
内部也通过对象的方式去创建了当前渲染的组件实例
instance保留了很多组件相关的数据，维护了组件的上下文
设置组件实例
包括对props、插槽，以及其他实例的属性的初始化处理


初始渲染主要做两件事情:渲染组件生成subTree、把subTree挂载到container中


在真实开发场景中，App和Hello组件的例子就是嵌套组件的场景
组件vnode主要维护着组件的定义对象，组件上的各种 props，而组件本身是一个抽象节点它自身的渲染其实是通过执行组件定义的render函数渲染生成的子树vnode来完成
然后再patch通过这种递归的方式，无论组件的嵌套层级多深，都可以完成整个组件树的渲



https://www.youtube.com/watch?v=XzrhjDu062o&list=PLQAeuK_iqYCcO1NhqCnl-6PGY-GCt713_
本课时
主要分析了组件的渲染流程
从入口开始，一层层分析组件渲染过程的源码
文中列举的代码都是我精简后的，主要用来辅助理解组件渲染这个主线流程重点放在理解组件的渲染流程上



源码通过monorepo的形式来管理源代码︰Mono :单个
Repo : repository仓库
主要是将许多项目的代码存储在同一个repository中;
这样做的目的是多个包本身相互独立，可以有自己的功能逻辑、单元测试等，同时又在同一个仓库下方便管理而且模块划分的更加清晰，可维护性、可扩展性更强;
源码使用TypeScript来进行重写:
口在Vue2.x的时候，Vue使用Flow来进行类型检测;
在Vue3.x的时候，Vue的源码全部使用TypeScript来进行重构，并且Vue本身对TypeScript支持也更好了;


使用Proxy进行数据劫持
在Vue2.x的时候，Vue3是使用Object.defineProperty来劫持数据的getter和setter方法的;口这种方式一致存在一个缺陷就是当给对象添加或者删除属性时，是无法劫持和监听的;
所以在Vue2.x的时候，不得不提供一些特殊的API，比如$set或$delete，事实上都是一些hack方法，也增加了开发者学习新的API的成本;
而在Vue3.x开始，Vue使用Proxy来实现数据的劫持，这个API的用法和相关的原理我也会在后续讲到;

由Options API到Composition API :
口在Vue2.x的时候，我们会通过Options API来描述组件对象;
Options API包括data、props、methods、computed、生命周期等等这些选项;口存在比较大的问题是多个逻辑可能是在不同的地方∶︰
√比如created中会使用某一个method来修改data的数据，代码的内聚性非常差;
Composition API可以将相关联的代码放到同一处进行处理，而不需要在多个Options之间寻找;


Hooks函数增加代码的复用性:
口在Vue2.x的时候，我们通常通过mixins在多个组件之间共享逻辑;
但是有一个很大的缺陷就是mixins也是由一大堆的Options组成的，并且多个mixins会存在命名冲突的问题;在Vue3.x中，我们可以通过Hook函数，来将一部分独立的逻辑抽取出去，并且它们还可以做到是响应式的;口具体的好处，会在后续的课程中演练和讲解（包括原理）;


.邂逅体验Vue3
vue3全家桶
十.自动化部署
Webpack5
二.Vue3基础语法
Vite2
核心技术
九.项目实战
TypeScript
三. Vue3组件化开发
Element-plus
made by coderwhy
Vue3+TypeScript
Echarts
四.Vue CLl详解
原理剖析
八. TypeScript
源码解读
五. Vue3核心语法
特技讲解
代码规范
七. Vuex状态管理
代码封装
六. vue-router路由
架构设计
