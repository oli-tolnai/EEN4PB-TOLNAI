import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { ListComponent } from './list/list.component';
import { StatsComponent } from './stats/stats.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ViewComponent } from './view/view.component';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { EditIssueComponent } from './edit-issue/edit-issue.component';
import { EditprojComponent } from './editproj/editproj.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListComponent,
    StatsComponent,
    CreateProjectComponent,
    ViewComponent,
    AddIssueComponent,
    EditIssueComponent,
    EditprojComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
