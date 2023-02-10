import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonTableComponent } from '../components/common-table/common-table.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonFilterComponent } from '../components/common-filter/common-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadFileComponent } from '../components/upload-file/upload-file.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PaginatorDirective } from '../directives/paginator.directive';

@NgModule({

    declarations: [CommonTableComponent, CommonFilterComponent,UploadFileComponent,
    PaginatorDirective,

    ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    RouterModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule

  ],
  exports: [CommonTableComponent,CommonFilterComponent,UploadFileComponent],
})
export class SharedModuleModule {}
