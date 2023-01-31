class Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  //~? no .prototype object creation --------------------------------
  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  print() {
    console.log(this.name, this.balance);
  }
}

const myAccount = new Account('Brendan Eich', 1000);
myAccount.deposit(100);
myAccount.print();

//~! We are not able to do this stupidity

//? const stupidity = new myAccount.deposit(100);
//~# gives an error - myAccount.deposit is not a constructor
