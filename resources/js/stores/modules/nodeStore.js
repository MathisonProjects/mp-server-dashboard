export default {
	namespaced: true,
	state     : {
		nodeConnected: false,
		servers      : [ ]
	},
	mutations : {
		SET_NODECONNECTED(state, payload) {
			state.nodeConnected = payload;
		},
		SET_NODESERVERS(state, payload) {
			state.servers = payload;
		}
	},
	actions   : {
		resetConnectionStatus({commit}) {
			commit('SET_NODECONNECTED', false);
		},
		setConnection({commit}, payload) {
			commit('SET_NODECONNECTED', payload);
		},
		refreshServers({commit}) {
			commit('SET_NODESERVERS', []);
		},
		setServers({commit}, payload) {
			commit('SET_NODESERVERS', payload);
		}
	},
	getters   : {}
}