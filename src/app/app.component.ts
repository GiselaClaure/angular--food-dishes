import { Component } from '@angular/core';
import { NavbarModel } from './core/navbar/models/navbar.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public navbar: NavbarModel[] =[
    {
      icon:{
        src:'',
        alt:'',
      },
      name: 'Home',
      link:'/home',
    },
    {
      icon:{
        src:'',
        alt:'',
      },
      name: 'Food dishes',
      link:'/food',
    },
    {
      icon:{
        src:'',
        alt:'',
      },
      name: 'About',
      link:'/about',
    },
  ]
}
