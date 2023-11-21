import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstAComponent } from './first-a/first-a.component';
import { SecondAComponent } from './second-a/second-a.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FirstAComponent,
    SecondAComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FirstAComponent, SecondAComponent],
})
export class AModule { }
