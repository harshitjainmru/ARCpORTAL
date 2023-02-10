import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutGuardGuard } from './guard/layout-guard.guard';
import { LoginGuardGuard } from './guard/login-guard.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/account/account.module').then((m) => m.AccountModule),
      canActivate:[LoginGuardGuard]
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/layout/layout.module').then((m) => m.LayoutModule),
      canActivate:[LayoutGuardGuard]
  },
  // { path: '**', component: PageNotFoundComponent },
  {path:'**',redirectTo:'',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
