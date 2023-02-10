'use strict';

console.log('Script started executing');

const button = document.querySelector('#todo-div > div>button');
const input = document.querySelector('#todo-ul');
const todoList = document.querySelector('#todo-list>div>ul');

const appendTodo = () => {
  const newTodo = document.createElement('li');
  const input = document.querySelector('#todo-div>div>input');
  console.log(input.value);
  if (input.value !== '') {
    newTodo.textContent = input.value;
    const todoList = document.querySelector('#todo-ul');
    console.log(todoList, 'todoList');
    todoList.appendChild(newTodo);
    input.value = '';
  }
};

console.log('button', button);
console.log('input', input);
