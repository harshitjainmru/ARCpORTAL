import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonDialogRoutingModule } from './common-dialog-routing.module';
import { CommonDialogComponent } from './common-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonDialogService } from './dialogService/common-dialog.service';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    CommonDialogComponent
  ],
  imports: [
    CommonModule,
    CommonDialogRoutingModule,
    MatDialogModule,
    MatIconModule
  ],
  providers:[CommonDialogService]
})
export class CommonDialogModule { }
