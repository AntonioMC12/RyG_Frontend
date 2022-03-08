import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckTicketPage } from './check-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: CheckTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckTicketPageRoutingModule {}
