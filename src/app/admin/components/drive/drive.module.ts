import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriveComponent } from './drive.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DriveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path : "" , component : DriveComponent},
    ])
  ]
})
export class DriveModule { }
