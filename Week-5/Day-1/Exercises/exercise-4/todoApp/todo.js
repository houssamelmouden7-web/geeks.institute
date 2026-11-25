export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(title) {
    this.tasks.push({ id: this.tasks.length + 1, title, completed: false });
  }

  completeTask(id) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.completed = true;
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
  }

  listTasks() {
    console.log("--- Todo List ---");
    this.tasks.forEach((task) => {
      const status = task.completed ? "[x]" : "[ ]";
      console.log(`${task.id}. ${status} ${task.title}`);
    });
  }
}