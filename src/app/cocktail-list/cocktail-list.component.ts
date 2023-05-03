import { Component } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent {

  cocktails!: Cocktail[];

  constructor(private cocktailService: CocktailService) {
    this.cocktails = this.cocktailService.getCocktails();
  }

}
