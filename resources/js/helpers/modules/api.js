import notifications from './notifications';

export default {
	// User
	createUser() {
		axios.post('api/v1/createUser', data).then( response => {} );
	},
	updateUser() {
		axios.post('api/v1/updateUser', data).then( response => {} );
	},
	suspendUser() {
		axios.post('api/v1/suspendUser', data).then( response => {} );
	},
	refreshClient() {
		axios.post('api/v1/refreshClient', data).then( response => {} );
	},
	refreshSecret() {
		axios.post('api/v1/refreshSecret', data).then( response => {} );
	},
	refreshApiKey() {
		axios.post('api/v1/refreshApiKey', data).then( response => {} );
	}
}