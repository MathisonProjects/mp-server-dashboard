<template>
	<div>
		<h1>Mathison Projects Dashboard</h1>
		
		<p>Makes management of the Mathison Projects servers significantly easier, faster, and more stable.</p>

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
				<button type='button' class='btn btn-primary btn-block' @click='changePage("")' disabled>
					<i class="fab fa-dev fis-3"></i><br />
					Dev Mode
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
				<button type='button' class='btn btn-primary btn-block' @click='changePage("")' disabled>
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
		name: 'default-layout-component',
		components: {},
		props: [],
		data() {
			return {}
		},
		computed: {},
		methods: {
			changePage(page) {
				console.log(page);
				this.$router.push(page);
			}
		}
	};
</script>

<style scoped>
	.fis-3 {
		font-size: 300%;
	}
</style>