import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    ingredients: Ingredient[]
  ) {
    this.name = name; //name model
    this.description = desc; // desc model
    this.imagePath = imagePath; // imagePath
    this.ingredients = ingredients;
  }
}
