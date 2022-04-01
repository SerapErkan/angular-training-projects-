import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'directives';

  currentPage = 0;

  images = [
    {
      title: "Pagination Design",
      url: 'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }, {
      title: "Pagination Design ",
      url: 'https://images.pexels.com/photos/35629/bing-cherries-ripe-red-fruit.jpg?cs=srgb&dl=pexels-pixabay-35629.jpg&fm=jpg'
    }, {
      title: "Pagination Design ",
      url: 'https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?cs=srgb&dl=pexels-tijana-drndarski-3338681.jpg&fm=jpg'
    }, {
      title: " Pagination Design",
      url: 'https://images.pexels.com/photos/4110097/pexels-photo-4110097.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-4110097.jpg&fm=jpg'
    },{
      title:'Pagination Design',
    
    url:'https://images.pexels.com/photos/2683373/pexels-photo-2683373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  }
  ]




}
