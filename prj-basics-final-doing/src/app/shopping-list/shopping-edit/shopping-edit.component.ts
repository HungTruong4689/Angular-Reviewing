import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) inputNameRef: ElementRef;
  @ViewChild('amountInput', { static: true }) inputAmountRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() {}

  ngOnInit() {}
  onAddItem() {
    const inpName = this.inputNameRef.nativeElement.value;
    const inpAmount = this.inputAmountRef.nativeElement.value;
    const newIngredient = new Ingredient(inpName, inpAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
