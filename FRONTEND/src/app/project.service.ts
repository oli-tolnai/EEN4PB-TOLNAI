import { Injectable } from '@angular/core';
import { CreateProject, Project, ProjectDetails } from './project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  apiBaseUrl: string = "https://localhost:7016/api/Project"

  constructor(private http: HttpClient) {
    
   }

   getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiBaseUrl)
   }

   getProject(id: string): Observable<ProjectDetails> {
    return this.http.get<ProjectDetails>(`${this.apiBaseUrl}/${id}`)
   }

   createProject(project: CreateProject): Observable<any> {
    return this.http.post(this.apiBaseUrl, project)
   }

   updateProject(id: string, project: CreateProject): Observable<any> {
    return this.http.put(`${this.apiBaseUrl}/${id}`, project)
   }

   deleteProject(id: string): Observable<any> {
    return this.http.delete(`${this.apiBaseUrl}/${id}`)
   }

}
