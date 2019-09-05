/*
	Cloudflare requires leveraging something that bypasses CORS. Webbrowsers will not do.

	NodeJs will do.
*/

export default {
	namespaced: true,
	state     : {
		devmode: [
			{
				site: '',
				active: false
			}
		]
	},
	mutations : {
		SET_DEVMODE(state, payload) {

		}

	},
	actions   : {
		getDevModes() {

		},
		refreshDevMode({commit}) {

		}
	},
	getters   : {}
}

