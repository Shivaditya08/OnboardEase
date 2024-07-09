import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { CandidateDashboardComponent } from './candidate/candidate-dashboard/candidate-dashboard.component';
import { CandidateAddComponent } from './candidate/candidate-add/candidate-add.component';
import { CandidateEditComponent } from './candidate/candidate-edit/candidate-edit.component';
import { TrainAddComponent } from './training/train-add/train-add.component';
import { TrainDashComponent } from './training/train-dash/train-dash.component';
import { TrainEditComponent } from './training/train-edit/train-edit.component';

const routes: Routes = [
  {
    path: '',
    component: MainDashboardComponent,
    children: [
      { path: 'candidate', component: CandidateDashboardComponent },
      { path: 'candidate/add', component: CandidateAddComponent },
      { path: 'edit', component: CandidateEditComponent },
      { path: 'training', component: TrainDashComponent },
      { path: 'training/add', component: TrainAddComponent },
      // { path: 'training/edit', component: TrainEditComponent },
    ],
  },
  { path: 'edit', component: CandidateEditComponent },
  {path: 'edit', component: TrainEditComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
