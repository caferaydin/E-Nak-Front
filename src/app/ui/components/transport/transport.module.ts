import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportComponent } from './transport.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TransportComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path : "" , component : TransportComponent},

    ])
  ]
})
export class TransportModule { }
