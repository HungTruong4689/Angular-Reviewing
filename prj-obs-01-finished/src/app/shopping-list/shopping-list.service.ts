import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    //getIngredients
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index]; //getIngredient by index
  }

  addIngredient(ingredient: Ingredient) {
    //addIngredient
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients); //add Ingredients list
    this.ingredientsChanged.next(this.ingredients.slice()); //why next
  }
  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient; // assign newIngredient
    this.ingredientsChanged.next(this.ingredients.slice()); // ingredientsChanged next
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1); //delete Ingredient
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
