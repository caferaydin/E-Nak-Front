import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreliminaryOfferComponent } from './preliminary-offer/preliminary-offer.component';
import { HomeModule } from './home/home.module';
import { PreliminaryOfferModule } from './preliminary-offer/preliminary-offer.module';
import { TransportModule } from './transport/transport.module';



@NgModule({
  declarations: [
    PreliminaryOfferComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    PreliminaryOfferModule,
    TransportModule
  ]
})
export class ComponentsModule { }
