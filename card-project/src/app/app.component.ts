import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'card-project';
  posts = [{
    title: 'Pop Art Portre-1',
    subTitle: '@user1',
    imageUrl: 'assets/1.jpg',
    content: 'Sanatın amacı, ruhumuzu, gündelik hayatın tozlarından temizlemektir..'
  }, {
    title: 'Pop Art Portre-2',
    subTitle: '@user2 ',
    imageUrl: 'assets/2.jpg',
    content: 'Rafael gibi resim yapabilmek 4 senemi aldı, ama bir çocuk gibi resim yapabilmek ise bütün ömrümü. '

  }, {
    title: 'Pop Art Portre-3',
    subTitle: '@user3 ',
    imageUrl: 'assets/3.jpg',
    content: 'Sanat var olmasaydı, gerçeğin kabalığı dünyayı katlanılmaz kılardı.'
  }

  ]
}
