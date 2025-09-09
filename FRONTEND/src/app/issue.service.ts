import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateIssue, UpdateIssueStatus } from './project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  apiBaseUrl: string = 'https://localhost:7016/api/Issue'

  constructor(private http: HttpClient) { }

  createIssue(issue : CreateIssue): Observable<any> {
    return this.http.post(this.apiBaseUrl, issue)
  }

  updateIssueStatus(id: string, statusUpdate: UpdateIssueStatus): Observable<any> {
    return this.http.put(`${this.apiBaseUrl}/${id}`, statusUpdate)
  }

}
