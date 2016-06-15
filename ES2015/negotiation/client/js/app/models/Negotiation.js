class Negotiation {
    constructor(date, qtd, val) {
        this._date = new Date(date.getTime());
        this._qtd = qtd;
        this._val = val;
        Object.freeze(this); // makes all read only
    }

    get volume() {
        return this._qtd * this._val;
    }

    get date() {
        return new Date(this._date.getTime());
    }

    get qtd() {
        return this._qtd;
    }

    get val() {
        return this._val;
    }
}
