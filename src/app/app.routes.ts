import { Routes } from '@angular/router';
import { MainDashboardComponent } from './admin/main-dashboard/main-dashboard.component';
import { CandidateAddComponent } from './admin/candidate/candidate-add/candidate-add.component';
import { CandidateDashboardComponent } from './admin/candidate/candidate-dashboard/candidate-dashboard.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },

  { path: 'login', component: EmployeeLoginComponent },
  { path: 'reg', component: EmployeeRegistrationComponent },
];
