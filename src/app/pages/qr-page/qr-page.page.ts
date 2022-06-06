import { Component, OnInit } from '@angular/core';
import { Boleto } from 'src/app/model/Boleto';
import { BoletoService } from 'src/app/services/boleto.service';
import { EncryptionService } from 'src/app/services/encryption.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-qr-page',
  templateUrl: './qr-page.page.html',
  styleUrls: ['./qr-page.page.scss'],
})
export class QrPagePage implements OnInit {
  private boletos: Boleto[];
  private boletosFilter: Boleto[] = new Array();
  public isQRReady = false;
  public url = 'http://localhost:8100/check-ticket/';
  constructor(
    public boletoService: BoletoService,
    public loadingService: LoadingService,
    private encrypter: EncryptionService,
    private toastService: ToastService
  ) {}

  /**
   * Cada vez que inicia la pagina, debe consultar los boletos que hay
   * elegir uno comprobando que el boleto no esté entregado ni cangeado,
   * una vez el boleto esté elegido, debemos updatearlo como entregado y
   * redirigir al usuario a la pagina del ticket asociado a dicho boleto.
   */

  ngOnInit() {}

  async ionViewDidEnter() {
    this.loadingService.showLoading();
    let selectedBoleto = await this.setBoletoAsEntregado(await this.pickRandomBoleto())
    .then((boleto) => {
      this.toastService.showToast('Boleto generado correctamente', 'success');
      return boleto;
    }).catch((error) => {
      this.toastService.showToast('Error al generar el boleto', 'danger');
      this.loadingService.hideLoading();
      return null;
    });
    if(selectedBoleto != null) {
    this.url = this.url.concat(this.encryptBoletoId(selectedBoleto.id));
    console.log(this.url);
    this.isQRReady = true;
    this.loadingService.hideLoading();
    }
  }

  //funcion para generar el boleto random
  async pickRandomBoleto() {
    await this.getAllBoletosFromDataBase();
    this.filterBoletosNoCangeadosAndEntregado();
    return this.getRandomTicketFromFilterBoletos();
  }

  //consultar los boletos que hay y los guarda en el array boletos local.
  async getAllBoletosFromDataBase() {
    this.boletos = await this.boletoService.getBoletos();
  }

  //filtrar los boletos no entregados y cangeados.
  filterBoletosNoCangeadosAndEntregado(): Boleto[] {
    for (let index = 0, subIndex = 0; index < this.boletos.length; index++) {
      if (this.isNotCanjeadoAndEntregado(this.boletos[index])) {
        this.boletosFilter[subIndex] = this.boletos[index];
        subIndex++;
      }
    }
    return this.boletosFilter;
  }

  //comprobar que un boleto no es entregado ni canjeado.
  isNotCanjeadoAndEntregado(element: Boleto): boolean {
    if (!element.canjeado && !element.entregado) return true;
  }

  //elegir un ticket aleatorio desde el listado filtrado
  getRandomTicketFromFilterBoletos(): Boleto {
    let randomIndex = Math.floor(Math.random() * this.boletosFilter.length);
    return this.boletosFilter[randomIndex];
  }

  async setBoletoAsEntregado(boleto: Boleto) {
    boleto.entregado = true;
    return await this.boletoService.putBoleto(boleto);
  }

  public encryptBoletoId(idBoleto: Number) {
    return this.encrypter.encrypt(idBoleto.toString());
  }
}
