import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import 'element-plus/lib/theme-chalk/index.css';
//按需引入element plus 组件
import { 
  ElButton,
  ElContainer,
  ElAside,
  ElMenu,
  ElSubmenu,
  ElMenuItemGroup,
  ElMenuItem
 } from 'element-plus'

const app =createApp(App)// 生成 Vue 实例 app

app.use(router)// 引用路由实例

app.use(ElButton)
app.use(ElContainer)
app.use(ElAside)
app.use(ElMenu)
app.use(ElSubmenu)
app.use(ElMenuItemGroup)
app.use(ElMenuItem)

app.mount('#app')//挂载到#app

