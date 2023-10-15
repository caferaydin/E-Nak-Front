import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreliminaryOfferComponent } from './preliminary-offer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PreliminaryOfferComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path : "" , component : PreliminaryOfferComponent},

    ])
  ]
})
export class PreliminaryOfferModule { }
