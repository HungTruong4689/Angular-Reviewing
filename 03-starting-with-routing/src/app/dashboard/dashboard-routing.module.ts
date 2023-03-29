import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { TodayComponent } from './today/today.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'today',
    component: TodayComponent
  }
];

@NgModule({
  //using forChild to connect to children route
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
