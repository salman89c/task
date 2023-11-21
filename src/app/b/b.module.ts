import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstBComponent } from './first-b/first-b.component';
import { SecondBComponent } from './second-b/second-b.component';



@NgModule({
  declarations: [
    FirstBComponent,
    SecondBComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FirstBComponent, SecondBComponent],
})
export class BModule { }
