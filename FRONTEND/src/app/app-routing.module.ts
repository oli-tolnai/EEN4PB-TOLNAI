import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { StatsComponent } from './stats/stats.component';
import { ViewComponent } from './view/view.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { EditprojComponent } from './editproj/editproj.component';

const routes: Routes = [
  { path: "", redirectTo: "list", pathMatch: "full"},
  { path: "list", component: ListComponent},
  { path: "create", component: CreateProjectComponent},
  { path: "view/:id", component: ViewComponent},
  { path: "editproj/:id", component: EditprojComponent},
  { path: "stats", component: StatsComponent},
  { path: "**", redirectTo: "list", pathMatch: "full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
