class Account {
  #name;
  #balance;
  constructor(name, balance) {
    this.#name = name;
    this.#balance = balance;
  }

  get name() {
    return this.#name;
  }

  get balance() {
    return this.#balance;
  }

  withdraw(value) {
    this.#balance -= value;
  }

  deposit(value) {
    this.#balance += value;
  }
}

class SavingsAccount extends Account {
  constructor(name, balance) {
    super(name, balance);
  }

  withdraw(amount) {
    if (this.balance - amount < 250) {
      throw new Error('Minimum balance is more than 250');
    }
  }
}

class PublicAccount extends Account {
  constructor(name, balance) {
    super(name, balance);
  }
  deposit(amount) {
    //~! here we are accessing the getter function not the #balance field
    if (amount - this.balance > 2500) {
      throw new Error('Cannot withdraw more than 2500');
    }
  }
}

console.log(PublicAccount.__proto__);

const account1 = new SavingsAccount('Ajay', 1000);
// account1.withdraw(3000);
