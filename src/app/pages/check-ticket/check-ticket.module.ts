import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckTicketPageRoutingModule } from './check-ticket-routing.module';

import { CheckTicketPage } from './check-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckTicketPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CheckTicketPage]
})
export class CheckTicketPageModule {}
