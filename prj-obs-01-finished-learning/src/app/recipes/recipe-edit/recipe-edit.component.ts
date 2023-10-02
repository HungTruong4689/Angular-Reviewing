import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute, //activatedRoute
    private recipeService: RecipeService, //recipeService
    private router: Router //router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      //params subscribe
      this.id = +params['id']; // params id
      this.editMode = params['id'] != null; //editMode
      this.initForm(); //initForm function
    });
  }
  onSubmit() {
    const newRecipe = new Recipe(
      this.recipeForm.value['name'], //name form
      this.recipeForm.value['description'], //descriptionm
      this.recipeForm.value['imagePath'], //image Path
      this.recipeForm.value['ingredients'] //ingredient
    );
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe); //update Recipe
    } else {
      this.recipeService.addRecipe(this.recipeForm.value); //addRecipe
    }

    this.onCancel(); //on Cancel
  }

  private initForm() {
    //init form
    let recipeName = ''; //recipe Name
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id); //get Recipe
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients,
    });
  }
  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  get controls() {
    //getter
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
}
