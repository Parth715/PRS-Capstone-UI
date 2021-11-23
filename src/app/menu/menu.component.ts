import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("Users", "/userlist"),
    new Menu("Vendors", "/vendorlist"),
    new Menu("Products", "/productlist"),
    new Menu("Requests", "/requestlist"),
    new Menu("Reviews", "/review"),
    new Menu("Login", "/login")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
