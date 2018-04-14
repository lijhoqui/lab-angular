import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable()
export class YesOrNotService {

  urlYesOrNot:string = 'https://yesno.wtf/';

  constructor(public _httpClient: HttpClient) {
      console.log("Servicio listo");
   }

   getAnswer(){
    let url = `${this.urlYesOrNot}/api`;
    return  this._httpClient.get(url, {});
  }
}
