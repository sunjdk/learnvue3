import { createRouter,createWebHistory } from 'vue-router'
const routes = [
  {path:'/',name:"Home",component:()=>import('../views/Home.vue')},
  { path: '/kform', name: 'Kform',component:()=>import('../views/kform.vue') },
  { path: '/bpmn', name:'Bpmn', component:()=>import('../views/bpmnjs.vue') },
  { path:'/:catchAll(.*)', name:'/404',component:()=>import('../views/404.vue')}
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

export default router
