import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  cocktails: Cocktail[] = [
    new Cocktail('mojito', 1, 'http://google.com'),
    new Cocktail('whisky', 2, 'http://google.com'),
    new Cocktail('rhum', 3, 'http://google.com'),
  ];

  constructor() {}

  getCocktails() {
    return this.cocktails;
  }
}
