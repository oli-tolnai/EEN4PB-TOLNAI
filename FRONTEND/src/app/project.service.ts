import { Injectable } from '@angular/core';
import { Project } from './project';
import { HttpClient } from '@angular/common/http';
import { ProjectDetails } from './project-details';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Project[] = []
  projectDetails: ProjectDetails = new ProjectDetails()
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

   getProject(project: Project): ProjectDetails {
    this.http.get<ProjectDetails>(this.apiBaseUrl + "Project/" + project.id).subscribe(x => {
      // TODO lehet új entitás kell a projectnek ami tartalmaz mindent, vagy módosítani kellene a mostanit egy Issue listával, plusz kell egy issue entitás
      this.projectDetails = x;
    });
    return this.projectDetails
   }

}
