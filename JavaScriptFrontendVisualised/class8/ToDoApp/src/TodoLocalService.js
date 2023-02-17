const Todo = require('./Todo');

class ToDoLocalService {
  constructor() {
    this.todoList = [];
    this.storageKey = 'todo-app';
    this.load();
  }

  addTodo(text, completed = false) {
    const newTodo = new Todo(text, completed);

    this.todoList.push(newTodo);

    this.save();
  }

  save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.todoList));
  }

  load() {
    this.todoList = localStorage.getItem(this.storageKey);
  }
}

module.exports = ToDoLocalService;
