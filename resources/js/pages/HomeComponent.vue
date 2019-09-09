<template>
	<div>
		<div class="card">
			<div class="card-header">
				<h3>Mathison Projects Dashboard</h3>
			</div>
			<div class="card-body">
				<p class="card-text">Makes management of the Mathison Projects servers significantly easier, faster, and more stable.</p>
			</div>
		</div>
		
	
		<div class='row'>
			<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-2'>
				<button type='button' class='btn btn-primary btn-block' @click='changePage("auth")'>
					<i class="fas fa-key fis-3"></i><br />
					Auth Manager
				</button>
			</div>
			<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-2'>
				<button type='button' class='btn btn-primary btn-block' @click='changePage("todo")'>
					<i class="fas fa-clipboard-list fis-3"></i><br />
					ToDo List
				</button>
			</div>
			<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-2'>
				<button type='button' class='btn btn-warning btn-block' @click='changeDevMode' v-if="developmentMode">
					<i class="fab fa-dev fis-3"></i><br />
					Dev Mode
				</button>
				<button type='button' class='btn btn-info btn-block' @click='changeDevMode' v-if="!developmentMode">
					<i class="fab fa-dev fis-3"></i><br />
					Cache Mode
				</button>

			</div>
			<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-2'>
				<button type='button' class='btn btn-primary btn-block' @click='changePage("")' disabled>
					<i class="fas fa-link fis-3"></i><br />
					CDN
				</button>
			</div>
			<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-2'>
				<button type='button' class='btn btn-primary btn-block' @click='changePage("")' disabled>
					<i class="fas fa-sitemap fis-3"></i><br />
					Subdomains
				</button>
			</div>
			<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-2'>
				<button type='button' class='btn btn-primary btn-block' @click='changePage("")' disabled>
					<i class="fas fa-rocket fis-3"></i><br />
					Auto Deployment
				</button>
			</div>
			<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-2'>
				<button type='button' class='btn btn-primary btn-block' @click='changePage("")' disabled>
					<i class="fab fa-github-square fis-3"></i><br />
					Git
				</button>
			</div>
			<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-2'>
				<button type='button' class='btn btn-primary btn-block' @click='changePage("nodejs")'>
					<i class="fab fa-node-js fis-3"></i><br />
					Node
				</button>
			</div>
			<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-2'>
				<button type='button' class='btn btn-primary btn-block' @click='changePage("")' disabled>
					<i class="fas fa-robot fis-3"></i><br />
					Bot
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'home-component',
		components: {},
		props: [],
		data() {
			return {}
		},
		created() {
			this.$Helper.nodeServer.sendUp('getDevelopmentMode');
		},
		computed: {
			developmentMode() {
				return this.$store.state.cloudflareStore.devmode;
			}
		},
		methods: {
			changePage(page) {
				this.$router.push(page);
			},
			changeDevMode() {
				if (this.developmentMode == true) {
					this.$Helper.nodeServer.sendUp('changeDevelopmentMode', 'off');
				} else {
					this.$Helper.nodeServer.sendUp('changeDevelopmentMode', 'on');
				}
			}
		}
	};
</script>

<style scoped>
	.fis-3 {
		font-size: 300%;
	}
</style>