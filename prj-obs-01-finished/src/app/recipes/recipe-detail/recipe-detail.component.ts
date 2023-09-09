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
  //recipe variable
  recipe: Recipe;
  id: number;

  //recipeService
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  //ngONInIt subscribe
  ngOnInit() {
    //params subscribe
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }
  //onAddToShopppingList
  onAddToShoppingList() {
    //addIngredientsToShoppingList
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  //onEditRecipe
  onEditRecipe() {
    //navigate page
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
  //onDeleteRecipe
  onDeleteRecipe() {
    //deleteRecipe the id
    this.recipeService.deleteRecipe(this.id);
    //router navigate
    this.router.navigate(['/recipes']);
  }
}
