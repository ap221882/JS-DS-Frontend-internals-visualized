const info = {
  //~! F I E L D S
  name: 'Ajay',
  gender: 'Male',

  //~! M E T H O D S
  printName: function () {
    console.log('Ajay');
  },
};

console.log(info);
//~? Object.setPrototypeOf() is a good way, __proto__ creates bugs
console.log(info.__proto__);

const infoExtended = {};
infoExtended.__proto__ = info;
console.log(infoExtended.name);
