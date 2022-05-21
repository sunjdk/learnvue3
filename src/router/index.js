import { createRouter,createWebHistory } from 'vue-router'

import Layout from '../layout/index.vue'
// 公共路由

export const constantRoutes = [
  {
      path: '/redirect',
      component: Layout,
      hidden: true,
      children: [
          {
              path: '/redirect/:path(.*)',
              component:()=>import("../views/redirect/index.vue")
              // component: () => import('@/views/redirect/index.vue')
          }
      ]
  },
  { 
      path:'/:catchAll(.*)', 
      name:'/404',
      component:()=>import('../views/404.vue'),
      hidden:false
  },
  { 
    path:'/',
    name:"Home",
    component:Layout,
    hidden:false,
    // redirect:'/home',
    meta:{title:'首页',active:true,icon: "chart",noCache: false, link: null},
    children:[
      {path:'home',name:'Homeindex',component:()=>import('../views/Home.vue'),meta:{title:'首页',active:true,icon: "chart"}}
    ]
  },
  {
    path:'/demo',
    name:"Demo",
    component:Layout,
    hidden:false,
    meta:{title:'案例',active:true,icon: "chart",noCache: false, link: null},
    children:[
      {path:'kform',name:'Kform',component:()=>import('../views/Kform.vue') ,hidden:false,meta:{title:'动态表单',active:true,icon: "chart"}},
      {path:'bpmn',name:'Bpmn',component:()=>import('../views/Bpmnjs.vue') ,hidden:false,meta:{title:'工作流',active:true,icon: "chart"}},
      {path:'cesium',name:'Cesium',component:()=>import('../views/Cesiumjs.vue') ,hidden:false,meta:{title:'三维地球',active:true,icon: "chart"}},
      {path:'three',name:'Three',component:()=>import('../views/Threejs.vue') ,hidden:false,meta:{title:'3D世界',active:true,icon: "chart"}},
      {path:'typescript',name:'Typescript',component:()=>import('../views/Typescript.vue') ,hidden:false,meta:{title:'typescript',active:true,icon: "chart"}},
    ],
  }
]
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes:constantRoutes, // `routes: routes` 的缩写
})

export default router
