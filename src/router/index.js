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
import Mypage2 from '../components/mypage/mypage2.vue';
import Hi from '../components/intro/sayHi.vue';
import ChangeInfo from '../components/mypage/MyPg.vue';
import ServPdCtg from '../components/serv/ServPdCtg.vue';
import myReview from '../components/mypage/myReview.vue';
import reservDetail from '../components/mypage/reservDetail.vue';

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
      { path: 'mypage',
        component: () => Mypage,
        children: [
          {path: '', component: () => Mypage2, name: 'mypage'},
      { path: 'changeInfo', component: () => ChangeInfo, name: 'changeInfo' },
      { path: 'fv', component: () => ServPdCtg, name: 'fvHospital' },
      { path: 'rv', component: () => myReview, name: 'myRv' }
        ] },
        { path: 'detail', component: () => reservDetail, name: 'reservDetail' },
    ]
  }
  
],
});


export default routes
