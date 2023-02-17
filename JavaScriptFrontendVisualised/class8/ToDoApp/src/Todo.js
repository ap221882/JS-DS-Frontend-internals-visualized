class Todo {
  static lastTodo = 0;
  constructor(text, completed) {
    this.id = ++lastTodo;
    this.text = text;
    this.completed = completed;
  }
}

module.exports = Todo;
