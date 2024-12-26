import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'


import AppLogin from '../views/appLogin.vue';
import AppMain from '../views/appMain.vue';


import Login from '../components/login.vue'
import Main from '../components/Main.vue';
import SignUp from '../views/SignUp.vue';
import MemType from '../components/MemType.vue';
import MemPsn from '../views/MemPsn.vue';
import Search from '../components/Search.vue';
import Intro from '../components/intro/intro.vue';



const routes = createRouter({ 
  history: createWebHistory(), //createWebHistory(), -> for browser history
  routes: [
    {
      path: '/',
      component: AppMain,
      children: [
        { path: '', component: () => Main, name: 'home' },
        { path: 'intro', component: () => Intro, name: 'intro' },
      { path: 'search', component: () => Search , name: 'search'}
      ]
    },
  {
    path: '/login',
    component: AppLogin,
    children: [
      { path: '', component: () => Login, name: 'login' },
      { path: 'memType', component: () => MemType, name: 'memType' },
      { path: 'memPsn', component: () => MemPsn, name: 'memPsn' }
    ]
  },
  { path: '/mem', component : SignUp},
  
],
});


export default routes
