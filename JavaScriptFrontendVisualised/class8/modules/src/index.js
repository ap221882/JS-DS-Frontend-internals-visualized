//~>  AMD of browsers, CommonJS of Node and UMD which both environments support

//~# WEBPACK FOR THE RESCUE

console.log('Module is here!!!!!');

//~% this is named import in commonjs modules
const { Person } = require('./Person');

console.log(Person, 'Person is here!!!!!');
