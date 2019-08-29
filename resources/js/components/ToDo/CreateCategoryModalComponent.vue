<template>
	<div>
			<div class='form-group'>
				<label>Name</label>
				<input type='text' class='form-control' v-model='data.name' placeholder='eg. Category - Dashboard' />
			</div>
			<div class='form-group'>
				<label>Description</label>
				<textarea class='form-control' v-model='data.description' placeholder='eg. This category serves as...'></textarea>
			</div>
			<button type='button' class='btn btn-primary' @click='createCategory'>Save Category</button>
	</div>
</template>
<script>
	export default {
		name: 'create-category-modal-component',
		components: {},
		props: [
			'params'
		],
		data() {
			return {
				data: {
					function   : 'addCategory',
					id         : null,
					projectId  : this.params.ProjectId,
					name       : this.params.Name ? this.params.Name : '',
					description: this.params.Description ? this.params.Description : ''
				}}
		},
		computed: { },
		methods: {
			createCategory() {
				if (this.params.id !== undefined) {
					this.data.id = this.params.id;
				}
				this.$emit('handleModal', this.data);
				this.$Helper.notifications.cateogryCreate();
			}
		}
	};
</script>

<style scoped>

</style>