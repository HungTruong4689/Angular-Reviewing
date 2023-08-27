import { Directive, HostListener, HostBinding } from "@angular/core";

//What is the directive
@Directive({
  selector: "[appDropdown]",
})
export class DropdownDirective {
  //hostbinding
  @HostBinding("class.open") isOpen = false;

  @HostListener("click") toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
