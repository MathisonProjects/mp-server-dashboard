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
	// Tasks
	// Starting
	projectCreate() {
		this.fireInfo(
			'ToDo - Setting Project',
			'We are setting up the project now.'
		);
	},
	cateogryCreate() {
		this.fireInfo(
			'ToDo - Setting Category',
			'We are setting up  the category now.'
		);
	},
	taskCreate() {
		this.fireInfo(
			'ToDo - Setting Task',
			'We are setting up  the task now.'
		);
	},
	// Complete
	projectCreated() {
		this.fireSuccess(
			'ToDo - Project Created',
			'Project is now created'
		);
	},
	cateogryCreated() {
		this.fireSuccess(
			'ToDo - Category Created',
			'Category is now created'
		);
	},
	taskCreated() {
		this.fireSuccess(
			'ToDo - Task Created',
			'Task is now created.'
		);
	},
	projectEdited() {
		this.fireSuccess(
			'ToDo - Project Edited',
			'Project is now edited'
		);
	},
	cateogryEdited() {
		this.fireSuccess(
			'ToDo - Category Edited',
			'Category is now edited'
		);
	},
	taskEdited() {
		this.fireSuccess(
			'ToDo - Task Edited',
			'Task is now edited.'
		);
	},
	projectDeleted() {
		this.fireSuccess(
			'ToDo - Project Deleted',
			'Project is now deleted'
		);
	},
	cateogryDeleted() {
		this.fireSuccess(
			'ToDo - Category Deleted',
			'Category is now deleted'
		);
	},
	taskDeleted() {
		this.fireSuccess(
			'ToDo - Task Deleted',
			'Task is now deleted.'
		);
	}

}