import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popups-home',
  templateUrl: './popups-home.component.html',
  styleUrls: ['./popups-home.component.scss']
})
export class PopupsHomeComponent implements OnInit {
modalOpen=false;

  constructor() { }

  ngOnInit(): void {
  }
  
  onClick(){
      this.modalOpen=!this.modalOpen;
  }
}
