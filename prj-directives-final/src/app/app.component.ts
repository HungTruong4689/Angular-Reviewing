import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loadedFeature = 'recipe';

  //how to send this variable
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
