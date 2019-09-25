<template>
	<div>
		<div class='row'>
			<div class='col'>
				<h1>Sites</h1>
			</div>
			<div class='col text-right'>
				<button type='button' class='btn btn-primary' @click='openModal("Manage Site", "Manage", {})'><i class='fas fa-plus'></i> Add Site</button>
			</div>
		</div>

		<div class='row'>
			<div class='col-3'>
				<ul class="list-group">
					<li class="list-group-item" v-for="item in siteList">this</li>
					<li class="list-group-item" v-if="siteList.length == 0">
						There are no sites... :(
					</li>
				</ul>
			</div>
			<div class='col'>
				Site Name
				Delete | Edit | Redeploy | To Test | To Live

				Name         -
				Description  - 
				URLs         -
				Virtual Host -
				Node Status  - 
			</div>
		</div>

		<ModalComponent v-if='showModal' :params='modalParams' @close='showModal = false' />
	</div>
</template>

<script>
	import ModalComponent from '../components/Sites/ModalComponent'

	export default {
		name      : "sites-component",
		props     : [],
		components: {
			ModalComponent
		},
		created()   {
			this.$store.dispatch('sitesStore/getSites');
		},
		data()      { 
			return {
				showModal: false,
				modalParams: {},
				currentSite: null
			}
		},
		computed  : {
			siteList() {
				return this.$store.state.sitesStore.sites;
			}
		},
		methods   : {
			openModal(title, modal, args) {
				this.modalParams = {
					title : title,
					modal : modal,
					args : args,
				};
				this.showModal = true;
			},
			createSite() {

			},
			updateSite() {

			}
		},
		watch     : {}
	};
</script>

<style scoped></style>
