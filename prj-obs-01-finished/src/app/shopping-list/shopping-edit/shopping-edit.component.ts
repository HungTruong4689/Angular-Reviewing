import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription; // subscription
  editMode = false; //editmode
  editedItemIndex: number; //editedItemIndex
  editedItem: Ingredient; //editedItem

  constructor(private slService: ShoppingListService) {} // shopping service

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        //subscribe number
        this.editedItemIndex = index; //value index
        this.editMode = true; //editmode
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name, // editItem name
          amount: this.editedItem.amount, //editItem amount
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient); //updateIngredient service
    } else {
      this.slService.addIngredient(newIngredient); //addIngredient service
    }
    this.editMode = false; //editMode
    form.reset();
  }
  onClear() {
    this.slForm.reset(); //slForm reset
    this.editMode = false;
  }
  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex); //deleteIngredient
    this.onClear(); //onclear function
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
