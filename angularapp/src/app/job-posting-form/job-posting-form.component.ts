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

  // constructor(private fb : FormBuilder , private js : JobService) { }

  // jobApplicationForm = this.fb.group({
  //   title : ['' ,Validators.required],
  //   department : ['' ,Validators.required],
  //   location : ['' ,Validators.required],
  //   responsibilities : ['' ,Validators.required],
  //   qualifications : ['' ,Validators.required],
  //   applicationDeadline : ['' ,Validators.required]
  // })
  
  // ngOnInit(): void {
  // }
  // submitJobPosting() 
  // {
  //   // this.jobform = this.jobApplicationForm.value
  //   // console.log(this.jobform)
  //   // this.js.createJobPosition(this.jobform).subscribe(()=>{
  //   //   alert("Record Added")
  //   // })
  //   this.js.createJobPosition(this.jobApplicationForm.value).subscribe(()=>{
  //     console.log("Created Job")})
  // }
   constructor(private fb:FormBuilder,private ss:JobService) { }
  
  jobPostingForm= this.fb.group({
    title :['',Validators.required],
    department:['',Validators.required],
    location:['',Validators.required],
    responsibilities:['',Validators.required],
    qualifications:['',Validators.required],
    applicationDeadline:['',Validators.required]
  })

  ngOnInit(): void {
  }

  submitJobPosting(){

    

     this.ss.createJobPosition(this.jobPostingForm.value).subscribe(()=>{
      console.log("Created Job")
     })

  }


}
