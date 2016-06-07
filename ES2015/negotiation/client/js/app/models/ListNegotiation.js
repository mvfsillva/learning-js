class ListNegotiation {
  constructor() {
    this._negotiations = [];
  }

  insert(_negotiations){
    this._negotiations.push(negotiation);
  }

  get negotiations(){
    return [].concat(this._negotiations);
  }
}
