import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearBoletoPage } from './crear-boleto.page';

const routes: Routes = [
  {
    path: '',
    component: CrearBoletoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearBoletoPageRoutingModule {}
