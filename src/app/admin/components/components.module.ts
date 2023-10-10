import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { TransportModule } from './transport/transport.module';
import { VehicleModule } from './vehicle/vehicle.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DashboardModule,
    TransportModule,
    VehicleModule
  ],
  exports : [

  ]
})
export class ComponentsModule { }
