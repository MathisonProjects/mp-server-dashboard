<template>
	<div>
		<div class='row'>
			<div class='col'>
				<h3>Node JS Management</h3>
			</div>
			<div class='col text-right'>
				<button type='button' class='btn btn-primary' @click='openModal({ title: "Set Node Server", modal: "CreateNodeServer", args: {} })'><i class='fas fa-plus'></i> New Node</button>
			</div>
		</div>


		<table class="table table-bordered table-hover my-3">
			<tr>
				<th>Name</th>
				<th>Directory</th>
				<th>Active</th>
				<th>Reboot</th>
				<th>Activation</th>
			</tr>
			<tr v-for='item in nodeServers'>
				<td>{{ item.name }}</td>
				<td>{{ item.directory }}</td>
				<td>{{ item.active }}</td>
				<td>{{ item.id }}</td>
				<td>{{ item.id }}</td>
			</tr>
		</table>
		<ModalComponent :params='modalParams' v-if='modalShow' @handleModal='handleModal' @close='modalShow = false' />
	</div>
</template>

<script>
	import ModalComponent from '../components/Node/ModalComponent';

	export default {
		name      : "node-js-component",
		props     : [],
		components: {
			ModalComponent
		},
		created()   {
			this.$Helper.api.refreshServerList();
		},
		data()      {
			return {
				modalParams: {},
				modalShow: false
			} 
		},
		computed  : {
			nodeServers() {
				return this.$store.state.nodeStore.servers;
			}
		},
		methods   : {
			openModal(args) {
				this.modalParams = args;
				this.modalShow = true;
			},
			handleModal(args) {
				if (args.function !== undefined) {
					if (args.function == 'saveNodeServer') {
						
						var data = {
							name       : args.name,
							directory: args.directory
						};

						if (args.id !== undefined && args.id != null) {
							data.id = args.id;
							this.$Helper.api.updateServer(data);
						} else {
							this.$Helper.api.addServer( data);
						}
					}
				}

				this.modalShow = false;
			}
		},
		watch     : {}
	};
</script>

<style scoped></style>
