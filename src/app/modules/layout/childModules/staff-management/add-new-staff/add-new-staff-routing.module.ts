import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewStaffComponent } from './add-new-staff.component';

const routes: Routes = [
  {path:'',component:AddNewStaffComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddNewStaffRoutingModule { }
