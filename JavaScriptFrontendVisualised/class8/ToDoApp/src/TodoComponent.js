class TodoComponent {
  constructor(service) {
    this.service = service;
    //~% Get the VIEW to be dynamically injected to the DOM    .
    this.createView();
    //~^ RENDER ALL THE TODOS DYNAMICALLY TO THE DOM
    //~? Handling the Interactions -  Handlers
  }

  createView() {
    const mainTemplate = `
    <h3>Welcome to ToDo</h3>
    <div>
    <input id="todo-input" type="text" placeholder="Enter Todo"/>
    <button id="add-todo-button">Add</button>
    <ul id="todo-ul"></ul>
    </div>`;

    const rootElement = document.querySelector('#root');
    rootElement.insertAdjacentHTML('beforeend', mainTemplate);
  }

  renderTodo(todo) {
    const template = `
    <li id="todo-${todo}">X</li>
    <input type="checkbox" ${todo.completed ? 'checked' : ''}/>
    <label>${todo.text}</label>`;

    const ul = document.querySelector('#todo-ul');
    const insertedLi = ul.querySelector(`todo-${todo.id}`);
  }
}

module.exports = TodoComponent;
