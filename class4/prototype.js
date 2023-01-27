function Employee(name, id) {
  this.name = name;
  this.id = id;

  //~! Static Property
  this.printName = function () {
    console.log(this.name);
  };
}

//~% Delegated Property to the Prototype
Employee.prototype.printMyName = function () {
  console.log(this.name);
};

const employee1 = new Employee('Ajay', 1);
const employee2 = new Employee('Amit', 2);

console.log(employee1);
employee1.printMyName();

//~? FATHER - constructor function
//~? MOTHER - prototype OBJECT
//~? CHILD - instance OBJECT/ created by new or other methods
