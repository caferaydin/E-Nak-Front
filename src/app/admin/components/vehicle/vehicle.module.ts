import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    VehicleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "" , component:VehicleComponent},

    ])
  ]
})
export class VehicleModule { }
