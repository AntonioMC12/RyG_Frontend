import { Component } from '@angular/core';
import { Ticket } from '../model/Ticket';
import { TicketService } from '../services/ticket.service';
import { ModalController, NavController } from '@ionic/angular';
import { QrPagePage } from '../pages/qr-page/qr-page.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public listado: Array<Ticket>;
  public ticket: Ticket;
  public isGenerated:boolean = false;

  constructor(private api: TicketService, public navCtrl: NavController,private modalController: ModalController) { }

  public dirigirAAyuda() {
    this.navCtrl.navigateRoot("help");
  }

  public async generateBoletoQR(){
    const modal = await this.modalController.create({
      component: QrPagePage,
      cssClass: 'my-modal',
      componentProps: {}
    });
    await modal.present();
    await modal.onDidDismiss();
  }
}
