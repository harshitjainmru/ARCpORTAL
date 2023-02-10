import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentManagementRoutingModule } from './content-management-routing.module';
import { ContentManagementComponent } from './content-management.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { WhoWeComponent } from './childComponents/who-we/who-we.component';
import { TermsComponent } from './childComponents/terms/terms.component';
import { FaqComponent } from './childComponents/faq/faq.component';
import { AboutComponent } from './childComponents/about/about.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    ContentManagementComponent,
    WhoWeComponent,
    TermsComponent,
    FaqComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    ContentManagementRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class ContentManagementModule { }
