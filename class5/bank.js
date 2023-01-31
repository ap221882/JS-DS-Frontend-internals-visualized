//~* * * * * * * * * * * * * * * * * * * * *
//~# * * * * * *OOP IN JS* * * * * * * * * *
//~* * * * * * * * * * * * * * * * * * * * *

//~? constructor function

function अकाउंट(नाम, बैलेंस) {
  this.नाम = नाम;
  this.बैलेंस = बैलेंस;

  //~! DONT CREATE THIS FUNCTION ON EVERY INSTANCE OF ACCOUNT
  //- this.deposit = function (amount) {
  //-   this.balance += amount;
  //- }
}

अकाउंट.prototype.withdraw = function (amount) {
  this.बैलेंस -= amount;
};

//~! this of arrow function is not binded to the instance of Account
//~^ It   will   modify   the (global)  it's  lexical  scope's  this
//- Account.prototype.deposit =  (amount) => {
//-   this.balance += amount;
//- }

अकाउंट.prototype.deposit = function (amount) {
  this.बैलेंस += amount;
};

अकाउंट.prototype.print = function () {
  console.log(`${this.नाम}'s अकाउंट बैलेंस is ${this.बैलेंस}`);
};

const account1 = new अकाउंट('Brendan Eich', 1000);
account1.deposit(500);
account1.withdraw(200);
account1.print();
