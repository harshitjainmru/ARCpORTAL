import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.scss']
})
export class SendNotificationComponent implements OnInit {

  isVisible: any;
  isSelected: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
