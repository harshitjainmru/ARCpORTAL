import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CLIENT_DETAILS } from 'src/app/constants/router';
import { ClientManagementComponent } from './client-management.component';

const routes: Routes = [
  {
    path: '',
    component: ClientManagementComponent,
  },
      {
        path: CLIENT_DETAILS.baseUrl,
        loadChildren: () =>
          import('./client-details/client-details.module').then(
            (m) => m.ClientDetailsModule
          ),
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientManagementRoutingModule {}
