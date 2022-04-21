import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoletoDetailsPage } from './boleto-details.page';

const routes: Routes = [
  {
    path: '',
    component: BoletoDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoletoDetailsPageRoutingModule {}
