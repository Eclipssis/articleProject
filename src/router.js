import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import MainLayout from './views/MainLayout.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/',
			name: 'MainPage',
			component: MainLayout
		}
	]
});
