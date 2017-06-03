import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TaskListAppComponent }  from './tasklist-app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ TaskListAppComponent ],
  bootstrap:    [ TaskListAppComponent ]
})

export class AppModule {}