<template>
	<div>
		<div class="row">
			<div class='col'><h1>Auth Component</h1></div>
			<div class='col text-right'>
				<button type="button" class="btn btn-primary">Create User</button>
			</div>
		</div>
		

		<table class='table table-bordered table-sm text-center'>
			<tr>
				<th>Username</th>
				<th>Client Key <a href="javascript:void(0)" title="Planned...">[?]</a></th>
				<th>Client Secret <a href="javascript:void(0)" title="Planned...">[?]</a></th>
				<th>API Key</th>
				<th>Edit</th>
				<th>Set Lock</th>
			</tr>
			<tr v-for="user in usersList">
				<td>{{ user.Username }}</td>
				<td>{{ user.ClientKey }}</td>

				<td v-if="user.revealed.clientSecret">{{ user.ClientSecret }} <a href="javascript:void(0)"><i class="fas fa-eye-slash"></i></a></td>
				<td v-if="!user.revealed.clientSecret">****** <a href="javascript:void(0)"><i class="fas fa-eye"></i></a></td>

				
				<td v-if="user.revealed.apiKey">{{ user.ApiKey }} <a href="javascript:void(0)"><i class="fas fa-eye-slash"></i></a></td>
				<td v-if="!user.revealed.apiKey">****** <a href="javascript:void(0)"><i class="fas fa-eye"></i></a></td>
				
				<td><a href="javascript:void(0)"><i class="fas fa-pencil-alt"></i></a></td>

				<td v-if="!user.Suspended"><a href="javascript:void(0)" title="Lock Account"><i class="fas fa-lock"></i></a></td>
				<td v-if="user.Suspended"><a href="javascript:void(0)" title="Unlock Account"><i class="fas fa-lock-open"></i></a></td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		name      : "auth-component",
		props     : [],
		components: {},
		created()   {},
		data()      { return {} },
		computed  : {
			usersList() {
				return [
					{
						id          : 1,
						Username    : "MathisonProjects",
						ClientKey   : "abc09e4a-0e60-4464-b8b4-ef5bb097a643",
						ClientSecret: "",
						ApiKey      : "",
						Suspended   : false,
						revealed    : {
							clientSecret: false,
							apiKey      : false
						}
					},
					{
						id          : 2,
						Username    : "MathisonProjects2",
						ClientKey   : "abc09e4a-0e60-4de4-b8b4-ef5bb097a643",
						ClientSecret: "asdfasdf",
						ApiKey      : "asd",
						Suspended   : true,
						revealed    : {
							clientSecret: true,
							apiKey      : true
						}
					}
				];
			}
		},
		methods   : {
			createUser() {

			},
			editUser() {

			},
			refreshKey() {},
			rereshSecret() {},
			revealSecret() {},
			revealApiKey() {},
			changeLockOfUser() {}
		},
		watch     : {}
	};
</script>

<style scoped></style>
