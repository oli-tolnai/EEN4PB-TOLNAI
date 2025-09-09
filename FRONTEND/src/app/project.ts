export class Project {
  id: string = "";
  name: string = "";
  description: string = "";
  activeIssues: number | null = null;
}

export class ProjectDetails {
  id: string = "";
  name: string = "";
  description: string = "";
  issues: Issue[] = [];
  numberOfIssues: number | null = null;
  newIssueCount: number | null = null;
  inProgressIssueCount: number | null = null;
  closedIssueCount: number | null = null;
}

export class Issue {
  id: string = "";
  title: string = "";
  description: string  = "";
  priority: number | null = null;
  status: string = "";
  userFullName: string = "";
}

export class CreateProject {
  name: string = "";
  description: string = "";
}

export class CreateIssue {
  projectId: string = "";
  title: string = "";
  description: string = "";
  priority: number | null = null;
}

export class UpdateIssueStatus {
  status: string = "";
}
