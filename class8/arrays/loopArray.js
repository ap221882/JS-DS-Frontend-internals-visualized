//> Four ways to iterate Javacript Arrays

//> 1. for
//> 2. for in (for INdex)
//> 3. for of (Value of)
//> 4. forEach (executes the callback for every value - avoiding the length of the array)

const array = [1, 2, 3];
array[-1] = 'Ajay';
array[9] = 10;

//* for
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//* for in - it prints all the keys of the object

console.log('');

for (let index in array) {
  console.log(`${index}:${array[index]}`);
}

console.log('');
//* for of - it prints taking in the consideration the length of the array, even if the array is sparse, it will try to evaluate every index and else will return undefined
for (let value of array) {
  console.log(value);
}

console.log('');
//* forEach - runs for every value in the array, and executes the callback taking it as first argument of the callback

array.forEach((value) => {
  console.log(value);
});
