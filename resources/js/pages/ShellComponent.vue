<template>
	<div>
		<h1>Shell Scripts</h1>

		<button type='button' class='btn btn-primary' v-for='script in scripts' @click='fireScript(script.script)'><i :class='script.icon'></i> {{ script.text }}</button>
	</div>
</template>

<script>
	export default {
		name      : "file-name-component",
		props     : [],
		components: {},
		created()   {},
		data()      { return {} },
		computed  : {
			scripts() {
				return [
					{
						icon  : 'fas fa-server',
						script: '/var/www/html/live/dashboard.mathisonprojects.com/app/Shell/ApacheRestart.sh',
						text  : 'Apache Restart'
					}
				];
			}
		},
		methods   : {
			fireScript(script) {
				console.log(script);
				this.$Helper.nodeServer.sendUp('runShell', script);
			}
		},
		watch     : {}
	};
</script>

<style scoped></style>
