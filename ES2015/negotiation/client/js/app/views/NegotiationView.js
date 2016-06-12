class NegotiationView extends View {
  constructor(element) {
    super(element);
  }

  template(model) {
      return `<table class="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                  </tr>
                </thead>

                <tbody>
                    ${model.negotiations.map(n => `
                        <tr>
                            <td>${DateHelper.dateToText(n.date)}</td>
                            <td>${n.qtd}</td>
                            <td>${n.val}</td>
                            <td>${n.volume}</td>
                        </tr>
                    `).join('')}
                </tbody>
                <tfoot>
                  <td colspan="3"></td>
                  <td>${model.negotiations.reduce((total, n) => total + n.volume, 0.0)}</td>
                </tfoot>
              </table>`;
  }

}
