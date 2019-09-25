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
				<option>Laravel Only</option>
				<option>Laravel + NodeJs</option>
				<option>VueJs Only</option>
				<option>VueJs + NodeJs</option>
				<option>NodeJs Only</option>
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
						- Create Dev
						- Create Test
						- Create new site
					Git
						- Pull Base Git Repository
					Site
						- Create Dev Environment
						- Create Test Environment
						- Create Live Environment
						- npm install into Dev
						- Composer Install into Dev
					Git
						- Create Assign to new Git
						- Autopush to git
					Apache
						- Route for one of 5 defaults
						- Apache Restart
					Refresh Apache
				*/

				this.$Helper.nodeServer.sendUp('createSubdomain', {
					type    : 'CNAME',
					name     : this.links.dev,
					content  : '127.0.0.1',
					ttl      : {},
					priority : 10,
					proxied  : false
				});

			},
			pushDevToTest() {},
			pushTestToLive() {}
		},
		watch     : {}
	};
</script>

<style scoped></style>
