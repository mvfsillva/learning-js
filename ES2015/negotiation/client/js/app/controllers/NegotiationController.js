class NegotiationController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._form = $('[data-js="form"]');
        this._inputDate = $('[data-js="date"]');
        this._inputQtd = $('[data-js="qtd"]');
        this._inputVal = $('[data-js="val"]');

        this._listNegotiations = new Bind(
            new ListNegotiation(), new NegotiationView($('[data-js="negotiations-view"]')), 'insert', 'clear'
        );

        this._message = new Bind(new Message(), new MessageView($('[data-js="message-view"]')), 'text');
    }

    insert(event) {
        event.preventDefault();
        this._listNegotiations.insert(this._createNegotiation());
        this._message.text = 'Negociação adicionada com sucesso!';
        this._clearForm();
    }

    delete() {
        this._listNegotiations.clear();
        this._message.text = 'Negociação apagada com sucesso!';
    }

    _createNegotiation() {
        return new Negotiation(
            DateHelper.textToDate(this._inputDate.value),
            this._inputQtd.value,
            this._inputVal.value
        );
    }

    _clearForm() {
        this._form.reset();
        this._inputDate.focus();
    }
}
