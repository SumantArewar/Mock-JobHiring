import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobApplication } from 'src/models/job-application.model';

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
  markJobAsClosed() :void{}
  
  httpoptions = { headers : new HttpHeaders({'content-type' : 'appliaction/json'})}
  
  applyForJob() : Observable<JobApplication>
  {
    return this.http.get<JobApplication>(this.apiUrl + '/positions')
  }
}
