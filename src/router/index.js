import { createMemoryHistory, createRouter } from 'vue-router'

import Login from '../components/appLogin.vue';
import Main from '../components/appMain.vue';
import SignUp from '../views/SignUp.vue';
import MainPage from '../components/appMain.vue'
import MemPsn from '../views/MemPsn.vue';
import Search from '../views/SearchView.vue';

const routes = [
  { path: '/', component : MainPage, name: 'main'},   
  { path: '/login', component : Login , name: 'login'},
  { path: '/mem', component : SignUp},
  { path: '/memPsn', component : MemPsn , name: 'memPsn'},
  { path: '/search', component : Search , name: 'search'}
]

const router = createRouter({
  history: createMemoryHistory(), //createWebHistory(), -> for browser history
  routes,
})

export default router
