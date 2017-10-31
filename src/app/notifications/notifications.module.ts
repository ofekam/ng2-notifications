import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { NotificationManagerComponent } from './notification-manager/notification-manager.component';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule
    ],
    exports: [NotificationManagerComponent, NotificationManagerComponent],
    declarations: [NotificationComponent, NotificationManagerComponent],
    providers: [],
})
export class NotificationsModule { }
