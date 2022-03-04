import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Usuario } from '../model/Usuario';
import { LoadingService } from '../services/loading.service';
import { ToastService } from '../services/toast.service';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {

  public usuario: Usuario;
  private inputName: String;
  private inputEmail: String;
  private inputPhone: String;
  private inputPass: String;
  private inputNewPass: String;
  private inputConfirmPass: String;
  private email: String;
  private phone: String;

  constructor(
    private usuarioService: UsuariosService,
    private toast: ToastService,
    public alertController: AlertController,
    public miLoading: LoadingService,
    private modalController: ModalController) { }

  public async editDataUsuario() {

    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Estás seguro de que quieres actualizar los datos?',
      buttons: [
        {
          text: 'Cancelar',
          handler: (blah) => {
            this.toast.showToast("Operación cancelada", "warning");
          }
        },
        {
          text: 'Actualizar',
          handler: async () => {
            try {
              await this.miLoading.showLoading();

              // let usuario:Usuario = this.loginService.getCurrentUser();

              await this.miLoading.hideLoading();

            } catch (error) {
              console.log(error);
              this.toast.showToast("Error al actualizar los datos", "danger");
            }
          }
        }
      ]
    });
    await alert.present();
  }


}
