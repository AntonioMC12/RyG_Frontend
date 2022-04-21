import { Component } from '@angular/core';
import { Premio } from '../model/Premio';
import { Usuario } from '../model/Usuario';
import { PremioService } from '../services/premio.service';
import { ToastService } from '../services/toast.service';
import { UsuariosService } from '../services/usuarios.service';
import { CreateUserPage } from '../pages/create-user/create-user.page';
import { AlertController, ModalController } from '@ionic/angular';
import { LoadingService } from '../services/loading.service';
import { EditUserPage } from '../pages/edit-user/edit-user.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  public listado: Array<Usuario>;
  public usuarios: Usuario[] = [];
  public usuario: Usuario;
  public inputSearchName: String;

  constructor(
    private api: PremioService,
    private usuarioService: UsuariosService,
    private toast: ToastService,
    public alertController: AlertController,
    private modalController: ModalController,
    public miLoading: LoadingService
  ) {}

  async ionViewDidEnter() {
    await this.miLoading.showLoading();
    await this.getUsuarios();
    await this.miLoading.hideLoading();
  }

  public async getUsuarios(id?: any) {
    if (id && id > -1) {
      this.usuarios = await this.usuarioService.getUsuarios(id);
    } else {
      this.usuarios = await this.usuarioService.getUsuarios();
    }
  }

  public getUsuarioByCoordinates(latitud: Number, longitud: Number) {
    if (latitud != undefined && longitud != undefined) {
      this.usuarioService.getUsuarioByCoordinates(latitud, longitud);
    }
  }
  public async deleteUsuario(usuario: Usuario) {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Estás seguro de que quieres eliminar?',
      cssClass: 'my-css',
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'my-css',
          handler: (blah) => {
            this.toast.showToast('Operación cancelada', 'warning');
          },
        },
        {
          text: 'Eliminar',
          cssClass: 'my-css',
          handler: async () => {
            try {
              await this.miLoading.showLoading();
              await this.usuarioService.deleteUsuario(usuario.id);
              let i = this.usuarios.indexOf(usuario, 0);
              this.toast.showToast('Usuario eliminado con éxito', 'success');
              if (i > -1) {
                this.usuarios.splice(i, 1);
              }
              await this.miLoading.hideLoading();
            } catch (error) {
              this.toast.showToast('Error al eliminar el usuario', 'danger');
            }
          },
        },
      ],
    });
    await alert.present();
  }
  public async crear() {
    const modal = await this.modalController.create({
      component: CreateUserPage,
      cssClass: 'my-modal',
      componentProps: {},
    });
    await modal.present();
    await modal.onDidDismiss();
    await this.getUsuarios();
    // this.toast.showToast("Usuario creado con éxito", "success");
  }

  public async editar(usuario: Usuario) {
    const modal = await this.modalController.create({
      component: EditUserPage,
      cssClass: 'my-modal',
      componentProps: {
        Usuario: usuario,
      },
    });
    await modal.present();
    await modal.onDidDismiss();
    await this.getUsuarios();
    // this.toast.showToast("Usuario creado con éxito", "success");
  }

  /**
   * Busca filtrando descripción
   * @param $event
   */
  public async buscar($event) {
    let usuarios: Usuario[] = [];
    const filtro: string = $event.detail.value;
    if (filtro.length > 1) {
      for (let usuario of this.usuarios) {
        if (usuario.nombre_comercio.includes(filtro)) {
          usuarios.push(usuario);
        }
      }
      this.usuarios = usuarios;
    } else if (filtro.length == 0) {
      await this.getUsuarios();
    }
  }

  public async doRefresh($event) {
    setTimeout(async () => {
      let usuarios: Usuario[] = [];
      for (let usuario of this.usuarios) {
        usuarios.push(usuario);
      }
      this.usuarios = usuarios;
      await this.getUsuarios();
      this.inputSearchName = '';
      $event.target.complete();
    }, 1000);
  }
}
