//~* * * * * * * * * * * * * * * * * * * * *
//~# * * * * * *OOP IN JS* * * * * * * * * *
//~* * * * * * * * * * * * * * * * * * * * *

//~? constructor function

function Account(name, balance) {
  this.name = name;
  this.balance = balance;

  //~! DONT CREATE THIS FUNCTION ON EVERY INSTANCE OF ACCOUNT
  //- this.deposit = function (amount) {
  //-   this.balance += amount;
  //- }
}

Account.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

//~! this of arrow function is not binded to the instance of Account
//~^ It   will   modify   the (global)  it's  lexical  scope's  this
//- Account.prototype.deposit =  (amount) => {
//-   this.balance += amount;
//- }

Account.prototype.deposit = function (amount) {
  this.balance += amount;
};

Account.prototype.print = function () {
  console.log(`${this.name}'s balance is ${this.balance}`);
};

const account1 = new Account('Brendan Eich', 1000);
account1.deposit(500);
account1.withdraw(200);
console.log(account1.print());
