import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearParticipacionesPageRoutingModule } from './crear-participaciones-routing.module';

import { CrearParticipacionesPage } from './crear-participaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearParticipacionesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CrearParticipacionesPage]
})
export class CrearParticipacionesPageModule {}
