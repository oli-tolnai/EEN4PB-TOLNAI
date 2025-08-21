import { Injectable } from '@angular/core';
import { Project } from './project';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Project[] = []
  apiBaseUrl: string = "https://localhost:7016/api/"

  constructor(private http: HttpClient) {
    this.loadApi()
   }

   loadApi(): void{
    this.http.get<Project[]>(this.apiBaseUrl + "Project").subscribe(x =>
    {this.projects = x}
    )
   }
}
