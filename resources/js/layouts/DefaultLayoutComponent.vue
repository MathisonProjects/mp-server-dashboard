<template>
	<div>
		<div>
			<div class='container my-3' v-if='!loggedIn'>
				<LoginComponent />
			</div>
			
			<div v-if='loggedIn'>
				<nav class="navbar navbar-expand-lg navbar-light bg-light">
					<a class="navbar-brand" href="#">Dashboard</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNav">
						<ul class="navbar-nav">
							<router-link to="/">
								<li class="nav-item active">
									<a class="nav-link" href="javascript:void(0)">Home <span class="sr-only">(current)</span></a>
								</li>
							</router-link>
						</ul>
					</div>
				</nav>
				<div  class='container my-3'>
					<router-view></router-view>
				</div>
			</div>

			<notifications group="general" position='bottom right' />
			<footerDefaultComponent />
		</div>
	</div>
</template>

<script>
	import LoginComponent from '../pages/LoginComponent';
	import footerDefaultComponent from './footers/footerDefaultComponent';

	export default {
		name: 'default-layout-component',
		components: {
			LoginComponent,
			footerDefaultComponent
		},
		props: [],
		data() {
			return {}
		},
		computed: {
			loggedIn() {
				return this.$store.getters['userStore/isLoggedIn'];
			}
		},
		methods: {}
	};
</script>

<style scoped>

</style>