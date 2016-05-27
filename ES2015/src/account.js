class Account {
  constructor(number, owner) {
    this.number = number;
    this.owner = owner;
    this.sale = 0;
  }

  deposit(qnt) {
    if(qnt > 0) {
      return this.sale += qnt;
    }
    throw new Error(" --- ");
  }

  withdraw(qnt) {
    if(qnt <= this.sale) {
      return this.sale -= qnt;
    }
    throw new Error("Error");
  }

  checkSale() {
    return this.sale;
  }
}

class CurrentAccount extends Account {
  constructor(number, owner){
    super(number, owner);
    this.type = 'Current';
  }
}
