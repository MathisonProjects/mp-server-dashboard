<template>
	<div>
		<div class="row">
			<div class='col'><h1>Auth Component</h1></div>
			<div class='col text-right'>
				<button type="button" class="btn btn-primary" @click='openModal({ title: "Create User", modal : "UserModal", args: {} })'>Create User</button>
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
			<tr v-for="user,index in usersList">
				<td>{{ user.Username }}</td>
				<td>{{ user.ClientKey }} <a href="javascript:void(0)"><i class="fas fa-recycle" @click='recycleData(user.id, "client_key")'></i></a></td>

				<td v-if="user.revealed.clientSecret">
					{{ user.ClientSecret }}
					<a href="javascript:void(0)"><i class="fas fa-eye-slash" @click='revealData(index, "clientSecret")'></i></a>
					<a href="javascript:void(0)"><i class="fas fa-recycle" @click='recycleData(user.id, "client_secret")'></i></a>
				</td>
				<td v-if="!user.revealed.clientSecret">
					******
					<a href="javascript:void(0)"><i class="fas fa-eye" @click='revealData(index, "clientSecret")'></i></a>
					<a href="javascript:void(0)"><i class="fas fa-recycle" @click='recycleData(user.id, "client_secret")'></i></a>
				</td>

				
				<td v-if="user.revealed.apiKey">
					{{ user.ApiKey }}
					<a href="javascript:void(0)"><i class="fas fa-eye-slash" @click='revealData(index, "apiKey")'></i></a>
					<a href="javascript:void(0)"><i class="fas fa-recycle" @click='recycleData(user.id, "api_key")'></i></a>

				</td>
				<td v-if="!user.revealed.apiKey">
					******
					<a href="javascript:void(0)"><i class="fas fa-eye" @click='revealData(index, "apiKey")'></i></a>
					<a href="javascript:void(0)"><i class="fas fa-recycle" @click='recycleData(user.id, "api_key")'></i></a>
				</td>
				
				<td><a href="javascript:void(0)"><i class="fas fa-pencil-alt"></i></a></td>

				<td v-if="user.Suspended"><a href="javascript:void(0)" title="Lock Account" @click='suspendUser(user.id,user.Suspended)'><i class="fas fa-lock"></i></a></td>
				<td v-if="!user.Suspended"><a href="javascript:void(0)" title="Unlock Account" @click='suspendUser(user.id,user.Suspended)'><i class="fas fa-lock-open"></i></a></td>
			</tr>
		</table>

		<ModalComponent v-if='showModal' @close='showModal = false' :params='modalArgs' />
	</div>
</template>

<script>
	import ModalComponent from '../components/Auth/ModalComponent';

	export default {
		name      : "auth-component",
		props     : [],
		components: {
			ModalComponent
		},
		created()   {
			this.refreshAuths();
		},
		data()      { return {
			showModal: false,
			modalArgs: {}
		} },
		computed  : {
			usersList() {
				return this.$store.state.authStore.auths;
			}
		},
		methods   : {
			openModal(args) {
				this.modalArgs = args;
				this.showModal = true;
			},
			recycleData(uid, type) {
				var data = {
					uid : uid
				};
				if (type == 'client_key') {
					this.$Helper.api.refreshClient(data).then( response => { this.refreshAuths(); });
				} else if (type == 'client_secret') {
					this.$Helper.api.refreshSecret(data).then( response => { this.refreshAuths(); });
				} else if (type == 'api_key') {
					this.$Helper.api.refreshApiKey(data).then( response => { this.refreshAuths(); });
				}
			},
			suspendUser(uid, active) {
				var data = {
					uid : uid
				};

				if (active == 1) {
					this.$Helper.notifications.suspendingUser();
				} else {
					this.$Helper.notifications.unsuspendingUser();
				}
				axios.post('api/v1/auth/suspendUser', data).then( response => {
					if (active == 1) {
						this.$Helper.notifications.suspendedUser();
					} else {
						this.$Helper.notifications.unsuspendedUser();
					}
					this.refreshAuths();
				});
			},
			refreshAuths() {
				this.$store.dispatch('authStore/getUserAuths');
			},
			revealData(index, type) {
				var data = {
					id  : index,
					type: type
				};
				this.$store.dispatch('authStore/reveal', data);
			}
		},
		watch     : {}
	};
</script>

<style scoped></style>


