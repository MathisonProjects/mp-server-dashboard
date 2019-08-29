<template>
	<div>
		<div class='form-group'>
			<label>Name</label>
			<input type='text' class='form-control' v-model='data.name' placeholder='eg. Project - Dashboard' />
		</div>
		<div class='form-group'>
			<label>Description</label>
			<textarea class='form-control' v-model='data.description' placeholder='eg. This project serves as...'></textarea>
		</div>
		<button type='button' class='btn btn-primary' @click='createProject'>Save Project</button>
	</div>
</template>

<script>
	export default {
		name: 'create-project-modal-component',
		components: {},
		props: [
			'params'
		],
		data() {
			return {
				data: {
					function   : 'addProject',
					id         : null,
					name       : this.params.Name ? this.params.Name : '',
					description: this.params.Description ? this.params.Description : ''
				}
			}
		},
		created() { },
		computed: { 
		},
		methods: {
			createProject() {
				if (this.params.id !== undefined) {
					this.data.id = this.params.id;
				}
				this.$emit('handleModal', this.data);
				this.$Helper.notifications.projectCreate();
			}
		}
	};
</script>

<style scoped>

</style>