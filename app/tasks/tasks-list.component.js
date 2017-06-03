"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TasksListComponent = (function () {
    function TasksListComponent() {
        this.task = {
            id: 1,
            name: 'Groceries',
            date: '9/26/2036',
            time: '10:00 am',
            imageUrl: 'app/assets/images/angularconnect-shield.png',
            counter: 0,
            notes: 'Buy organic butter'
        };
    }
    TasksListComponent = __decorate([
        core_1.Component({
            selector: 'tasks-list',
            templateUrl: 'app/tasks/tasks-list.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], TasksListComponent);
    return TasksListComponent;
}());
exports.TasksListComponent = TasksListComponent;
//# sourceMappingURL=tasks-list.component.js.map