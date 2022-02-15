import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePremioPage } from './create-premio.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePremioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePremioPageRoutingModule {}
