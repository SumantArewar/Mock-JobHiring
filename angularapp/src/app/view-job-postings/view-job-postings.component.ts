import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { JobPosition } from 'src/models/job-position.model';

@Component({
  selector: 'app-view-job-postings',
  templateUrl: './view-job-postings.component.html',
  styleUrls: ['./view-job-postings.component.css']
})
export class ViewJobPostingsComponent implements OnInit {

  // jobpostings : JobPosition[] = []

  constructor(private js : JobService) {
    // this.js.getJobPostings().subscribe(data => {this.jobpostings.push(...data)})
   }

  ngOnInit(): void {
  }

}
