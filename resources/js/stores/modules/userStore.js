import _ from 'lodash';

export default {
	namespaced: true,
	state    : {
		user : {
			token : null
		},
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

			axios.post('api/login', payload).then( request => {
				var data = request.data;
				commit('SET_USER', { token : data.token });
				commit('SET_TOKEN', data.token );
			});
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