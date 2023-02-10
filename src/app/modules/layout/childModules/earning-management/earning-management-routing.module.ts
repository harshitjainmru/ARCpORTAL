import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarningManagementComponent } from './earning-management.component';

const routes: Routes = [
  {path:'',component:EarningManagementComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EarningManagementRoutingModule { }
