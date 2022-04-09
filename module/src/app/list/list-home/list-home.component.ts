import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.scss']
})
export class ListHomeComponent implements OnInit {


  numbers = [
    { value: 50, label: 'Müşteri' },
    { value: 4500, label: 'Ciro' },
    { value: 80, label: 'Yorum' }
  ]
  images = [
    {
      image: '/assets/couch.jpeg',
      title: 'Koltuk',
      description: 'Rahat bir koltuk'

    },
    {
      image: '/assets/dresser.jpeg',
      title: 'Şifonyer',
      description: 'Her türlü eşyanızı koya bileceginiz şifonyer'

    },
 
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
