import _ from 'lodash';

export default {
	namespaced: true,
	state    : {
		user : {},
		token: null
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
		},
		logout({commit}) {
			commit('SET_TOKEN', null);
			commit('SET_USER' , {});
		}
	},
	getters: {
		isLoggedIn : state => {
			if (_.isEmpty(state.user) || state.token == null) {
				return false;
			} else {
				return true;
			}
		}
	}

}