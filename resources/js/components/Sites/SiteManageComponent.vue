<template>
	<div>
		<div class='form-group'>
			<label for='name'>Name</label>
			<input type='text' id='name' class='form-control form-control-sm' v-model='data.name' />
		</div>
		<div class='form-group'>
			<label for='description'>Description</label>
			<input type='text' id='description' class='form-control form-control-sm' v-model='data.description' />
		</div>
		<div class='form-group'>
			<label for='url'>URL</label>
			<input type='text' id='url' class='form-control form-control-sm' v-model='data.url' />
		</div>

		<div class='form-group'>
			<label for='links'>Links</label>
				
			<div class="input-group mb-2">
				<div class="input-group-prepend"><span class="input-group-text" id="basic-addon1"><i class="fas fa-link"></i></span></div>
				<input type='text' id='links' disabled class='form-control form-control-sm' v-bind:value='links.dev' />
			</div>
			<div class="input-group mb-2">
				<div class="input-group-prepend"><span class="input-group-text" id="basic-addon1"><i class="fas fa-link"></i></span></div>
				<input type='text' id='links' disabled class='form-control form-control-sm' v-bind:value='links.test'/>
			</div>
			<div class="input-group mb-2">
				<div class="input-group-prepend"><span class="input-group-text" id="basic-addon1"><i class="fas fa-link"></i></span></div>
				<input type='text' id='links' disabled class='form-control form-control-sm' v-bind:value='links.live' />
			</div>
		</div>

		<div class='form-group'>
			<label for='originalGit'>Original Git</label>
			<input type='text' id='originalGit' class='form-control form-control-sm' v-model='data.git.original' />
		</div>
		<div class='form-group'>
			<label for='newGit'>New Git</label>
			<input type='text' id='newGit' class='form-control form-control-sm' v-model='data.git.new' />
		</div>

		<div class='form-group'>
			<label for='apache'>Virtual Host</label>
			<select class='form-control form-control-sm' v-model='data.apache'>
				<option>-- Select Option --</option>
				<option value='0'>Laravel Only</option>
				<option value='1'>Laravel + NodeJs</option>
				<option value='2'>VueJs Only</option>
				<option value='3'>VueJs + NodeJs</option>
				<option value='4'>NodeJs Only</option>
			</select>
		</div>

		<div class='row'>
			<div class='col'>
				<button type='button' class='btn btn-primary' @click='save'><i class='fas fa-save'></i> Save</button>
			</div>
			<div class='col text-center'>
				<button type='button' class='btn btn-primary'><i class='fas fa-vial'></i> Push to Test</button>
			</div>
			<div class='col text-right'>
				<button type='button' class='btn btn-primary'><i class='fas fa-thumbs-up'></i> Push to Live</button>
			</div>
		</div>		
	</div>
</template>

<script>
	export default {
		name      : "site-manage-component",
		props     : [],
		components: {},
		created()   {},
		data()      { 
			return {
				data: {
					name        : '',
					description : '',
					url         : '',
					git         : {
						original : '',
						new      : ''
					},
					apache      : 0
				}
			}
		},
		computed  : {
			links() {
				var link = this.data.url;
				return {
					dev : 'dev-' + link.replace('.', '-') + '.mathisonprojects.dev',
					test: 'test-' + link.replace('.', '-') + '.mathisonprojects.dev',
					live: '' + this.data.url
				}
			}
		},
		methods   : {
			save() {
				/*
					Cloudflare
						- Create new site
					Git
						- Pull Base Git Repository
					Site
						- npm install into Dev
						- Composer Install into Dev
					Git
						- Create Assign to new Git
						- Autopush to git
					Permissions
						chmod
					Apache
						- Route for one of 5 defaults
				*/

				this.createSubdomain(this.links.dev);
				this.createSubdomain(this.links.test);
				this.$Helper.nodeServer.sendUp('createDirectory', this.data.url);
				this.$Helper.nodeServer.sendUp('createDirectory', this.data.url + "/" + this.links.dev);
				this.$Helper.nodeServer.sendUp('createDirectory', this.data.url + "/" + this.links.test);
				this.$Helper.nodeServer.sendUp('createDirectory', this.data.url + "/" + this.links.live);
				this.$Helper.nodeServer.sendUp('runShell', '/var/www/html/live/dashboard.mathisonprojects.com/app/Shell/ChownJacob.sh');

				this.$Helper.nodeServer.sendUp('runShell', '/var/www/html/live/dashboard.mathisonprojects.com/app/Shell/ApacheRestart.sh');

			},
			createSubdomain(domain) {
				this.$Helper.nodeServer.sendUp('createSubdomain', { type : 'CNAME', name : domain, content : 'mathisonprojects.dev', proxied  : true });
			},
			pushDevToTest() {},
			pushTestToLive() {}
		},
		watch     : {}
	};
</script>

<style scoped></style>
