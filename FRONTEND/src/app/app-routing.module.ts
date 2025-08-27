import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { StatsComponent } from './stats/stats.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: "", redirectTo: "list", pathMatch: "full"},
  { path: "list", component: ListComponent},
  { path: "stats", component: StatsComponent},
  { path: "view/:id", component: ViewComponent},
  { path: "**", redirectTo: "list", pathMatch: "full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
