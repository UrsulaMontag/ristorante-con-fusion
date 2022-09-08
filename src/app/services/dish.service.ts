import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/mock-dishes';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor() {}

  getDishes(): Dish[] {
    return DISHES;
  }
}