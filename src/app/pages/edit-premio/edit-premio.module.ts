import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPremioPageRoutingModule } from './edit-premio-routing.module';

import { EditPremioPage } from './edit-premio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPremioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditPremioPage]
})
export class EditPremioPageModule {}
