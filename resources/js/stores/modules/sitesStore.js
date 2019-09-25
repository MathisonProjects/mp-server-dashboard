export default {
	namespaced: true,
	state     : {
		sites: []
	},
	mutations : {
		SET_SITES(state, payload) {
			state.sites = payload;
		}
	},
	actions   : {
		getSites({commit}) {
			commit('SET_SITES', []);

			axios.post('api/v1/site/getSites').then(response => {
				var data = response.data;
				commit('SET_SITES'  , data);
			});
		}
	},
	getters   : {}
};