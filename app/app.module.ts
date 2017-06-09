import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TaskListAppComponent }  from './tasklist-app.component';
import { TasksListComponent }  from './tasks/tasks-list.component';
import { TaskThumbnailComponent }  from './tasks/task-thumbnail.component';
import { NavBarComponent }  from './nav/navbar.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ TaskListAppComponent,
  TasksListComponent, 
  TaskThumbnailComponent,
  NavBarComponent ],
  bootstrap:    [ TaskListAppComponent ]
})

export class AppModule {}