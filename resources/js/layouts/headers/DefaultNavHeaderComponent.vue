<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<a class="navbar-brand" href="#"><i class="fab fa-dev"></i> Dashboard</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<router-link to="/">
					<li class="nav-item active">
						<a class="nav-link" href="javascript:void(0)"><i class="fas fa-home"></i> Home <span class="sr-only">(current)</span></a>
					</li>
				</router-link>
				<li class="nav-item active">
					<a class="nav-link" href="javascript:void(0)" @click='logout'><i class="fas fa-sign-out-alt"></i> Logout</a>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
	export default {
		name      : "default-nav-header-component",
		props     : [],
		components: {},
		created()   {},
		data()      { return {} },
		computed  : {},
		methods   : {
			logout() {
				this.$store.dispatch('userStore/logout');
				this.$Helper.notifications.logoutSuccess();
			}
		},
		watch     : {}
	};
</script>

<style scoped></style>
