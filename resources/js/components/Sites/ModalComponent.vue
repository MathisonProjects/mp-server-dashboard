<template>
	<div>
		<div class="modal fade show" id="itemModal" tabindex="-1" role="dialog" aria-labelledby="itemModalLabel" aria-hidden="true"  style="display: block;">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title" id="itemModalLabel">{{ params.title }}</h4>
						<button type="button" class="close" aria-label="Close" @click="$emit('close')">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<SiteManageComponent v-if='params.modal == "Manage"' @close='$emit("close")' :args='params.args' />
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button>
					</div>
				</div>
			</div>
		</div>
		<div class="modal-backdrop fade show"></div>
		<div class="modal-backdrop fade show"></div>
	</div>
</template>


<script>
	import SiteManageComponent from './SiteManageComponent';
	export default {
		name      : "modal-component",
		props     : [
			'params'
		],
		components: { 
			SiteManageComponent
		},
		created()   {},
		data()      { return {} },
		computed  : {},
		methods   : { },
		watch     : {}
	};
</script>

<style scoped></style>
