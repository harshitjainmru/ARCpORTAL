import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientDetailsRoutingModule } from './client-details-routing.module';
import { ClientDetailsComponent } from './client-details.component';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AbsoluteUrlModule } from 'src/app/pipes/absolute-url/absolute-url.module';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
@NgModule({
  declarations: [
    ClientDetailsComponent
  ],
  imports: [
    CommonModule,
    ClientDetailsRoutingModule,
    MatIconModule,
    MatGridListModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AbsoluteUrlModule,
    SharedModuleModule
  ]
})
export class ClientDetailsModule { }
