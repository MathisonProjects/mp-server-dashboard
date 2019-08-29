<template>
	<div>
		<div class="modal fade show" id="itemModal" tabindex="-1" role="dialog" aria-labelledby="itemModalLabel" aria-hidden="true"  style="display: block;">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title" id="itemModalLabel">{{ title }}</h4>
						<button type="button" class="close" aria-label="Close" @click="$emit('handleModal', {})">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<CreateProjectModalComponent v-if='params.modal == "CreateProject"' @handleModal='handleModal' :params='params.params' />
						<CreateCategoryModalComponent v-if='params.modal == "CreateCategory"' @handleModal='handleModal' :params='params.params' />
						<CreateTaskModalComponent v-if='params.modal == "CreateTask"' @handleModal='handleModal' :params='params.params' />
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" @click="$emit('handleModal', {})">Close</button>
					</div>
				</div>
			</div>
		</div>
		<div class="modal-backdrop fade show"></div>
		<div class="modal-backdrop fade show"></div>
	</div>
</template>

<script>
	import CreateProjectModalComponent  from './CreateProjectModalComponent';
	import CreateCategoryModalComponent from './CreateCategoryModalComponent';
	import CreateTaskModalComponent     from './CreateTaskModalComponent';

	
	export default {
		name: 'modal-component',
		props: [
			'params'
		],
		components: {
			CreateProjectModalComponent,
			CreateCategoryModalComponent,
			CreateTaskModalComponent
		},
		computed  : {
			title() {
				if (this.params.modal == "CreateProject") {
					return 'Create Project';
				} else if (this.params.modal == "CreateCategory") {
					return 'Create Category';
				} else if (this.params.modal == "CreateTask") {
					return 'Create Task';
				}
			}
		},
		created() { },
		methods   : {
			handleModal(args) {
				this.$emit('handleModal', args);
			}
		},
		data() {
			return {}
		}
	};
</script>

<style scoped>
	.modalBackground {
		background-color: black;
		opacity: 0.5;
		background-size: cover;
	}
</style>