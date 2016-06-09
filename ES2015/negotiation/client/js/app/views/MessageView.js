class MessageView extends View{
  constructor(element) {
    super(element);
  }

  template(){
    return model.text ? `<p class="alert alert-info">${model.text}</p>` : '<p></p>';
  }
}
