import { Component } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass'
})
export class ListComponent {

  constructor(public projectService: ProjectService) {}

  

}
