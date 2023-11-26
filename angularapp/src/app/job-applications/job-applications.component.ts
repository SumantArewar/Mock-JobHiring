import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobApplication } from 'src/models/job-application.model';

@Component({
  selector: 'app-job-applications',
  templateUrl: './job-applications.component.html',
  styleUrls: ['./job-applications.component.css']
})
export class JobApplicationsComponent implements OnInit {

  jobApplicationForm : FormGroup
  jobPositions : JobApplication;

  constructor(private js : JobService , private fb : FormBuilder) {
  
  this.jobApplicationForm = this.fb.group
  ({
    applicantName :['',Validators.required],
    jobPositionId :['',Validators.required],
  })
}
  
  ngOnInit(): void {}
  
  applyForJob() : void
  {
    this.js.applyForJob(this.jobPositions).subscribe((data)=>{this.jobPositions = data})
  }

}
