import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationManagementRoutingModule } from './notification-management-routing.module';
import { NotificationManagementComponent } from './notification-management.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbsoluteUrlModule } from 'src/app/pipes/absolute-url/absolute-url.module';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    NotificationManagementComponent,
    SendNotificationComponent
  ],
  imports: [
    CommonModule,
    NotificationManagementRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    AbsoluteUrlModule,
    SharedModuleModule

  ],
  exports:[SendNotificationComponent]
})
export class NotificationManagementModule { }
