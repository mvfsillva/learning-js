class DateHelper {
  constructor(){
    throw new Error('Esta classe não pode ser instanciada');
  }

  static convertDate(date){
    return `${data.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  }

  static convertText(text){
    if(/\d{4}-\d{2}-\d{2}/.test(text))
      throw new Error('A data deve estar no formado yyyy-mm-dd');
      
    return new Date(...text.split('-').map((item, index) => item - index % 2));
  }
}
