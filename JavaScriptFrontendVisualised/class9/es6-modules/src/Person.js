class Person {
  constructor(name) {
    this.name = name;
  }
  print() {
    console.log(this.name);
  }
}

export default { Person: Person };
