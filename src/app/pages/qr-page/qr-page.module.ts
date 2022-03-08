import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrPagePageRoutingModule } from './qr-page-routing.module';

import { QrPagePage } from './qr-page.page';
import { QRCodeModule } from 'angular2-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrPagePageRoutingModule,
    QRCodeModule
  ],
  declarations: [QrPagePage]
})
export class QrPagePageModule {}
