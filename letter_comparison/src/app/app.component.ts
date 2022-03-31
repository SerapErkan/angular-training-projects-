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
}
//https://www.npmjs.com/package/@faker-js/faker
//random faker.lorem.sentence()