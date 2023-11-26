import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { JobService } from '../services/job.service';
import { JobPosition } from 'src/models/job-position.model';

@Component({
  selector: 'app-job-posting-form',
  templateUrl: './job-posting-form.component.html',
  styleUrls: ['./job-posting-form.component.css']
})
export class JobPostingFormComponent implements OnInit {

  // jobform = JobPosition

  constructor(private fb : FormBuilder , private js : JobService) { }

  jobPostingForm = this.fb.group({
    title : ['' ,Validators.required],
    department : ['' ,Validators.required],
    location : ['' ,Validators.required],
    responsibilities : ['' ,Validators.required],
    qualifications : ['' ,Validators.required],
    applicationDeadline : ['' ,Validators.required],
  })
  
  submitJobPosting() : void
  {
    // this.jobform = this.form.value
    // console.log(this.jobform)
    // this.js.createJobPosition(this.jobform).subscribe(()=>{
    //   alert("Record Added")
    // })
  }

  ngOnInit(): void {
  }

}
