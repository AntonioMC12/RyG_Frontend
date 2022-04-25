import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Premio } from '../model/Premio';
import { PremioService } from '../services/premio.service';
import { ToastService } from '../services/toast.service';
import { UsuariosService } from '../services/usuarios.service';
import {
  AlertController,
  IonInfiniteScroll,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { CreatePremioPage } from '../pages/create-premio/create-premio.page';
import { EditPremioPage } from '../pages/edit-premio/edit-premio.page';
import { LoadingService } from '../services/loading.service';
import { CrearBoletoPage } from '../pages/crear-boleto/crear-boleto.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  public listado: Array<Premio>;
  public premios: Premio[] = [];
  public premio: Premio;
  constructor(
    private usuarioService: UsuariosService,
    public alertController: AlertController,
    private api: PremioService,
    private modalController: ModalController,
    public miLoading: LoadingService,
    public toast: ToastService
  ) {}

  ngOnInit() {}

  async ionViewDidEnter() {
    await this.miLoading.showLoading();
    await this.getAllPremio();
    await this.miLoading.hideLoading();
  }

  public async cargaPremios(event?) {
    if (!event) {
      await this.miLoading.showLoading();
    }
    this.premios = [];
    try {
      this.premios = await this.api.getAllPremios();
    } catch (err) {
      console.error(err);
      await this.toast.showToast('Error cargando datos', 'danger');
    } finally {
      if (event) {
        event.target.complete();
      } else {
        await this.miLoading.hideLoading();
      }
    }
  }

  public async getAllPremio() {
    try {
      this.premios = await this.api.getAllPremios();
    } catch (error) {
      this.listado = null;
    }
  }

  public async deletePremio(premio: Premio) {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: 'Estas seguro de que quieres eliminar',
      cssClass: 'my-css',
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'my-css',
          handler: (blah) => {
            //nada
          },
        },
        {
          text: 'Eliminar',
          cssClass: 'my-css',
          handler: async () => {
            try {
              await this.miLoading.showLoading();
              await this.api.deletePremio(premio.id);
              //Para recargar la lista
              let i = this.premios.indexOf(premio, 0);
              if (i > -1) {
                this.premios.splice(i, 1);
              }
              await this.miLoading.hideLoading();
              await this.toast.showToast(
                'Premio borrado correctamente',
                'tertiary'
              );
            } catch (error) {}
          },
        },
      ],
    });
    await alert.present();
  }

  public async crear() {
    const modal = await this.modalController.create({
      component: CreatePremioPage,
      cssClass: 'my-custom-class',
      componentProps: {},
    });
    await modal.present();
    await modal.onDidDismiss();
    await this.getAllPremio();
  }

  public async editar(premio: Premio) {
    const modal = await this.modalController.create({
      component: EditPremioPage,
      cssClass: 'my-custom-class',
      componentProps: { premio },
    });
    await modal.present();
    await this.getAllPremio();
  }

  /**
   * Busca filtrando descripción
   * @param $event
   */
  public async buscar($event) {
    let premios: Premio[] = [];
    const filtro: string = $event.detail.value;
    if (filtro.length > 1) {
      for (let premio of this.premios) {
        if (premio.description.includes(filtro)) {
          premios.push(premio);
        }
      }
      this.premios = premios;
    } else if (filtro.length == 0) {
      await this.getAllPremio();
    }
  }

  /**
   * Pasar a la pag siguiente
   *
   */
  public async siguiente() {
    const modal = await this.modalController.create({
      component: CrearBoletoPage,
      cssClass: 'my-custom-class',
      componentProps: {},
    });
    await modal.present();
    await modal.onDidDismiss();
  }
}
