//~! There are no arrays in JS
//~# are objects with length property

//~* length will only count positive numeric indexes &&&&&&&&(largest recorded index - 1)

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayObject = { 0: 1, 1: 2, 2: 3 };

array[-1] = 'ajay';
array[{}] = [];
console.log(array);
console.log(array.length);

//* Other languages
//> 1. Array are contiguous in memory
//> 2. Array are not indexed but offsets from the beginning of the array, e.g., array's second value from the beginning is arr[1] - in C - 4 bytes difference between consecutive values in an int array
//>3. Arrays are homogeneous in type -  every element has the same type
