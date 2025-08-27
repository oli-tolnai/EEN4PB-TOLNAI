import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass'
})
export class ListComponent {

  constructor(private router: Router, public projectService: ProjectService) {}

  viewProject(project: Project): void {
    this.router.navigate(["/view/"  + project.id])
  }

  editProject(project: Project): void {
    this.router.navigate(["/edit/" + project.id])
  }

}
