import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  FORGOT, LOGIN, RESET,  } from 'src/app/constants/router';
import { AccountComponent } from './account.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: '', redirectTo: LOGIN.baseUrl, pathMatch: 'full' },

      {
        path: LOGIN.baseUrl,
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule),
      },
      {
        path:FORGOT.baseUrl,
        loadChildren:()=>import('./forgot-password/forgot-password.module').then(m=>m.ForgotPasswordModule)
      },
      {
        path:RESET.baseUrl,
        loadChildren:()=>import('./reset-password/reset-password.module').then(m=>m.ResetPasswordModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
