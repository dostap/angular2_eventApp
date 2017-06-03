import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector : 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
            <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
        </div>
    </div>
    `,
    styles: [`
    .pad-left {margin-left: 10px;}
    .well div {color: #bbb}
    `]
})


export class EventThumbnailComponent{
    //Input decorator tells Angular that this event object will be passed in from another component
 @Input() event:any
 //common pattern for output parameters
 @Output() eventClick = new EventEmitter()

}