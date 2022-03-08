import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RascayganaPage } from './rascaygana.page';

const routes: Routes = [
  {
    path: '',
    component: RascayganaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RascayganaPageRoutingModule {}
