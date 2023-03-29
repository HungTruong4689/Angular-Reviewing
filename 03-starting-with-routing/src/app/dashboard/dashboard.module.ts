import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  //declaration 
  declarations: [DashboardComponent],
  imports: [DashboardRoutingModule]
})
export class DashboardModule {}
