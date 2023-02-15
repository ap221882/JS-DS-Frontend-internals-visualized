//~* VIEWS ARE FOR DIFFERENT VIEWS GENERATED FOR THE SAME DATA...........|

//> Our ToDo application demands **MODEL OBJECTS** & **CONTROLLER** to render & adding views

//~> MODEL
//~? This can be a class providing all the models, Here there is only one model

class Todo {
  //^ ID should be unique among all the Todos and it should be generated automatically by code

  static lastTodoIndex = 0;

  constructor(text, completed = false) {
    this.id = ++lastTodoIndex;
    this.text = text;
    this.completed = completed;
  }
}

//~> Service
//~? Service handles the CRUD of todos and save and loads it
class TodoLocalService {
  constructor() {
    this.todoList = [];
    this.storageKey = 'todoData';
    this.load();
  }

  //>Create
  addTodo(text, completed = false) {
    const newTodo = new Todo(text, completed);
    this.todoList.push(newTodo);
    this.save();
  }

  //> Read all
  getAllTodos() {
    return this.todoList;
  }

  //> Read single
  getTodo(id) {
    return this.todoList.find((todo) => todo.id === id);
  }

  //> Update single
  updateTodo(id, completed) {
    const toBeUpdatedTodo = this.todoList.find((todo) => todo.id === id);
    if (toBeUpdatedTodo) {
      toBeUpdatedTodo.completed = completed;
    }
  }

  //> Delete single
  deleteTodo(id) {
    return this.todoList.filter((todo) => todo.id === id);
  }

  //> Save to storage
  save() {
    //~# local storage needs a string to store in it, else it will be coerced
    localStorage.setItem(this.storageKey, JSON.stringify(this.todoList));
  }
  //> Load from the storage
  load() {
    this.todoList = localStorage.getItem(
      this.storageKey,
      JSON.stringify(this.todo)
    );
  }
}

//~> MV Controller
class TodoComponent {
  constructor() {
    //> register to the service
    //> render from here
  }
  //> render TODO
}

document.addEventListener(
  'DOMContentLoaded',
  new TodoComponent(new TodoLocalService())
);
