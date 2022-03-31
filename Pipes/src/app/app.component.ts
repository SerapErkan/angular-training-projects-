import { DatePipe } from '@angular/common';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'Pipes';
  name = "";
  date = "";
  money: number = 0;

  onNameChange(value: string) {
    this.name = value;

  }

  onDateChange(value: string) {
    this.date = value;
  }

  onMonetChange(value: string) {

    this.money = parseFloat(value);

  }


}
