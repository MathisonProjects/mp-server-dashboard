import notifications from './notifications';

export default {
	// User
	createUser(data) {
		notifications.createUserAttempt();
		axios.post('api/v1/createUser', data).then( response => {
			notifications.createdUser();
		} );
	},
	updateUser() {
		notifications.createUserAttempt();
		axios.post('api/v1/updateUser', data).then( response => {
			notifications.createdUser();
		} );
	},
	suspendUser() {
		notifications.createUserAttempt();
		axios.post('api/v1/suspendUser', data).then( response => {
			notifications.createdUser();
		} );
	},
	refreshClient() {
		notifications.createUserAttempt();
		axios.post('api/v1/refreshClient', data).then( response => {
			notifications.createdUser();
		} );
	},
	refreshSecret() {
		notifications.createUserAttempt();
		axios.post('api/v1/refreshSecret', data).then( response => {
			notifications.createdUser();
		} );
	},
	refreshApiKey() {
		notifications.createUserAttempt();
		axios.post('api/v1/refreshApiKey', data).then( response => {
			notifications.createdUser();
		} );
	}
}