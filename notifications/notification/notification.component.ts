import { Notification } from './../notification';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, style, transition, state, animate } from '@angular/animations';

@Component({
    selector: 'app-notification',
    templateUrl: 'notification.html',
    styleUrls: ['notification.css'],
    animations: [
        trigger('slide', [
            state('active', style({
                transform: 'translateX(0px)'
            }),
            ),
            state('inactive', style({
                transform: 'translateX(350px)',
                display: 'none'
            })),
            transition('inactive => active', animate('0.5s')),
            transition('active => inactive', animate('0.5s'))
        ])
    ]

})

export class NotificationComponent implements OnInit {


    @Input('src')
    notification: Notification;

    @Input()
    closeIconClass: String;


    constructor() { }

    ngOnInit() { }
}
