import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobApplication } from 'src/models/job-application.model';
import { JobPosition } from 'src/models/job-position.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private apiUrl = "https://8080-fdacafeaafab307835342ebabcbbfabeeffone.premiumproject.examly.io/api/job "

  constructor(private http : HttpClient) { }

  getJobApplications() : Observable<any[]>
  {
    return this.http.get<any[]>(this.apiUrl + '/applications')
  }
  getJobPostings() : Observable<any[]>
  {
    return this.http.get<any[]>(this.apiUrl + '/positions')
  }
  getTotalApplicantsByJobPositionId(jobPositionId : number) : Observable<any>
  {
    return this.http.get<any>(this.apiUrl + '/applications/by-job-position?jobPositionId=' + jobPositionId)
  }
  markJobAsClosed() :void{}
  
  httpoptions = { headers : new HttpHeaders({'content-type' : 'appliaction/json'})}
  
  applyForJob(newJobApplication : JobApplication) : Observable<JobApplication>
  {
    return this.http.post<JobApplication>(this.apiUrl + '/application/add' , newJobApplication , this.httpoptions )
  }
  createJobPosition(newJobPosition : any) : Observable<JobPosition>
  {
    return this.http.post<JobPosition>(this.apiUrl + '/position/add' , newJobPosition , this.httpoptions )
  }
  updateApplicationStatus(applicationId : number , applicantName : string , newStatus : string ) : Observable<JobApplication>
  {
    htt
    return this.http.put<JobApplication>(this.apiUrl + '/application/update/' + applicationId , applicantName  , this.httpoptions )
    // status : ['Pending'];
    // status : newStatus
  }
}
