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
  
  projects: Project[] = [];
  loading = false;
  
  constructor(private router: Router, public projectService: ProjectService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

    loadProjects(): void {
    this.loading = true;
    this.projectService.getProjects().subscribe({
      next: (projects) => {
        this.projects = projects;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading projects:', error);
        this.loading = false;
      }
    });
  }

  viewProject(id: string): void {
    this.router.navigate(['/view', id]);
  }

  editProject(id: string): void {
    this.router.navigate(['/editproj', id]);
  }

  addIssue(id: string): void {
    this.router.navigate(['/addIssue', id]);
  }

  deleteProject(id: string): void {
    if (confirm('Are you sure you want to delete this project?')) {
      this.projectService.deleteProject(id).subscribe({
        next: () => {
          this.loadProjects(); // Reload the list
        },
        error: (error) => {
          console.error('Error deleting project:', error);
        }
      });
    }
  } 
}
