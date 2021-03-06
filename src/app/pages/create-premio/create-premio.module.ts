import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePremioPageRoutingModule } from './create-premio-routing.module';

import { CreatePremioPage } from './create-premio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePremioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreatePremioPage]
})
export class CreatePremioPageModule {}
