class ListNegotiation {
    constructor() {
        this._negotiations = [];
    }

    insert(negotiation) {
        this._negotiations.push(negotiation);
    }

    get negotiations() {
        return [].concat(this._negotiations);
    }

    clear() {
        this._negotiations = [];
    }

    get volumeTotal(){
        return this._negotiations.reduce((total, n) => total + n.volume, 0.0);
    }
}
