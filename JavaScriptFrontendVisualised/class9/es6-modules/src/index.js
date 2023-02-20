//~! NAMED EXPORTS ARE NOT DESTRUCTURING - BOTH have same SYNTAX but different MEANING

// * import { Person } from './Person.js'; // THIS IS WRONG
import PersonModule from './Person.js'; //~# Hurray!!! It works

const { Person } = PersonModule;

console.log('ES Module is here!!!!!');

//~% ES MODULES --------------------------------
//~*  NO NEED OF WEBPACK -----------------------

console.log(Person, 'Person is here!!!!!');
