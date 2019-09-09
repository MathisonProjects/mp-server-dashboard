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

					<div class="card" v-if='!errors.node'>
						<div class="card-header">
							Errors
						</div>
						<div class="card-body">
							<div v-if='!errors.node'>

								<h5 class="card-title">Node Server</h5>
								<p class="card-text">You need to run the node server in order to communicate with Cloudflare...</p>
							</div>


						</div>
					</div>


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
			},
			errors() {
				return {
					node: this.$store.state.nodeStore.nodeConnected
				};
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