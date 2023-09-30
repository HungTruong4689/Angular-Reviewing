import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService, //RecipeService
    private route: ActivatedRoute, //ActivatedRoute
    private router: Router //Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      //params subscribe
      this.id = +params['id']; //params id
      this.recipe = this.recipeService.getRecipe(this.id); // recipeService getRecipe
    });
  }

  onAddToShoppingList() {
    // onAddToShoppingList
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    //onEditRecipe
    this.router.navigate(['edit'], { relativeTo: this.route }); //relativeTo this route
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
