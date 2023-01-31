function Employee(id, name) {
  this.id = id;
  this.name = name;

  //~* It is not a member function
  function printEmployeeNormal() {
    console.log(this.name, this.id);
  }

  const printEmployeeArrow = () => {
    console.log(this.name, this.id);
  };
  printEmployeeNormal();
  printEmployeeArrow();
}

new Employee(1, 'Ajay');

//~! These will give error bcoz out of scope
// employee1.printEmployeeArrow();
// employee1.printEmployeeNormal();
