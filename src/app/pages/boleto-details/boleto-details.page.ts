import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Boleto } from 'src/app/model/Boleto';
import { Premio } from 'src/app/model/Premio';
import { BoletoService } from 'src/app/services/boleto.service';
import { LoadingService } from 'src/app/services/loading.service';
import { PremioService } from 'src/app/services/premio.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-boleto-details',
  templateUrl: './boleto-details.page.html',
  styleUrls: ['./boleto-details.page.scss'],
})
export class BoletoDetailsPage implements OnInit {
  @Input() boleto: Boleto;
  constructor(
    private modalController: ModalController,
    private premioService: PremioService,
    private boletoService: BoletoService,
    private toastService: ToastService,
    private loading: LoadingService
  ) {}

  ngOnInit() {}

  entregar() {}
  /**
   * Cierra el modal
   */
  public cerrar() {
    this.modalController.dismiss();
  }

  public get isValid(): boolean {
    return this.boleto.premio === null
      ? this.boleto.canjeado
      : this.boleto.canjeado && this.boleto.premio?.entregado;
  }

  //hay que actualizar los boletos y premios desde premio.

  public async updateBoleto(boleto: Boleto) {
    await this.boletoService
      .putBoleto(boleto)
      .then(() => {
        this.toastService.showToast('Marcado como entregado', 'success');
      })
      .catch(() => {
        this.toastService.showToast('Error al marcar como entregado', 'danger');
      });
  }

  public async updateBoletoAndBindPremio(premio: Premio) {
    await this.premioService
      .updatePremio(premio)
      .then(async (premio) => {
        let boleto = premio.boleto;
        boleto.premio = {
          id: premio.id,
          description: premio.description,
          entregado: premio.entregado,
        };
        await this.updateBoleto(boleto);
      })
      .catch(() => {
        this.toastService.showToast('Error al marcar como entregado', 'danger');
      });
  }

  public async getPremioById(id: Number): Promise<Premio | null> {
    let response: Premio | null = null;
    await this.premioService.getPremio(id).then((premio) => {
      response = premio;
    });
    return response;
  }

  public async getBoletoById(id: Number): Promise<Boleto | null> {
    let response: Boleto | null = null;
    await this.boletoService
      .getBoleto(id)
      .then((boleto) => {
        response = boleto;
      })
      .catch(() => {});
    return response;
  }

  public async refreshBoleto(boleto: Boleto) {
    let response: Boleto;
    await this.getBoletoById(boleto.id).then((boleto) => {
      response = boleto;
    });
    if (response) this.boleto = response;
  }

  public async setCanjeadosToTrue() {
    //comprobar si boleto tiene premio
    this.loading.showLoading();
    if (this.boleto.premio === null) {
      this.boleto.canjeado = true;
      this.boleto.entregado = true;
      await this.updateBoleto(this.boleto);
    } else {
      let premio: Premio;
      await this.getPremioById(this.boleto.premio.id).then(
        (response) => (premio = response)
      );
      if (premio != null) {
        premio.entregado = true;
        premio.boleto.canjeado = true;
        premio.boleto.entregado = true;
        await this.updateBoletoAndBindPremio(premio);
      } else {
        this.toastService.showToast('Error al marcar como entregado', 'danger');
      }
    }
    await this.refreshBoleto(this.boleto);
    this.loading.hideLoading();
    console.log(this.boleto);
  }
}
