//~* Base Class Definition

function Account(name, balance) {
  this.name = name;
  this.balance = balance;
}

Account.prototype.deposit = function (amount) {
  this.balance += amount;
};

Account.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

Account.prototype.print = function () {
  console.log(this.name + ':' + this.balance);
};

//~* Inherited class definition

function SavingsAccount(name, balance) {
  this.name = name;
  this.balance = balance;
}

//~! TODO
