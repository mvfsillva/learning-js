class ListNegotiation {
  constructor() {
    this._negotiations = [];
  }

  insert(negotiation){
    this._negotiations.push(negotiation);
  }

  get negotiations(){
    return [].concat(this._negotiations);
  }
}
