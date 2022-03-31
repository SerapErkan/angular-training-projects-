import { Component } from '@angular/core';
import {faker} from '@faker-js/faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'letter_comparison';
  randomText:string=faker.lorem.sentence();
  enteredText="";

  getInputValue(value:string){

   this.enteredText=value;

  }


  compare(randomletter:string,enteredletter:string){


    if (!enteredletter){
      return "pending";
    }
    
    return randomletter==enteredletter?"correct":"incorrect"

  }




}
//https://www.npmjs.com/package/@faker-js/faker
//random faker.lorem.sentence()