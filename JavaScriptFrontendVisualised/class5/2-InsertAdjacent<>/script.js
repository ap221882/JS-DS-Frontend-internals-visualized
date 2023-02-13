'use strict';

console.log('Script started executing');

//~> LOAD AFTER INITIAL HTML IS LOADED
document.addEventListener('DOMContentLoaded', () => {
  // const button = document.querySelector('#todo-div > div>button');
  // const input = document.querySelector('#todo-ul');
  // const todoList = document.querySelector('#todo-list>div>ul');

  //> Initial HTML
  const root = document.querySelector('#root');
  root.insertAdjacentHTML(
    'beforeend',
    ` <h1>Welcome to TODO</h1>
      <input type="text" placeholder="Enter Todo" />
      <button id="append-todo-btn">Submit</button>
      <ul id="todo-ul"></ul>`
  );

  const appendTodo = () => {
    const input = document.querySelector('#root>input');

    if (input.value !== '') {
      const todoItem = `
    <li class="todo-item">
    <button class="delete-todo">X</button>
       <input type="checkbox"> 
       <label>${input.value}</label>
       </li>
       `;
      const todoList = document.querySelector('#todo-ul');
      todoList.insertAdjacentHTML('beforeend', todoItem);
      input.value = '';
    }
  };

  //> Attaching listener to add TODO item
  const appendTodoButton = document.querySelector('#append-todo-btn');

  appendTodoButton.addEventListener('click', appendTodo);
});
