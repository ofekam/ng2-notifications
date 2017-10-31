# NotificationsModule

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.3.

## Running Example
http://plnkr.co/edit/9z0uU4VQP0cFCU7wEsyh?p=preview

## Usage

<notification-manager [notifications]="array" (onShow)="doSomething($event)" (onHide)="doSomething($evnet)">
</notification-manager>

## Options
| Input/Output | Type |
| ------ | ------ |
| [notifications] | Notification[] |
| [closeIconClass] | String |
| (onShow) | $event = any[] (id array) |
| (onHide) | $event = any[] (id array) |


| Function | Explanation |
| ------ | ------ |
| showNotifications() | shows all notifications |
| showNotification(id) | show all notifications with certain id |
| hideNotifications() | hide all notifications |
| hideNotification(id) | hide all notifications with certain id |
