class NegotiationController {

    constructor() {
      let $ = document.querySelector.bind(document);
      this._inputDate = $('[data-js="data"]');
      this._inputQtd = $('[data-js="quantidade"]');
      this._inputVal = $('[data-js="valor"]');
      this._listNegotiations = new ListNegotiation();
      this._negotiationsView = new NegotiationView($('[data-js="negociacoesView"]'));

      this._negotiationsView.update(this._listNegotiations);
    }

    insert(event) {
        event.defaultPrevented();

        this._listNegotiations.insert(this._createNegotiation());
        this._negotiationsView.update(this._listNegotiations);
        //this._isClearForm();
    }

    _createNegotiation(){
      return new Negotiation(
        DateHelper.convertText(this._inputDate.value),
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
