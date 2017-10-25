import { NgModule } from '../node_modules/@angular/core';

import { NotificationComponent } from './notification.component';
import { BrowserModule } from '../node_modules/@angular/platform-browser';
import { BrowserAnimationsModule } from '../node_modules/@angular/platform-browser/animations';
import { CommonModule } from '../node_modules/@angular/common';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule
    ],
    exports: [NotificationComponent],
    declarations: [NotificationComponent],
    providers: [],
})
export class NotificationsModule { }
