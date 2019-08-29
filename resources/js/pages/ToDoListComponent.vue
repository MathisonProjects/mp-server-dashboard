<template>
	<div>
		<div class='row border'>
			<div class='col-xs-12 col-md-3 border py-3'>

				<h4><a href='javascript:void(0)' @click='openModal({ modal: "CreateProject", params: {} })'><i class="fas fa-plus"></i></a> Projects</h4>
				<ul class='list-group' v-if="toDo.projects.length > 0">
					<li class='list-group-item list-group-item-dark' v-for='project, index in toDo.projects' @click='selectItem("project", index)'>
						<a href='javascript:void(0)'><i class="fas fa-trash" @click="deleteProject({ id: project.id })"></i></a>
						<a href='javascript:void(0)'>{{ project.Name }}</a>
					</li>
				</ul>

				<div class='my-2' v-if='selected.project != null'>
					<h4><a href='javascript:void(0)' @click='openModal(
						{
							modal: "CreateCategory", 
							params: { ProjectId : toDo.projects[selected.project].id }
						})'><i class="fas fa-plus"></i></a> Categories</h4>
					<ul class='list-group' v-if="toDo.categories.length > 0">
						<li class='list-group-item list-group-item-light' v-for='category, index in toDo.categories' @click='selectItem("category", index)' v-if='toDo.projects[selected.project].id == category.ProjectId'>
							<a href='javascript:void(0)'><i class="fas fa-trash" @click="deleteCategory({ id: category.id })"></i></a>
							<a href='javascript:void(0)'>{{ category.Name }}</a>
						</li>
					</ul>
				</div>

				<div class='my-2' v-if='selected.category != null'>
					<h4><a href='javascript:void(0)' @click='openModal({ modal: "CreateTask", params: { CategoryId : toDo.categories[selected.category].id } })'><i class="fas fa-plus"></i></a> Tasks</h4>
					<ul class='list-group' v-if="toDo.tasks.length > 0">
						<li :class='taskGroupItemClass(task.Status)' @click='selectItem("task", index)' v-for='task, index in toDo.tasks' v-if='toDo.categories[selected.category].id == task.CategoryId'>
							<a href='javascript:void(0)'><i class="fas fa-trash" @click="deleteTask({ id: task.id })"></i></a>
							<a href='javascript:void(0)'>{{ task.Name }}</a>
						</li>
					</ul>
				</div>
					
			</div>
			<div class='col-xs-12 col-md-9 py-3'>
				<div class="card my-3" v-if='selected.project != null'>
					<div class="card-header">
						<h4><a href='javascript:void(0)' @click='openModal({ modal: "CreateProject", params : toDo.projects[selected.project] })'><i class="fas fa-pen-square"></i></a> Project - {{ toDo.projects[selected.project].Name }}</h4>
					</div>
					<div class="card-body">
						<p>{{ toDo.projects[selected.project].Description }}</p>
					</div>
				</div>

				<div class="card my-3" v-if='selected.category != null'>
					<div class="card-header">
						<h5><a href='javascript:void(0)' @click='openModal({ modal: "CreateCategory", params : toDo.categories[selected.category] })'><i class="fas fa-pen-square"></i></a> Category - {{ toDo.categories[selected.category].Name }}</h5>
					</div>
					<div class="card-body" v-if="toDo.categories[selected.category].Description != null">
						<p>{{ toDo.categories[selected.category].Description }}</p>
					</div>
				</div>

				<div class="card my-3" v-if='selected.task != null'>
					<div class="card-header">
						<h6><a href='javascript:void(0)' @click='openModal({ modal: "CreateTask", params : toDo.tasks[selected.task] })'><i class="fas fa-pen-square"></i></a> Task - {{ toDo.tasks[selected.task].Name }}</h6>
					</div>
					<div class="card-body">
						<div  v-if="toDo.tasks[selected.task].Description != null">
							<h5>Description</h5>
							<p>{{ toDo.tasks[selected.task].Description }}</p>
						</div>

						<h5>Status</h5>
						<p v-if="toDo.tasks[selected.task].Status == 0" class='text-warning'><i class="fas fa-clipboard-list"></i> Planned</p>
						<p v-if="toDo.tasks[selected.task].Status == 1" class='text-info'><i class="fas fa-running"></i> In Progress</p>
						<p v-if="toDo.tasks[selected.task].Status == 2" class='text-danger'><i class="fas fa-stop"></i> Blocker</p>
						<p v-if="toDo.tasks[selected.task].Status == 3" class='text-success'><i class="fas fa-check"></i> Complete</p>
					</div>
				</div>

			</div>
		</div>
		<ModalComponent :params='modalParams' @handleModal='handleModal' v-if='showModal' />
	</div>
