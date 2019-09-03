<template>
	<div>
		<video autoplay muted loop id="myVideo" v-if='!loggedIn'>
			<source src="video/bg-digitalrain.mp4" type="video/mp4">
		</video>

		<div>
			<div class='container my-3' v-if='!loggedIn'>
				<LoginComponent />
			</div>
			
			<div v-if='loggedIn'>
				<DefaultNavHeaderComponent />
				<div  class='container my-3'>
					<router-view></router-view>
				</div>
			</div>

			<notifications group="general" position='bottom right' />
			<footerDefaultComponent v-if='loggedIn' />
		</div>
	</div>
</template>

<script>
	import LoginComponent from '../pages/LoginComponent';
	import footerDefaultComponent from './footers/footerDefaultComponent';
	import DefaultNavHeaderComponent from './headers/DefaultNavHeaderComponent'

	export default {
		name: 'default-layout-component',
		components: {
			LoginComponent,
			footerDefaultComponent,
			DefaultNavHeaderComponent
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
		methods: {
		}
	};
</script>

<style scoped>
	#myVideo {
	  position: fixed;
	  right: 0;
	  bottom: 0;
	  min-width: 100%; 
	  min-height: 100%;
	}
</style>