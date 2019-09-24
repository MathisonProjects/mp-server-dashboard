import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

const routes = [
	{
		// Site
		path      : '/',
		component : require('../layouts/DefaultLayoutComponent.vue').default,
		props     : true,
		children  : [
			{
				path      : '/',
				name      : 'home-home',
				component : require('../pages/HomeComponent.vue').default,
				meta      : { title : 'Home' }
			},
			{
				path      : 'todo',
				name      : 'home-todo',
				component : require('../pages/ToDoListComponent.vue').default,
				meta      : { title : 'Todo' }
			},
			{
				path      : 'auth',
				name      : 'home-auth',
				component : require('../pages/AuthComponent.vue').default,
				meta      : { title : 'Auth' }
			},
			{
				path      : 'nodejs',
				name      : 'home-nodejs',
				component : require('../pages/NodeJsComponent.vue').default,
				meta      : { title : 'Node JS Servers' }
			},
{
				path      : 'shell',
				name      : 'home-shell',
				component : require('../pages/ShellComponent.vue').default,
				meta      : { title : 'Shell Scripts' }
			},

		]
	}
];

const router = new VueRouter({
	//mode: 'history', // Something going on with apache or htaccess....
	routes: routes // short for `routes: routes`
});

export default router;
