import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({ providedIn: "root" })
export class DataStorageService {
  //import HttpClient
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    //getRecipe
    const recipes = this.recipeService.getRecipes();
    //http put
    this.http
      .put(
        //put recipes
        "https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json",
        recipes
      )
      .subscribe((response) => {
        //http subscribe
        console.log(response);
      });
  }

  fetchRecipes() {
    this.http
      .get<Recipe[]>(
        "https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json"
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        })
      )
      .subscribe((recipes) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
