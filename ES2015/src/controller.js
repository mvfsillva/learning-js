import axios from 'axios';
import Model from './model';

const host = 'http://localhost:4000';

class Controler{
  constructor(){
    this.render();
  };

  parseHtml(str){
    let domparser = new DOMParser();
    let doc = domparser.parseFromString(srt, 'text/html');
    let  docfrag = document.createDocumentFragment();
    doc.addEventListener('click', function(){
      console.log('teste');
    }, false);
    docfrag.appendChild(doc.documentElement);
    return docfrag;
  }
}

export default Controller;
