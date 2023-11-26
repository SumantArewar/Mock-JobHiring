import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-view-job-postings',
  templateUrl: './view-job-postings.component.html',
  styleUrls: ['./view-job-postings.component.css']
})
export class ViewJobPostingsComponent implements OnInit {

  constructor(private js : JobService) { }

  ngOnInit(): void {
  }

}
