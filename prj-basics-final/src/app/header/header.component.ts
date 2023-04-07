import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  //Usage of Output
  @Output() featureSelected = new EventEmitter<string>();

  //OnSelect function
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
