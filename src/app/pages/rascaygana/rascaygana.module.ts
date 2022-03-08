import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RascayganaPageRoutingModule } from './rascaygana-routing.module';

import { RascayganaPage } from './rascaygana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RascayganaPageRoutingModule
  ],
  declarations: [RascayganaPage]
})
export class RascayganaPageModule {}
