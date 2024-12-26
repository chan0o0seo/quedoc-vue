import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import Login from '../components/appLogin.vue';
import Main from '../components/appMain.vue';
import SignUp from '../views/SignUp.vue';
import MainPage from '../components/appMain.vue'
import MemPsn from '../views/MemPsn.vue';
import Search from '../views/SearchView.vue';

const routes = createRouter({ 
  history: createWebHistory(), //createWebHistory(), -> for browser history
  routes: [
  { path: '/', component : MainPage, name: 'main'},   
  { path: '/login', component : Login , name: 'login'},
  { path: '/mem', component : SignUp},
  { path: '/memPsn', component : MemPsn , name: 'memPsn'},
  { path: '/search', component : Search , name: 'search'}
],
});


export default routes
