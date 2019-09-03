export default {
	namespaced: true,
	state     : {
		auths: []
	},
	mutations : {
		SET_AUTHS(state, payload) {
			state.auths = payload;
		}
	},
	actions   : {
		refreshAuths({commit}) {
			commit('SET_AUTHS', []);
		},
		getUserAuths({commit}) {
			commit('SET_AUTHS', []);
			axios.post('api/v1/getAuths').then( response => {
				var data = response.data;
				commit('SET_AUTHS', data);
			});
		},
		reveal({commit, state}, payload) {
			var data = state.auths;
			data[payload.id].revealed[payload.type] = !data[payload.id].revealed[payload.type];
			commit('SET_AUTHS', data);
		}
	},
	getters   : {}
}