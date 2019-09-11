import notifications from './notifications';

import {store} from "../../stores";

export default {
	fireApi(info, endpoint, data, success) {
		notifications[info]();
		return axios.post(endpoint, data).then( response => {
			notifications[success]();
		} );
	},
	// User
	createUser(data) {
		notifications.createUserAttempt();
		axios.post('api/v1/createUser', data).then( response => {
			notifications.createdUser();
		} );
	},
	updateUser(data) {
		notifications.createUserAttempt();
		axios.post('api/v1/updateUser', data).then( response => {
			notifications.createdUser();
		} );
	},
	suspendUser(data) {
		return this.fireApi('createUserAttempt', 'api/v1/auth/suspendUser', data, 'createdUser');
	},
	refreshClient(data) {
		return this.fireApi('refreshingClientKey', 'api/v1/auth/refreshClient', data, 'refreshedClientKey');
	},
	refreshSecret(data) {
		return this.fireApi('refreshingClientSecret', 'api/v1/auth/refreshSecret', data, 'refreshedClientSecret');
	},
	refreshApiKey(data) {
		return this.fireApi('refreshingApiKey', 'api/v1/auth/refreshApiKey', data, 'refreshedApiKey');
	},
	// Node
	refreshServerList() {
		this.fireApi('refreshingServerList', 'api/v1/node/refreshServerList', {}, 'refreshedServerList').then( response => {
			console.log(response);
		});
	},
	addServer(data) {
		return this.fireApi('nodeAddServer', 'api/v1/node/addServer', data, 'nodeAddedServer');
	},
	updateServer(data) {
		return this.fireApi('nodeUpdateServer', 'api/v1/node/updateServer', data, 'nodeUpdateServer');
	},
	rebootServer() {},
	activateServer() {}
}