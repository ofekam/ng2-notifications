import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, state, animate } from '@angular/animations';

@Component({
    selector: 'notification',
    templateUrl: 'notification.html',
    styleUrls: ['notification.css'],
    animations: [
        trigger('slide', [
            state('active', style({
                transform: 'translateX(0px)'
            }),
            ),
            state('inactive', style({
                transform: 'translateX(350px)'
            })),
            transition('inactive => active', animate('0.5s')),
            transition('active => inactive', animate('0.5s'))
        ])
    ]

})

export class NotificationComponent implements OnInit {

    showNotification: boolean = false;

    constructor() { }

    ngOnInit() { }


    show(miliseconds: number) {
        this.showNotification = true;
        if (miliseconds) {
            setTimeout(() => {
                this.showNotification = false;
            }, miliseconds);
        }
    }

    hide() {
        this.showNotification = false;
    }
}