import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearBoletoPageRoutingModule } from './crear-boleto-routing.module';

import { CrearBoletoPage } from './crear-boleto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearBoletoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CrearBoletoPage]
})
export class CrearBoletoPageModule {}
