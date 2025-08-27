import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  standalone: false,
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.sass'
})
export class CreateProjectComponent {
  project: Project = new Project()
  

  constructor(private projService: ProjectService, private router: Router) {

  }

  create(): void {
    // const newProject = { ...this.project}
    if (this.project.name === "" && this.project.description === "") {
      alert("Name and Description can't be empty!")

    }else{
      this.projService.create(this.project)
      this.project = new Project()
      this.router.navigate(["list"])
    }    
  }
  
}
