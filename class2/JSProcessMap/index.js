//~* Without the declaration with var/let/const
a = 7;

var a = 10;
var b = 20;

const add = function (a, b) {
  console.log(a + b);
};

add(1, 2);

//~% by the name of anonymous, key is created in the dictionary in the heap referenced by stackframe
(function (a, b) {
  console.log(a + b);
})(1, 2);
