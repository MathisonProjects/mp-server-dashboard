<template>
	<div class="card">
		<h5 class="card-header">Login</h5>
		<div class="card-body">
			<div class='form-group'>
				<label>Username</label>
				<input tpye='text' class='form-control' v-model='data.username' placeholder='eg. jon@doe.com' />
			</div>
			<div class='form-group'>
				<label>Password</label>
    			<input type="password" class="form-control" v-model='data.password' placeholder="eg. ******">
			</div>
			<button type='button' class='btn btn-primary' @click='login'>Login</button>
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
					username : '',
					password : ''
				}
			}
		},
		methods: {
			login() {
				this.$store.dispatch('userStore/login', this.data);
			}
		}
	};
</script>

<style scoped>

</style>