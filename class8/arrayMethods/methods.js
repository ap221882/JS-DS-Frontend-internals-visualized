//> For adding/removing elements from start/end of an array
//* shift(inspiration from shell programming maybe) to delete, unshift to add to beginning of array
//* push to add to end of array and pop to remove from end of array

//% below methods take callback - arrow can be good use case as it creates no prototype object

//# SOME DECLARATIVE METHODS
const array = [1, 2, 4];

const doubledArray = array.map((item) => item * 2);

const filteredEven = array.filter((item) => item % 2 === 0);

const even_OneIsEven = array.some((item) => item % 2 === 0); // boolean

const isEveryOneEven = array.every((item) => item % 2 === 0); // boolean

const sumOfTheArray = array.reduce(
  (total, currentNumber) => total + currentNumber
);

console.log(sumOfTheArray);
