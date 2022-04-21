import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoletoDetailsPageRoutingModule } from './boleto-details-routing.module';

import { BoletoDetailsPage } from './boleto-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoletoDetailsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BoletoDetailsPage]
})
export class BoletoDetailsPageModule {}
