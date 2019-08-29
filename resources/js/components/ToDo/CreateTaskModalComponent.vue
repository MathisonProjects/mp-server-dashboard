<template>
	<div>
			<div class='form-group'>
				<label>Name</label>
				<input type='text' class='form-control' v-model='data.name' placeholder='eg. Task - Dashboard' />
			</div>
			<div class='form-group'>
				<label>Description</label>
				<textarea class='form-control' v-model='data.description' placeholder='eg. This task serves as...'></textarea>
			</div>
			<div class='form-group'>
				<label>Status</label>
				<select class='form-control' v-model='data.status'>
					<option value='0'>Not Started</option>
					<option value='1'>In Progress</option>
					<option value='2'>Blocker</option>
					<option value='3'>Complete</option>
				</select>
			</div>
			<button type='button' class='btn btn-primary' @click='createTask'>Save Task</button>
	</div>
</template>

<script>
	export default {
		name: 'create-task-modal-component',
		components: {},
		props: [
			'params'
		],
		data() {
			return {
				data: {
					function   : 'addTask',
					categoryId : this.params.CategoryId,
					id         : null,
					name       : this.params.Name ? this.params.Name : '',
					description: this.params.Description ? this.params.Description : '',
					subtaskOf  : null,
					status     : this.params.Status ? this.params.Status : 0
				}}
		},
		computed: { },
		methods: {
			createTask() {
				if (this.params.id !== undefined) {
					this.data.id = this.params.id;
				}

				this.$emit('handleModal', this.data);
				this.$Helper.notifications.taskCreate();
			}
		}
	};
</script>

<style scoped>

</style>