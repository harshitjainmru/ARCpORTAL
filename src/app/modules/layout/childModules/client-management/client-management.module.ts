import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientManagementRoutingModule } from './client-management-routing.module';
import { ClientManagementComponent } from './client-management.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AbsoluteUrlModule } from 'src/app/pipes/absolute-url/absolute-url.module';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { CommonDialogModule } from 'src/app/components/common-dialog/common-dialog.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClientManagementComponent
  ],
  imports: [
    CommonModule,
    ClientManagementRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    AbsoluteUrlModule,
    SharedModuleModule,
    CommonDialogModule,
    ReactiveFormsModule
  ]
})
export class ClientManagementModule { }
