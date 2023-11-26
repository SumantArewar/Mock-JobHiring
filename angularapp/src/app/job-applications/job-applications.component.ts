import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { FormBuilder, Validators } from '@angular/forms';
import { JobApplication } from 'src/models/job-application.model';

@Component({
  selector: 'app-job-applications',
  templateUrl: './job-applications.component.html',
  styleUrls: ['./job-applications.component.css']
})
export class JobApplicationsComponent implements OnInit {

  // jobdata : JobApplication;

  constructor(private js : JobService , private fb : FormBuilder) {}
  
  jobApplicationForm = this.fb.group
  ({
    applicantName :['',Validators.required],
    jobPositionId :['',Validators.required],
  })
  
  ngOnInit(): void {}
  
  applyForJob() : void
  {
    // this.js.applyForJob(this.jobdata).subscribe((data)=>{this.jobdata = data})
  }

}
