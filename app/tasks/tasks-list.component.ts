import { Component } from '@angular/core'

@Component({
    selector : 'tasks-list',
    template: `
        <div>
        <h1><img src="http://thedaryao.com/blog/wp-content/uploads/2016/10/purple.png" style="width:5%"/>Tasks</h1>
        <hr />
        <task-thumbnail #taskThumbnail [task]="task1" (taskClick)="handleTaskClicked($event)"></task-thumbnail>
        <h3>{{taskThumbnail.taskProperty}}</h3>
        <button class="btn btn-warning" (click)="taskThumbnail.handleDontKnow()">I dunno, I am just clicking now...</button>`
})


export class TasksListComponent{
    task1 = {
        id: 1,
        name: 'Groceries',
        date: '9/26/2036',
        time: '10:00 am',
        imageUrl: 'app/assets/images/angularconnect-shield.png',
        counter: 0,
        notes: 'Buy organic butter'
    }

    handleTaskClicked(data) {
        console.log('Task list received ' + data);

    }


}