import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project';

@Component({
  selector: 'app-create-project',
  standalone: false,
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.sass'
})
export class CreateProjectComponent {
  project: Project = new Project()
  

  constructor(private projService: ProjectService) {

  }

  create(): void {
    this.projService.create(this.project)

  }
}
