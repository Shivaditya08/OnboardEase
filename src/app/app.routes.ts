import { Routes } from '@angular/router';
import { MainDashboardComponent } from './admin/main-dashboard/main-dashboard.component';
import { CandidateAddComponent } from './admin/candidate/candidate-add/candidate-add.component';
import { CandidateDashboardComponent } from './admin/candidate/candidate-dashboard/candidate-dashboard.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];
