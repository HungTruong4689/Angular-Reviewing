import { Injectable } from '@angular/core';


//review injectable
@Injectable()
export class AnalyticsService {
  registerClick() {
    console.log('Clicked!');
  }
}
