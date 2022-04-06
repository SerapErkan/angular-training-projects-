import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-diveder',
  templateUrl: './diveder.component.html',
  styleUrls: ['./diveder.component.scss']
})
export class DivederComponent implements OnInit {
@Input()title='';
  constructor() { }

  ngOnInit(): void {
  }
  

}
