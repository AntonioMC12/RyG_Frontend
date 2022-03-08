import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearParticipacionesPage } from './crear-participaciones.page';

const routes: Routes = [
  {
    path: '',
    component: CrearParticipacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearParticipacionesPageRoutingModule {}
