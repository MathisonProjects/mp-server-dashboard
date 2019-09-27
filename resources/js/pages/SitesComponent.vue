<template>
	<div>
		<div class='row my-3'>
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
				<div class="card">
				  <div class="card-header">
				    Site Name
				  </div>
				  <div class="card-body">

				  	<div class='row'>
				  		<div class='col'>
				  			<button type='button' class='btn btn-danger btn-block'><i class='fas fa-trash'></i> Delete</button>
				  		</div>
				  		<div class='col'>
				  			<button type='button' class='btn btn-warning btn-block'><i class='fas fa-edit'></i> Edit</button>
				  		</div>
				  		<div class='col'>
				  			<button type='button' class='btn btn-primary btn-block'><i class='fas fa-trash-restore'></i> Redeploy</button>
				  		</div>
				  		<div class='col'>
				  			<button type='button' class='btn btn-info btn-block'><i class='fab fa-dev'></i> To Test</button>
				  		</div>
				  		<div class='col'>
				  			<button type='button' class='btn btn-success btn-block'><i class='fas fa-power-off'></i> To Live</button>
				  		</div>
				  	</div>


				    <h5 class="card-title">{{ currentSiteData.name }}</h5>
				    <p class="card-text" v-if='currentSiteData.node'><b>Node Status:</b> <span class='text-success'><i class="fas fa-circle"></i> Active</span></p>
				    <p class="card-text" v-if='!currentSiteData.node'><b>Node Status:</b> <span class='text-danger'><i class="fas fa-circle"></i> Inactive</span></p>
				    <p class="card-text">{{ currentSiteData.description }}</p>
				    

				    <ul>
				    	<li>Original Git: <a href='javascript:void(0)'>{{ currentSiteData.git.original }}</a></li>
				    	<li>Current Git: <a href='javascript:void(0)'>{{ currentSiteData.git.new }}</a></li>
				    </ul>

				    <ul>
				    	<li>Dev: <a href='javascript:void(0)'>https://{{ currentSiteData.links.dev }}</a></li>
				    	<li>Test: <a href='javascript:void(0)'>https://{{ currentSiteData.links.test }}</a></li>
				    	<li>Live  <a href='javascript:void(0)'>https://{{ currentSiteData.links.live }}</a></li>
				    </ul>

					<p class="card-text">Virtual Host</p>
					<pre>{{ currentSiteData.virtualHost }}</pre>
				  </div>
				</div>

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
			},
			currentSiteData() {
				return {
					name: 'Site Name',
					description: 'This is a description of a site...',
					git: {
						original: 'https://github.com/laravel/laravel.git',
						new     : 'https://github.com/Divinityfound/IgnoreThisRepo-APITest'
					},
					node: true,
					links: {
						dev : 'dev-thisisatest-com.mathisonprojects.dev',
						test: 'dev-thisisatest-com.mathisonprojects.dev',
						live: 'thisisatest.com'
					},
					virtualHost: 'VIRTUAL HOST INFO PENDING'
				}
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

<style scoped>
	pre {
		background: #585858;
		color: white;
	}
</style>
