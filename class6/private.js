class Employee {
  //~% JS classes have private fields
  #id;
  #name;

  constructor(id, name) {
    this.#id = id;
    this.#name = name;
  }

  get id() {
    return this.#id;
  }

  set id(value) {
    return (this.#id = value);
  }

  get name() {
    return this.#name;
  }

  //~! private methods not a good idea! They are on every instance of class Employee
  #printEmployee() {
    console.log(this.id, this.name);
  }
}

const Employee1 = new Employee(1, 'Ajay');
console.log(Employee1.id);
console.log(Employee1.name);
Employee1.name = 'Pathak';

//~! no setter so it does nothing to the class's name field
console.log(Employee1.name);