</template>

<script>
	import ModalComponent from "../components/ToDo/ModalComponent";

	export default {
		name: 'to-do-list-component',
		components: {
			ModalComponent
		},
		props: [],
		created() {
			this.refreshTasks();
		},
		data() {
			return {
				modalParams: {},
				showModal  : false
			}
		},
		computed: {
			selected() {
				if (this.$store.state.toDoStore.projects.length == 0) {
					this.$store.dispatch('toDoStore/resetSelected');
				}
				return this.$store.state.toDoStore.selected;
			},
			toDo() {
				return {
					projects   : this.$store.state.toDoStore.projects,
					categories : this.$store.state.toDoStore.categories,
					tasks      : this.$store.state.toDoStore.tasks
				};
			},
		},
		methods: {
			taskGroupItemClass(status) {
				if (status == 0) {
					return 'list-group-item list-group-item-warning';
				} else if (status == 1) {
					return 'list-group-item list-group-item-info';
				} else if (status == 2) {
					return 'list-group-item list-group-item-danger';
				} else if (status == 3) {
					return 'list-group-item list-group-item-success';
				}
			},
			selectItem(type, id) {
				this.$store.dispatch('toDoStore/setSelected', { type: type, id: id });
			},
			openModal(args) {
				this.modalParams = args;
				this.showModal = true;
			},
			handleModal(args) {
				if (args.function !== undefined) {
					if (args.function == 'addProject') {
						var data = {
							Name       : args.name,
							Description: args.description
						};

						if (args.id !== undefined && args.id != null) {
							data.id = args.id;
							this.apiFire('editProject', data);
						} else {
							this.apiFire('createProject', data);
						}

					} else if (args.function == 'addCategory') {
						var data = {
							ProjectId  : args.projectId,
							Name       : args.name,
							Description: args.description
						};

						if (args.id !== undefined && args.id != null) {
							data.id = args.id;
							this.apiFire('editCategories', data);
						} else {
							this.apiFire('createCategories', data);
						}

					} else if (args.function == 'addTask') {
						var data = {
							CategoryId : args.categoryId,
							Name       : args.name,
							Description: args.description,
							SubtaskOf  : args.subtaskOf,
							Status     : args.status
						};

						if (args.id !== undefined && args.id != null) {
							data.id = args.id;
							this.apiFire('editTasks', data);
						} else {
							this.apiFire('createTasks', data);
						}
					}
				}

				this.showModal = false;
			},
			deleteProject(data) {
				this.apiFire('deleteProject', data);
			},
			deleteCategory(data) {
				this.apiFire('deleteCategories', data);
			},
			deleteTask(data) {
				this.apiFire('deleteTasks', data);
			},
			apiFire(endpoint, data) {
				axios.post('api/v1/todo/' + endpoint, data).then(response => {
					this.refreshTasks();
					if (endpoint == "editProject") {
						this.$Helper.notifications.projectCreated();
					} else if (endpoint == "createProject") {
						this.$Helper.notifications.cateogryCreated();
					} else if (endpoint == "editCategories") {
						this.$Helper.notifications.taskCreated();
					} else if (endpoint == "createCategories") {
						this.$Helper.notifications.projectEdited();
					} else if (endpoint == "editTasks") {
						this.$Helper.notifications.cateogryEdited();
					} else if (endpoint == "createTasks") {
						this.$Helper.notifications.taskEdited();
					} else if (endpoint == "deleteProject") {
						this.$Helper.notifications.projectDeleted();
					} else if (endpoint == "deleteCategories") {
						this.$Helper.notifications.cateogryDeleted();
					} else if (endpoint == "deleteTasks") {
						this.$Helper.notifications.taskDeleted();
					}
				});
			},
			refreshTasks() {
				this.$store.dispatch('toDoStore/refreshTasks');
			}
		}
	};
</script>

<style scoped>

</style>