export default {
	namespaced: true,
	state     : {
		devmode: false
	},
	mutations : {
		SET_DEVMODE(state, payload) {
			state.devmode = payload;
		}

	},
	actions   : {
		setDevMode({commit}, payload) {
			commit('SET_DEVMODE', payload);
		}
	},
	getters   : {}
}

