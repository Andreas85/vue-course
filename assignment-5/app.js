const app = Vue.createApp({
	data() {
		return {
			taskInput: '',
			tasks: [],
			showTasksList: true
		};
	},
	methods: {
		addTask() {
			this.tasks.push(this.taskInput);
			this.taskInput = '';
		},
		toggleTasksList() {
			this.showTasksList = !this.showTasksList;
		}
	},
	computed: {
		toggleTasksButtonText() {
			return this.showTasksList ? 'Hide list' : 'Show list';
		}
	}
});

app.mount('#assignment');
