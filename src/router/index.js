import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'


import AppLogin from '../views/appLogin.vue';
import AppMain from '../views/appMain.vue';


import Login from '../components/login.vue';
import Main from '../components/Main.vue';
import MemType from '../components/MemType.vue';
import MemPsn from '../views/MemPsn.vue';
import Search from '../components/Search.vue';
import Serv from '../components/serv/Serv.vue';
import Reserv from '../components/reservation/reserv.vue';
import Complete from '../components/reservation/reservComp.vue';
import Mypage from '../components/mypage/mypage.vue';
import Hi from '../components/intro/sayHi.vue';


const routes = createRouter({ 
  history: createWebHistory(), //createWebHistory(), -> for browser history
  // main main
  routes: [
    {
      path: '/',
      component: AppMain,
      children: [
        { path: '', component: () => Main, name: 'home' },
      { path: 'search', component: () => Search , name: 'search'},
      { path: 'hi', component: () => Hi , name: 'hi'}
      ]
    },
    // main container -> inner
  {
    path: '/login',
    component: AppLogin,
    children: [
      { path: '', component: () => Login, name: 'login' },
      { path: 'memType', component: () => MemType, name: 'memType' },
      { path: 'memPsn', component: () => MemPsn, name: 'memPsn' },
      { path: 'serv', component: () => Serv, name: 'serv' },
      { path: 'reserv', component: () => Reserv, name: 'reserv' },
      { path: 'comp', component: () => Complete, name: 'comp' },
      { path: 'mypage', component: () => Mypage, name: 'mypage' }
    ]
  }
  
],
});


export default routes
