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

   create(project: Project): void {
    this.http.post(this.apiBaseUrl + "Project", project).subscribe({
      next: (response) => {
        console.log("::SUCCESS::")
        console.log("Create request result:", response)
        this.projects.push(project)
      },
      error: (error) => {
        console.log("::ERROR::")
        console.log("Create request result:", error);
      }
    })
   }
}
