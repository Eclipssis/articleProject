import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from '@/config/firebase';

// Global imports
import Button from '@/components/Button';
import Input from '@/components/Input';

Vue.component('Input', Input);
Vue.component('Button', Button);

// Configs
const firebaseApp = firebase.initializeApp(firebaseConfig);
store.state.db = firebaseApp.firestore();
Vue.config.productionTip = false;

function getCurrentUser() {
  const localUserString = window.localStorage.getItem('user') || null;
  return JSON.parse(localUserString);
}

if (window.localStorage) {
  const currenttUser = getCurrentUser();

  if (currenttUser && store.state.auth.user !== currenttUser) {
    store.commit('auth/setUser', currenttUser);
  }
}

router.beforeEach((to, from, next) => {
  const currenttUser = getCurrentUser();
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const loggedIn = to.matched.some((record) => record.meta.loggedIn);

  if (requiresAuth) {
    if (!currenttUser) {
      next({ path: '/login', query: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else if (loggedIn) {
    if (currenttUser) {
      next({ path: '/articles/edit', query: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
