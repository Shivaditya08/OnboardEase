import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
