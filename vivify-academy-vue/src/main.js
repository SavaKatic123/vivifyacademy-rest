import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Contacts from './pages/Contacts.vue';
import ContactFormPage from './pages/ContactFormPage.vue';
import Login from './pages/Login.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

function loginGuard(to, from, next) {
  let isAuthenticated = !!window.localStorage.getItem('loginToken');
  isAuthenticated ? next() : next('/login');
}

const routes = [
  { path: '/', redirect: '/contacts', beforeEnter: loginGuard },
  { path: '/contacts', component: Contacts, name: 'contacts', beforeEnter: loginGuard },
  { path: '/contacts/:id', component: Contacts, name: 'contact-details', beforeEnter: loginGuard },
  {
    path: '/contact-form',
    component: ContactFormPage,
    name: 'contact-form',
    beforeEnter: loginGuard
  },
  { path: '/login', component: Login, name: 'login' }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
