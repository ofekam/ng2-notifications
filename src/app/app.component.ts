import { Notification } from './notifications/notification';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Notification App';

  notifications: Notification[] = [
    new Notification(0, "First", 3000),
    new Notification(1, "Second", 3500),
    new Notification(2, "Third", 4000),
    new Notification(3, "Fourth", 4500),
    new Notification(4, "Fifth", 5000)
  ];

  addNotification(description, timeLimit) {
    this.notifications.push(new Notification(this.notifications.length, description, timeLimit * 1000));
  }
}
