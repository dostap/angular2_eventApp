import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TaskListAppComponent }  from './tasklist-app.component';
import { TasksListComponent }  from './tasks/tasks-list.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ TaskListAppComponent,
  TasksListComponent ],
  bootstrap:    [ TaskListAppComponent ]
})

export class AppModule {}