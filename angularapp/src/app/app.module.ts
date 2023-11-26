import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobPostingFormComponent } from './job-posting-form/job-posting-form.component';
import { JobApplicationsComponent } from './job-applications/job-applications.component';

@NgModule({
  declarations: [
    AppComponent,
    JobPostingFormComponent,
    JobApplicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
