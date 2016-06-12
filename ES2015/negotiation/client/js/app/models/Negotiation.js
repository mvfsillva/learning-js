class Negotiation {
    constructor(date, qtd, val) {
        this._date = new Date(date.getTime());
        this._qtd = 1;
        this._val = 0.0;
        Object.freeze(this); // makes all read only
    }

    get volume() {
        return this.qtd * this.val;
    }

    get date() {
        return new Date(this._date.getTime());
    }

    get qtd() {
        return this._qtd;
    }

    get val() {
        this._val;
    }
}
