import { Injectable } from '@angular/core';
import { CommonDialogComponent } from '../common-dialog.component';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CommonDialogService {
  dialogComponentRef!: MatDialogRef<CommonDialogComponent>;

  constructor(private dialog: MatDialog) { }

  public open(options:any) {
    this.dialogComponentRef = this.dialog.open(CommonDialogComponent, {
         data: {
           title: options.title,
           message: options.message,
           cancelText: options.cancelText,
           confirmText: options.confirmText
         }
    });
  }
  public confirmed(): Observable<any> {

    return this.dialogComponentRef.afterClosed().pipe(take(1), map(res => {
        return res;
      }
    ));
  }
}
