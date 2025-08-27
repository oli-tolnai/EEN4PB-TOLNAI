import { Issue } from "./issue"

export class ProjectDetails {
    id: string = ""
    name: string = ""
    description: string = ""
    issues: Issue[] = []
    numberofIssues: number | null = null
    newIssueCount: number | null = null
    inProgressIssueCount: number | null = null
    closedIssueCount: number | null = null

}
