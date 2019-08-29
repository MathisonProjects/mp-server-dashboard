import _ from 'lodash';

export default {
	namespaced: true,
	state    : {
		selected: {
			project : null,
			category: null,
			task    : null
		},
		projects  : {},
		categories: {},
		tasks     : {},
	},
	mutations: {
		SET_PROJECTS(state, payload) {
			state.projects   = payload;
		},
		SET_CATEGORIES(state, payload) {
			state.categories = payload;
		},
		SET_TASKS(state, payload) {
			state.tasks      = payload;
		},
		SET_SELECTED(state, payload) {
			state.selected   = payload;
		}
	},
	actions  : {
		refreshTasks({commit}) {
			axios.post('api/v1/todo/getRefresh').then(response => {
				var data = response.data;
				commit('SET_PROJECTS'  , data.projects);
				commit('SET_CATEGORIES', data.categories);
				commit('SET_TASKS'     , data.tasks);
			});
		},
		resetSelected({commit}) {
			commit('SET_SELECTED', {
				project : null,
				category: null,
				task    : null
			});
		},
		setSelected({commit,state}, payload) {
			var currentSelected = state.selected;

			if (payload.type == 'project') {
					currentSelected.category = null;
					currentSelected.task     = null;
			}

			if (payload.type == 'category') {
				currentSelected.task     = null;
			}

			currentSelected[payload.type] = payload.id;

			commit('SET_SELECTED', currentSelected);
		}
	},
	getters: {
		hasTasks : state => {
			if (_.isEmpty(state.tasks)) {
				return false;
			} else {
				return true;
			}
		}
	}

}