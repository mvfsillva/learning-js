class NegotiationView {

  constructor(element){
    this._element = element;
  }

  _template(model){
    return
      `<table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th>DATA</th>
              <th>QUANTIDADE</th>
              <th>VALOR</th>
              <th>VOLUME</th>
            </tr>
          </thead>
          <tbody>
            ${model.NegotiationView.map((n) =>{
              return
              `<tr>
                <td>${DateHelper.convertText(n.date)}</td>
                <td>${n.qtd}</td>
                <td>${n.val}</td>
                <td>${n.volume}</td>
              </tr>`
            }).join('')}
          </tbody>
        </table>`;
  }

  update(model){
    this._element.innerHTML = this._template(model);
  }
}
