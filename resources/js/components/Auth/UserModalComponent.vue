<template>
	<div>
		<div class='form-group'>
			<label>Name</label>
			<input type='text' class='form-control' v-model='data.name' />
		</div>
		<div class='form-group'>
			<label>Email</label>
			<input type='text' class='form-control' v-model='data.email' />
		</div>
		<div class='form-group'>
			<label>Password</label>
			<input type='password' class='form-control' v-model='data.password' />
		</div>
		<div class='form-group'>
			<label>Repeat Password</label>
			<input type='password' class='form-control' v-model='data.repeatPass' />
		</div>
		<div class='form-group text-right'>
			<button type='button' class='btn btn-primary' @click='saveUser' :disabled='data.password != data.repeatPass || data.password.length < 6'>Save</button>
		</div>

	</div>
</template>

<script>
	export default {
		name      : "user-modal-component",
		props     : [
			'args'
		],
		components: {},
		created()   {},
		data()      {
			return {
				data: {
					name      : '',
					email     : '',
					password  : '',
					repeatPass: ''
				}
			}
		},
		computed  : {},
		methods   : {
			saveUser() {
				this.$Helper.api.createUser(this.data);
				this.$emit('close');
			}
		},
		watch     : {}
	};
</script>

<style scoped></style>
