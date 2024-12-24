import { createMemoryHistory, createRouter } from 'vue-router'

import Login from '../components/appLogin.vue';
import Main from '../components/appMain.vue';
import SignUp from '../views/SignUp.vue';
import MainPage from '../components/appMain.vue'
import MemPsn from '../views/MemPsn.vue';

const routes = [
  { path: '/', component : MainPage},   
  { path: '/login', component : Login , name: 'login'},
  { path: '/mem', component : SignUp},
  { path: '/memPsn', component : MemPsn , name: 'memPsn'},
]

const router = createRouter({
  history: createMemoryHistory(), //createWebHistory(), -> for browser history
  routes,
})

export default router
