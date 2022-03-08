import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrPagePage } from './qr-page.page';

const routes: Routes = [
  {
    path: '',
    component: QrPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrPagePageRoutingModule {}
