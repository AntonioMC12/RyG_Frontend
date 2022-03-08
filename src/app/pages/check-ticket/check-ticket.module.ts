import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckTicketPageRoutingModule } from './check-ticket-routing.module';

import { CheckTicketPage } from './check-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckTicketPageRoutingModule
  ],
  declarations: [CheckTicketPage]
})
export class CheckTicketPageModule {}
