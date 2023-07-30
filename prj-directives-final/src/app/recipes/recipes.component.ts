import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipesService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  //recipeServices
  constructor(private recipeService: RecipesService) {}

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
