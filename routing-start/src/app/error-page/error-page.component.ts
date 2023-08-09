import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'],
})
export class ErrorPageComponent implements OnInit {
  errorMessagge: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.errorMessagge = this.route.snapshot.data['message'];
    //Write error message
    this.route.data.subscribe((data: Data) => {
      this.errorMessagge = data['message'];
    });
  }
}
