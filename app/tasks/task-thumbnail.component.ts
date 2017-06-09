import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector : 'task-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{task.name}}</h2>
        <div class="pad-left">
            <div>Date: {{task.date}}</div>
            <div>Time: {{task.time}}</div>
            <div>Count: {{task.counter}}</div>
            <div>Notes: {{task.notes}} </div>
            <div class="pad-top">
                <button class="btn btn-success" (click)="handleDone()">Done!</button>
                <button class="btn btn-danger" (click)="handleWontDo()">Won't Do</button>
            </div>
        </div>
    </div>
    `,
    styles: [`
    .pad-left {margin-left: 10px;}
    .pad-top {margin-top: 7px;}
    `]
})


export class TaskThumbnailComponent{
    //Input decorator tells Angular that this task object will be passed in from another component
 @Input() task:any
 //common pattern for output parameters
 //parent component needs to watch for the Ourput name, in this case taskClick
 @Output() taskClick = new EventEmitter()

 handleDone() {
     console.log('Done! add to counter');
     //send some data to the parent component i.e. task list
     this.taskClick.emit(this.task.name);
 }

 handleDontKnow() {
    console.log('foo');
 }

    taskProperty: any = "some value"
}