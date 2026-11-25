import { TodoList } from "./todo.js";

const myTodos = new TodoList();

myTodos.addTask("Learn Node.js Modules");
myTodos.addTask("Complete JavaScript Exercises");
myTodos.addTask("Go for a run");

myTodos.completeTask(1);
myTodos.listTasks();