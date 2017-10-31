import { Notification } from './../notification';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-notification-manager',
  templateUrl: './notification-manager.component.html',
  styleUrls: ['./notification-manager.component.css']
})
export class NotificationManagerComponent implements OnInit {

  @Input() notifications: Notification[] = [];
  @Input()
  closeIconClass: String;
  @Output() onShow = new EventEmitter<any[]>();
  @Output() onHide = new EventEmitter<any[]>();

  constructor() { }

  ngOnInit() {
  }

  showNotifications() {
    let shownIds: any[] = [];
    for (let noti of this.notifications) {
      noti.show();
      shownIds.push(noti.id);
    }

    this.onShow.emit(shownIds);
  }

  showNotification(id: any) {
    let toShow: Notification[] = this.notifications.filter(n => n.id === id);
    let shownIds: any[] = [];
    for (let noti of toShow) {
      noti.show()
      shownIds.push(noti.id);
    }
    this.onShow.emit(shownIds);
  }

  hideNotifications() {
    let hiddenIds = [];
    for (let noti of this.notifications) {
      noti.hide();
      hiddenIds.push(noti.id);
    }
    this.onHide.emit(hiddenIds);
  }

  hideNotification(id: any) {
    let toHide: Notification[] = this.notifications.filter(n => n.id === id);
    let hiddenIds = [];
    for (let noti of toHide) {
      noti.hide();
      hiddenIds.push(noti.id);
    }

    this.onHide.emit(hiddenIds);
  }

}
