import { Directive, HostListener, HostBinding } from "@angular/core";

//What is the directive
@Directive({
  selector: "[appDropdown]",
})
export class DropdownDirective {
  //hostbinding
  @HostBinding("class.open") isOpen = false;

  //host listener
  @HostListener("click") toggleOpen() {
    //toggleOpen
    this.isOpen = !this.isOpen;
  }
}
