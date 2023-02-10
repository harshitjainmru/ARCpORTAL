import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddFaqRoutingModule } from './add-faq-routing.module';
import { AddFaqComponent } from './add-faq.component';
import { AbsoluteUrlModule } from 'src/app/pipes/absolute-url/absolute-url.module';
import { MatButtonModule } from '@angular/material/button';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AddFaqComponent
  ],
  imports: [
    CommonModule,
    AddFaqRoutingModule,
    AbsoluteUrlModule,
    MatButtonModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ]
})
export class AddFaqModule { }
