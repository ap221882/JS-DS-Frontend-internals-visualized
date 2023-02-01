//~>        Object.defineProperty                   .

const freezedObject = Object.defineProperty(this, 'id', {
  value: 4,
  writable: true,
  enumerable: true,
  //~? Master Key - cant modify the key config again .
  configurable: false,
});

console.log(freezedObject, 'freezedObject');
console.log('Ajay');

//~> Object.defineProperties -              short  way
function name(id, name) {
  Object.defineProperties(this, {
    id: {
      value: id,
      writable: false,
      configurable: false,
    },
    value: {
      value: name,
      writable: false,
      configurable: false,
    },
  });
}
