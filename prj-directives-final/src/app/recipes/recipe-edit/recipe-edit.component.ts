import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  constructor(private route: ActivatedRoute) {}

  //params subscribe
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      //param hasOwnProperty
      this.editMode = params.hasOwnProperty('id');
      console.log(params['id']);
      console.log(this.editMode);
    });
  }
}
