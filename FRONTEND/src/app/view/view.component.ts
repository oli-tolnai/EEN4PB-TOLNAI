import { Component, OnInit } from '@angular/core';
import { Project, ProjectDetails } from '../project';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.component.html',
  styleUrl: './view.component.sass'
})
export class ViewComponent implements OnInit {

  projectId: string = ""
  project: ProjectDetails = new ProjectDetails()
  loading: boolean = false

  constructor(private route: ActivatedRoute, private router: Router, public projectService: ProjectService){}

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['id']
    this.loadProject()
  }

  loadProject(): void {
    this.loading = true
    this.projectService.getProject(this.projectId).subscribe({
      next: (project) => {
        this.project = project
        this.loading = false
      },
      error: (error) => {
        console.error("Error loading project:", error)
        this.loading = false
      }
    })
  }

  addIssue(): void {
    this.router.navigate(['/addIssue', this.projectId])
  }

  editIssue(issueId: string): void {
    this.router.navigate(['/editIssue', issueId])
  }

  goBack(): void {
    this.router.navigate(['/list'])
  }

  getPriorityClass(priority: number | null): string {
    switch (priority){
      case 1:
        return 'bg-danger' //high priority
      case 2: 
        return 'bg-warning' // medium
      case 3:
        return 'bg-info' // low
      default:
        return 'bg-secondary' // unknown
      case null:
        return 'bg-secondary'
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'New':
        return 'bg-info'
      case 'InProgress':
        return 'bg-warning'
      case 'Closed':
        return 'bg-success'
      default:
        return 'bg-secondary'
    }
  }

}
