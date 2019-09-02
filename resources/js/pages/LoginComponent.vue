<template>
	<div class='row'>
		<div class='offset-md-3 col-md-6'>
			<div class="card">
				<h5 class="card-header">Dashboard Login</h5>
				<div class="card-body">
					<div class='form-group'>
						<label><i class="fas fa-user"></i> Email</label>
						<input tpye='text' class='form-control' v-model='data.email' placeholder='eg. jon@doe.com' />
					</div>
					<div class='form-group'>
						<label><i class="fas fa-key"></i> Password</label>
		    			<input type="password" class="form-control" v-model='data.password' placeholder="eg. ******">
					</div>
					<button type='button' class='btn btn-primary' @click='login'><i class="fas fa-sign-in-alt"></i> Login</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'login-component',
		components: {},
		props: [],
		computed: {},
		data() {
			return {
				data: {
					email : '',
					password : ''
				}
			}
		},
		methods: {
			login() {
				this.$store.dispatch('userStore/login', this.data);
				this.$Helper.notifications.loginSuccess();
			}
		}
	};
</script>

<style scoped>
</style>