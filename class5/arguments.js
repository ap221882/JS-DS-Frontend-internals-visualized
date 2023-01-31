//#$$$!! console.log(arguments);

function sum(a, b) {
  console.log(arguments, 'arguments in function declaration');
}

sum(1, 2);

//~% Arrows take arguments and this of its lexical scope/ execution context
const arrowSum = (a, b) => {
  console.log(arguments, 'arguments in arrow function');
  return a + b;
};

arrowSum(1, 2);
