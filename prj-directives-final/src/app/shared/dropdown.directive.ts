import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  //hostbinding
  @HostBinding('class.open') isOpen = false;

  //host listener
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
