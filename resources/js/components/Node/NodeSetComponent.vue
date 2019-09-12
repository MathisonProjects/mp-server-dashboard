<template>
	<div>
		<div class='form-group'>
			<label for='name'>Name</label>
			<input type='text' id='name' class='form-control' v-model='data.name' />
		</div>
		<div class='form-group'>
			<label for='directory'>Directory</label>
			<input type='text' id='directory' class='form-control' v-model='data.directory' />
		</div>

		<button type='button' class='btn btn-primary' @click='saveModel'><i class='fas fa-save'></i> Save</button>
	</div>
</template>

<script>
	export default {
		name      : "set-node-component",
		props     : [
			'params'
		],
		components: { },
		created()   {},
		data()      {
			return {
				data : {
					function   : 'saveNodeServer',
					id         : null,
					name       : this.params.name ? this.params.name : '',
					directory  : this.params.directory ? this.params.directory : ''
				}
			}
		},
		computed  : {},
		methods   : {
			saveModel() {
				if (this.params.id !== undefined) {
					this.data.id = this.params.id;
				}

				this.$emit('handleModal', this.data);
			}
		},
		watch     : {}
	};
</script>

<style scoped></style>
