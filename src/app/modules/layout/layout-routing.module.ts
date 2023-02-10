import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CLIENT_MANAGE, CONTENT_MANAGE, DASHBOARD, EARNING_MANAGE, NOTIFICATION_MANAGE, PROFILE_MANAGE, STAFF_MANAGE, TRANSACTION_MANAGE, USER_MANAGE } from 'src/app/constants/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: DASHBOARD.baseUrl, pathMatch: 'full' },
      {
        path: DASHBOARD.baseUrl,
        loadChildren: () =>
          import('./childModules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: USER_MANAGE.baseUrl,
        loadChildren: () =>
          import('./childModules/user-management/user-management.module').then(
            (m) => m.UserManagementModule
          ),
      },
      {
        path: CLIENT_MANAGE.baseUrl,
        loadChildren: () =>
          import('./childModules/client-management/client-management.module').then(
            (m) => m.ClientManagementModule
          ),
      },
      {
        path: PROFILE_MANAGE.baseUrl,
        loadChildren: () =>
          import('./childModules/my-profile/my-profile.module').then(
            (m) => m.MyProfileModule
          ),
      },
      {
        path: TRANSACTION_MANAGE.baseUrl,
        loadChildren: () =>
          import(
            './childModules/transaction-management/transaction-management.module'
          ).then((m) => m.TransactionManagementModule),
      },
      {
        path: EARNING_MANAGE.baseUrl,
        loadChildren: () =>
          import(
            './childModules/earning-management/earning-management.module'
          ).then((m) => m.EarningManagementModule),
      },
      {
        path: NOTIFICATION_MANAGE.baseUrl,
        loadChildren: () =>
          import(
            './childModules/notification-management/notification-management.module'
          ).then((m) => m.NotificationManagementModule),
      },
      {
        path: CONTENT_MANAGE.baseUrl,
        loadChildren: () =>
          import(
            './childModules/content-management/content-management.module'
          ).then((m) => m.ContentManagementModule),
      },
      {
        path: STAFF_MANAGE.baseUrl,
        loadChildren: () =>
          import(
            './childModules/staff-management/staff-management.module'
          ).then((m) => m.StaffManagementModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
