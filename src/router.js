import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Registration from './views/Registration.vue';
import DefaultLayout from './layouts/DefaultLayout.vue';
import ArticlesEdit from './views/ArticlesEdit.vue';
import Main from './views/Main.vue';

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
			path: '/registration',
			name: 'Registration',
			component: Registration
		},
		{
			path: '/',
			component: DefaultLayout,
			children: [
				{
					path: '/articles/edit',
					name: 'ArticlesEdit',
					component: ArticlesEdit
				},
				{
					path: '/articles',
					name: 'Main',
					component: Main
				}
			]
		}
	]
});
