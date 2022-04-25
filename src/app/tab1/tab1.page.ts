import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Boleto } from '../model/Boleto';
import { BoletoDetailsPage } from '../pages/boleto-details/boleto-details.page';
import { QrPagePage } from '../pages/qr-page/qr-page.page';
import { BoletoService } from '../services/boleto.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public isGenerated: boolean = false;

  constructor(
    private boletoService: BoletoService,
    public navCtrl: NavController,
    private modalController: ModalController,
    private toastService: ToastService
  ) {}

  public dirigirAAyuda() {
    this.navCtrl.navigateRoot('help');
  }

  /**
   * Generar qr para acceder a la pagina de los tickets
   */
  public async generateBoletoQR() {
    const modal = await this.modalController.create({
      component: QrPagePage,
      cssClass: 'my-modal',
      componentProps: {},
    });
    await modal.present();
    await modal.onDidDismiss();
  }

  public async checkBoleto(idBoleto: number | string) {
    console.log(idBoleto);
    if (!this.checkParseNumber(idBoleto)) {
      this.toastService.showToast(
        'El boleto no es valido, inserte un número correcto.',
        'danger'
      );
      return;
    }

    this.boletoService
      .getBoleto(idBoleto as number)
      .then((boleto) => {
        if (boleto.id) this.showBoletoModal(boleto);
        else this.toastService.showToast('Boleto no encontrado', 'danger');
      })
      .catch((error) => {
        this.toastService.showToast('Ha ocurrido un error...', 'danger');
      });
  }

  public checkParseNumber(idBoleto: number | string) {
    if (typeof idBoleto !== 'string') {
      return false;
    }

    if (idBoleto.trim() === '') {
      return false;
    }

    return !Number.isNaN(Number(idBoleto));
  }

  async showBoletoModal(boleto: Boleto) {
    const modal = await this.modalController.create({
      component: BoletoDetailsPage,
      cssClass: 'my-modal',
      componentProps: {
        boleto: boleto,
      },
    });
    await modal.present();
    await modal.onDidDismiss();
  }
}
