class NegotiationController {

    constructor() {
      let $ = document.querySelector.bind(document);
      this._inputDate = $('#data');
      this._inputQtd = $('#quantidade');
      this._inputVal = $('#valor');
      this._listNegotiations = new ListNegotiation();

      this._negotiationsView = new NegotiationView($('#negociacoesView'));
      this._negotiationsView.update(this._listNegotiations);

      this._message = new Message();
      this._messageView = new MessageView($('#messageView'));
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
      this._inputDate.value = '';
      this._inputQtd.value = 1;
      this._inputVal.value = 0.0;
      this._inputDate.focus();
    }
}
