import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated, //None, Native
})
export class ServerElementComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked
{
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {}
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    console.log(
      'Text content of paragraph: ' + this.paragraph.nativeElement.textContent
    );
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngONChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('NgOnInIt called');
    console.log(this.header.nativeElement.textContent);
    console.log(
      'Text content of paragraph: ' + this.paragraph.nativeElement.textContent
    );
  }
}
