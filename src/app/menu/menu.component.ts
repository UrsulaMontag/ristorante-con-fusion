import { Component, OnInit } from '@angular/core';
import { DISHES } from '../shared/mock-dishes';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  dishes = DISHES;

  constructor() {}

  ngOnInit(): void {}
}
