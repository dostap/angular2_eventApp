import { Component } from '@angular/core'

@Component({
    selector : 'tasks-list',
    templateUrl: 'app/tasks/tasks-list.component.html',
})


export class TasksListComponent{
    task = {
        id: 1,
        name: 'Groceries',
        date: '9/26/2036',
        time: '10:00 am',
        imageUrl: 'app/assets/images/angularconnect-shield.png',
        counter: 0,
        notes: 'Buy organic butter'
    }


}