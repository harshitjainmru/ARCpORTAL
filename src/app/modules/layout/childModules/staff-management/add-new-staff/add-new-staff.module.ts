import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddNewStaffRoutingModule } from './add-new-staff-routing.module';
import { AddNewStaffComponent } from './add-new-staff.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbsoluteUrlModule } from 'src/app/pipes/absolute-url/absolute-url.module';


@NgModule({
  declarations: [
    AddNewStaffComponent
  ],
  imports: [
    CommonModule,
    AddNewStaffRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    AbsoluteUrlModule
  ]
})
export class AddNewStaffModule { }
