import { Component, OnInit } from '@angular/core';
import { YesOrNotService } from '../../services/yesornot.service';

@Component({
  selector: 'app-yesornot',
  templateUrl: './yesornot.component.html',
  styleUrls: ['./yesornot.component.scss']
})
export class YesornotComponent  {

  question:string = '';
  res: any= {};
  constructor(public _yesornot:YesOrNotService) { }

  searchAnswer() {
    if(this.question.length == 0){
      return;
    }

    this._yesornot.getAnswer().subscribe(res => {this.res = res;
      console.log(res);
    });
  }



}
