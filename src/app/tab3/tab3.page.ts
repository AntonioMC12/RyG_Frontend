import { Component } from '@angular/core';
import { Premio } from '../model/Premio';
import { Usuario } from '../model/Usuario';
import { PremioService } from '../services/premio.service';
import { ToastService } from '../services/toast.service';
import { UsuariosService } from '../services/usuarios.service';
import { CreateUserPage } from '../pages/create-user/create-user.page';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public listado: Array<Usuario>;
  public usuarios: Usuario[] = [];
  public usuario: Usuario;

  constructor(private api: PremioService,
    private usuarioService: UsuariosService,
    private toast: ToastService,
    public alertController: AlertController,
    private modalController: ModalController) { }

  async ionViewDidEnter() {
    await this.getUsuarios();
  }

  public async getUsuarios(id?: any) {
    if (id != undefined && id > -1) {
      console.log(id);
      this.usuarioService.getUsuarios(id);
    } else {
      console.log(id);
      this.usuarios = await this.usuarioService.getUsuarios();
      // this.toast.showToast('éxito', 'success');
    }
  }

  public getUsuarioByCoordinates(latitud: Number, longitud: Number) {
    if (latitud != undefined && longitud != undefined) {
      console.log("Lat:" + latitud + ". Long: " + longitud);
      this.usuarioService.getUsuarioByCoordinates(latitud, longitud);
    }
  }

  public postUsuario() {
    let usuario: Usuario = {
      id: 3,
      uid: "prueba contraseña",
      direccion: "calle prueba nº3",
      email: "prueba@hotmail.com",
      latitud: 12,
      longitud: 11,
      nombre_comercio: "empresa prueba",
      participaciones: 0,
      telefono: "616123456",
      admin: false
    }
    this.usuarioService.postUsuario(usuario);
  }

  public putUsuario() {
    let usuario: Usuario = {
      id: 3,
      uid: "prueba contraseña",
      direccion: "calle prueba nº3",
      email: "prueba@hotmail.com",
      latitud: 12,
      longitud: 11,
      nombre_comercio: "empresa prueba",
      participaciones: 0,
      telefono: "616123456",
      admin: false
    }
    this.usuarioService.putUsuario(usuario);
  }

  public async deleteUsuario(usuario: Usuario) {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Estás seguro de que quieres eliminar?',
      buttons: [
        {
          text: 'Cancelar',
          handler: (blah) => {

          }
        },
        {
          text: 'Eliminar',
          handler: async () => {
            try {
              await this.usuarioService.deleteUsuario(usuario.id);
              console.log(this.usuario);
              let i = this.usuarios.indexOf(usuario, 0);
              this.toast.showToast("Usuario eliminado con éxito", "success")
              if (i > -1) {
                this.usuarios.splice(i, 1);
              }
            } catch (error) {
              console.log(error);
            }
          }
        }
      ]
    });
    await alert.present();
  }

  public testToast(msg: string, color: string) {
    this.toast.showToast(msg, color);
  }

  public async crear(usuario: Usuario) {
    const modal = await this.modalController.create({
      component: CreateUserPage,
      cssClass: 'my-modal',
      componentProps: {}
    });
    await modal.present();
    await modal.onDidDismiss();
    await this.getUsuarios();
  }
}