import { Component } from '@angular/core';
import { Project, ProjectDetails } from '../project';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.component.html',
  styleUrl: './view.component.sass'
})
export class ViewComponent {
  project: Project = new Project()
  projectDeatils: ProjectDetails = new ProjectDetails()

  constructor(private route: ActivatedRoute, private router: Router, public projectService: ProjectService){
    // route.params.subscribe(param => {
    //   this.project = projectService.projects.filter(x => x.id == param["id"])[0]
      
    // })
    // this.loadDetails()
  }

  // loadDetails(): void{
  //   this.projectDeatils = this.projectService.getProject(this.project)
  //   // console.log(this.detailedProject.activeIssues);
  //   // console.log(this.detailedProject.closedIssueCount);
  //   // console.log(this.detailedProject.description);
  //   // console.log(this.detailedProject.id);
  //   // console.log(this.detailedProject.inProgressIssueCount);
  //   // console.log(this.detailedProject.issues);
  //   // console.log(this.detailedProject.name);
  //   // console.log(this.detailedProject.newIssueCount);
  //   // console.log(this.detailedProject.numberofIssues);
    
  // }



}
