import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsoluteUrlPipe } from './absolute-url.pipe';



@NgModule({
  declarations: [AbsoluteUrlPipe],
  imports: [
    CommonModule
  ],
  exports:[AbsoluteUrlPipe]
})
export class AbsoluteUrlModule { }
