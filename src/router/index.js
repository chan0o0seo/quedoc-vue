import { createMemoryHistory, createRouter } from 'vue-router'

import Login from '../components/appLogin.vue';
import Main from '../components/appMain.vue';
import MemType from '../components/MemType.vue';
import MyinpoChange from '../components/myinpo.vue';

const routes = [
  { path: '/', component : MyinpoChange },   
  { path: '/login', component : Login}

]

const router = createRouter({
  history: createMemoryHistory(), //createWebHistory(), -> for browser history
  routes,
})

export default router
