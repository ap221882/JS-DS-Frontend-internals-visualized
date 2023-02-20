//~?  IN JAVASCRIPT, THE WHOLE OF YOUR CODE IS WRAPPED WITH AN ANONYMOUS FUNCTION

//~>```````````````formal parameters
function add(a: number, b: number) {
  //> a & b are local variables
  //~! return value is a variable stored inside the execution context/stack-frame
  return a + b;
}
const c = add(9, 6);
console.log(c);
