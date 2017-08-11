import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';

import { ReportComponent } from './report/report.component';
import { TasksComponent } from './tasks/tasks.component';
import { MessagesComponent } from './messages/messages.component';
import { ReportsComponent } from './reports/reports.component';
import { SalesComponent } from './sales/sales.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { ActivityComponent } from './activity/activity.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ReportComponent,
    TasksComponent,
    MessagesComponent,
    ReportsComponent,
    SalesComponent,
    WorkflowComponent,
    ActivityComponent

    
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
