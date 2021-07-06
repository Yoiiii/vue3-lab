import {createRouter,createWebHashHistory} from 'vue-router'
import Index from '@/views/Index.vue'

const router = createRouter({
  history:createWebHashHistory(),//hash 模式
  routes:[
    {
      path:'/',
      name:'index',
      meta:{
        title:"首页"
      },
      component:Index
    },
    {
      path:'/lab/echars',
      name:'echars',
      meta:{
        title:"Echars"
      },
      component:Index
    }
  ]
})

export default router