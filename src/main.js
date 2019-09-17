import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from '@/config/firebase';

// Import global components
import Input from '@/components/Input';
import Button from '@/components/Button';

Vue.component('Input', Input);
Vue.component('Button', Button);

// Configs
const firebaseApp = firebase.initializeApp(firebaseConfig);
store.state.db = firebaseApp.firestore();
Vue.config.productionTip = false;

if (window.localStorage) {
	var localUserString = window.localStorage.getItem('user') || 'null';
	var localUser = JSON.parse(localUserString);
	if (localUser && store.state.auth.user !== localUser) {
		store.commit('auth/setUser', localUser);
	}
}

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');
