class NegotiationController {

    constructor() {
      let $ = document.querySelector.bind(document);
      this._inputDate = $('[data-js="data"]');
      this._inputQtd = $('[data-js="quantidade"]');
      this._inputVal = $('[data-js="valor"]');
      this._listNegotiations = new ListNegotiation();

      this._negotiationsView = new NegotiationView($('[data-js="negociacoesView"]'));
      this._negotiationsView.update(this._listNegotiations);

      this._message = new Message();
      this._messageView = new MessageView($('[data-js="messageView"]'));
      this._messageView.update(this._message);
    }

    insert(event) {

      event.preventDefault();
      this._listNegotiations.insert(this._createNegotiation());
      this._negotiationsView.update(this._listNegotiations);

      this._message.text = 'Negociação adicionada com sucesso!';
      this._messageView.update(this._message);

      this._isClearForm();
  }

    _createNegotiation(){
      return new Negotiation(
        DateHelper.textToDate(this._inputDate.value),
        this._inputQtd.value,
        this._inputVal.value
      );
    }

    _isClearForm(){
      $('[data-js="form"]').reset();
      this._inputDate.focus();
    }
}
