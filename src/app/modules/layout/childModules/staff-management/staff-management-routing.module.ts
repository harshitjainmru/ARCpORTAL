import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NEW_STAFF_MANAGE } from 'src/app/constants/router';
import { StaffManagementComponent } from './staff-management.component';

const routes: Routes = [
  {path:'',component:StaffManagementComponent,pathMatch:'full'},
  {path:NEW_STAFF_MANAGE.baseUrl,loadChildren:()=>import('./add-new-staff/add-new-staff.module').then(m=>m.AddNewStaffModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffManagementRoutingModule { }
