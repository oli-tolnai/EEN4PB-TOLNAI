import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  { path: "", redirectTo: "list", pathMatch: "full"},
  { path: "list", component: ListComponent},
  { path: "issuelist", component: IssueListComponent},
  { path: "stats", component: StatsComponent},
  { path: "**", redirectTo: "list", pathMatch: "full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
