import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPremioPage } from './edit-premio.page';

const routes: Routes = [
  {
    path: '',
    component: EditPremioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPremioPageRoutingModule {}
