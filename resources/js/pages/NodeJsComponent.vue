<template>
	<div>
		<div class='row'>
			<div class='col'>
				<h3>Node JS Management</h3>
			</div>
			<div class='col text-right'>
				<button type='button' class='btn btn-primary'><i class='fas fa-plus'></i> New Node</button>
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
	</div>
</template>

<script>
	export default {
		name      : "node-js-component",
		props     : [],
		components: {},
		created()   {
			this.$Helper.api.refreshServerList();
		},
		data()      { return {} },
		computed  : {
			nodeServers() {
				return [
					{
						id       : 0,
						name     : 'Dashboard Node',
						directory: '/var/www/html/live/dashboard.mathisonprojects.com/public/node/server.js',
						active   : true
					}
				];
			}
		},
		methods   : {
			handleModal(args) {
				
			}
		},
		watch     : {}
	};
</script>

<style scoped></style>
