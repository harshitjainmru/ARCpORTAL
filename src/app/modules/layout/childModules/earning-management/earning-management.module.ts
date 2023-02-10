import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EarningManagementRoutingModule } from './earning-management-routing.module';
import { EarningManagementComponent } from './earning-management.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EarningManagementComponent
  ],
  imports: [
    CommonModule,
    EarningManagementRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    SharedModuleModule,
    ReactiveFormsModule
  ]
})
export class EarningManagementModule { }
