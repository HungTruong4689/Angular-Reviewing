import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Output() changePageItem = new EventEmitter<string>();

  ngOnInit() {
    console.log();
  }

  onSelect(feature: string) {
    this.changePageItem.emit(feature);
  }
}
