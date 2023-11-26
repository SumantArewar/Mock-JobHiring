import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewJobPostingsComponent } from './view-job-postings/view-job-postings.component';
import { ViewJobApplicationsComponent } from './view-job-applications/view-job-applications.component';

const routes: Routes = [
  {path : 'view-post' , component : ViewJobPostingsComponent},
  {path : 'view-appli' , component : ViewJobApplicationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
