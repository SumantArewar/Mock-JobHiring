import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { JobApplication } from 'src/models/job-application.model';

@Component({
  selector: 'app-view-job-applications',
  templateUrl: './view-job-applications.component.html',
  styleUrls: ['./view-job-applications.component.css']
})
export class ViewJobApplicationsComponent implements OnInit {

  jobApplications : JobApplication[] =[]

  constructor(private js : JobService) { }

  loadJobApplications(){

    this.js.getJobApplications().subscribe(data => {this.jobApplications.push(...data)})
    console.log("byeee"+this.jobApplications)
    console.log(this.jobApplications)
  }

  ngOnInit(): void {
  }

}
