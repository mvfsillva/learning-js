class ListNegotiation {
    constructor(trap) {
        this._negotiations = [];
        this._trap = trap;
    }

    insert(negotiation) {
        this._negotiations.push(negotiation);
    }

    get negotiations() {
        return [].concat(this._negotiations);
    }

    clear() {
        this._negotiations = [];
        this._trap(this);
    }
}
