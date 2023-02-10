import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SEND_NOTIFICATION_MANAGE } from 'src/app/constants/router';
import { NotificationManagementComponent } from './notification-management.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';

const routes: Routes = [
  {path:'',component:NotificationManagementComponent},
    {path:SEND_NOTIFICATION_MANAGE.baseUrl,component:SendNotificationComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationManagementRoutingModule { }
