import _ from 'lodash';

export default {
	namespaced: true,
	state    : {
		user : {},
		token: {}
	},
	mutations: {
		SET_USER(state, payload) {
			state.user = payload;
		},
		SET_TOKEN(state, payload) {
			state.token = payload;
		}
	},
	actions  : {
		login({commit}, payload) {
			commit('SET_USER', payload);
		}
	},
	getters: {
		isLoggedIn : state => {
			if (_.isEmpty(state.user)) {
				return false;
			} else {
				return true;
			}
		}
	}

}