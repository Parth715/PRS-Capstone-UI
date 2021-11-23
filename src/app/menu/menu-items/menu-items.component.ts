import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {

  @Input() m!: Menu
  constructor() { }

  ngOnInit(): void {
  }

}
