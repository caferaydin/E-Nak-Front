import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PreliminaryOfferModule } from './preliminary-offer/preliminary-offer.module';
import { TransportModule } from './transport/transport.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeModule,
    TransportModule,
    PreliminaryOfferModule
  ]
})
export class ComponentsModule { }
