import Vue from 'vue';

export default {
	fireNote(type, title, text) {

		Vue.notify({
			group: 'general',
			type : type,
			title: title,
			text : text
		});
	},
	fireSuccess(title, text) {
		this.fireNote('success', title, text);
	},
	fireInfo(title, text) {
		this.fireNote('info', title, text);
	},
	fireWarn(title, text) {
		this.fireNote('warn', title, text);
	},
	fireDanger(title, text) {
		this.fireNote('danger', title, text);
	},
	// Testfire
	canFire() {
		this.fireInfo(
			'Button Test',
			'This button is fireable'
		);
	},
	// User
	createUserAttempt() {
		this.fireInfo(
			'User Creation',
			'We are attempting to create a user...'
		);
	},
	createdUser() {
		this.fireSuccess(
			'User Created',
			'We are created a user!'
		);
	},
	loginSuccess() {
		this.fireSuccess(
			'Login - Success',
			'You managed to login successfully'
		);
	},
	logoutSuccess() {
		this.fireSuccess(
			'Logout - Success',
			'You managed to logout successfully'
		);
	},
	refreshingClientKey() {
		this.fireInfo('Refreshing - Client Key', 'The Client Key is being refreshed.');
	},
	refreshingClientSecret() {
		this.fireInfo('Refreshing - Client Secret', 'The Client Secret is being refreshed.');
	},
	refreshingApiKey() {
		this.fireInfo('Refreshing - API Key', 'The API Key is being refreshed.');
	},
	refreshedClientKey() {
		this.fireSuccess('Refreshed - Client Key', 'The Client Key is refreshed.');
	},
	refreshedClientSecret() {
		this.fireSuccess('Refreshed - Client Secret', 'The Client Secret is refreshed.');
	},
	refreshedApiKey() {
		this.fireSuccess('Refreshed - API Key', 'The API Key is refreshed.');
	},
	suspendingUser() {
		this.fireInfo('Suspending - User', 'The user is being suspended.');
	},
	suspendedUser() {
		this.fireSuccess('User Suspended', 'The user is suspended.');
	},
	unsuspendingUser() {
		this.fireInfo('Unsuspending - User', 'The user is being unsuspended.');
	},
	unsuspendedUser() {
		this.fireSuccess('User Unsuspended', 'The user is unsuspended.');
	},
	// Tasks
	// Starting
	projectCreate() {
		this.fireInfo( 'ToDo - Setting Project', 'We are setting up the project now.' );
	},
	cateogryCreate() {
		this.fireInfo( 'ToDo - Setting Category', 'We are setting up  the category now.' );
	},
	taskCreate() {
		this.fireInfo( 'ToDo - Setting Task', 'We are setting up  the task now.' );
	},
	// Complete
	projectCreated() {
		this.fireSuccess( 'ToDo - Project Created', 'Project is now created' );
	},
	cateogryCreated() {
		this.fireSuccess( 'ToDo - Category Created', 'Category is now created' );
	},
	taskCreated() {
		this.fireSuccess( 'ToDo - Task Created', 'Task is now created.' );
	},
	projectEdited() {
		this.fireSuccess( 'ToDo - Project Edited', 'Project is now edited' );
	},
	cateogryEdited() {
		this.fireSuccess( 'ToDo - Category Edited', 'Category is now edited' );
	},
	taskEdited() {
		this.fireSuccess( 'ToDo - Task Edited', 'Task is now edited.' );
	},
	projectDeleted() {
		this.fireSuccess( 'ToDo - Project Deleted', 'Project is now deleted' );
	},
	cateogryDeleted() {
		this.fireSuccess( 'ToDo - Category Deleted', 'Category is now deleted' );
	},
	taskDeleted() {
		this.fireSuccess( 'ToDo - Task Deleted', 'Task is now deleted.' );
	},
	// Node
	refreshingServerList() {
		this.fireInfo( 'Node - Refreshing Servers', 'We are refreshing the list...' );
	},
	refreshedServerList() {
		this.fireSuccess( 'Node - Servers Refreshed', 'The list is now refreshed' );
	},
	nodeAddServer() {
		this.fireInfo( 'Node - Server Being Added', 'Node Server is now being added.');
	},
	nodeAddedServer() {
		this.fireSuccess( 'Node - Server Added', 'Node Server is now added.')
	},
	nodeUpdateServer() {
		this.fireInfo( 'Node - Server Being Updated', 'Node Server is now being updated.')
	},
	nodeUpdateServer() {
		this.fireSuccess( 'Node - Server Updated', 'Node Server is now updated.')
	}
}