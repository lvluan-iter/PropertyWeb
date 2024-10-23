import { createRouter, createWebHistory } from 'vue-router';
import WebHome from '../views/WebHome.vue';
import WebLogin from '../views/WebLogin';
import WebRegister from '../views/WebRegister';
import WebProfile from '../views/WebProfile';
import WUpNew from '../views/WUpNew';
import DetailProperty from '../views/DetailProperty';
import WebPassword from '../views/WebPassword';
import WebReset from '../views/WebReset';
import WebSearch from '../views/WebSearch';
import WebDashboard from '../views/WebDashboard'
import WebRequest from '../views/WebRequest'
import ClientRequests from '../views/ClientRequests'
import UserProperty from '../views/UserProperty'
import WMyProperty from '../views/WMyProperty'

const routes = [
  {
    path: '/',
    name: 'WebHome',
    component: WebHome
  },
  {
    path: '/login',
    name: 'WebLogin',
    component: WebLogin
  },
  {
    path: '/register',
    name: 'WebRegister',
    component: WebRegister
  },
  {
    path: '/profile',
    name: 'WebProfile',
    component: WebProfile
  },
  {
    path: '/upnew',
    name: 'WUpNew',
    component: WUpNew
  },
  {
    path: '/propertydetail/:id',
    name: 'DetailProperty',
    component: DetailProperty,
    props: true
  },
  {
    path: '/forgot-password',
    name: 'WebPassword',
    component: WebPassword
  },
  {
    path: '/reset-password',
    name: 'WebReset',
    component: WebReset,
  },
  {
    path: '/search',
    name: 'WebSearch',
    component: WebSearch,
  },
  {
    path: '/dashboard',
    name: 'WebDashboard',
    component: WebDashboard
  },
  {
    path: '/tourrequest',
    name: 'WebRequest',
    component: WebRequest
  },
  {
    path: '/client-requests',
    name: 'ClientRequests',
    component: ClientRequests
  },
  {
    path: '/user-property/:id',
    name: 'UserProperty',
    component: UserProperty,
    props: true
  },
  {
    path: '/compare/:ids',
    name: 'WebCompare',
    component: () => import('@/views/WebCompare.vue')
  },
  {
    path: '/yourproperty',
    name: 'WMyProperty',
    component: WMyProperty
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
