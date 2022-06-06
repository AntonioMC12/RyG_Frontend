import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { User } from '../model/authUser';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../services/auth.service';
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
  private inputName: string;
  private inputDireccion: string;
  private inputPhone: string;
  private inputPass: string;
  private inputNewPass: string;
  private inputConfirmPass: string;
  private email: string;
  private phone: string;

  constructor(
    private usuarioService: UsuariosService,
    private toast: ToastService,
    public alertController: AlertController,
    public miLoading: LoadingService,
    private modalController: ModalController,
    private authService: AuthService) { }

  
  async ionViewDidEnter() {
    this.miLoading.showLoading();
    this.usuario = await this.authService.getCurrentUser();
    this.inputName = this.usuario.nombre_comercio;
    this.inputDireccion = this.usuario.direccion;
    this.inputPhone = this.usuario.telefono;
    this.miLoading.hideLoading();
  }

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
              let usuario: Usuario = await this.authService.getCurrentUser();
              usuario.nombre_comercio = this.inputName;
              usuario.direccion = this.inputDireccion;
              usuario.telefono = this.inputPhone;
              this.usuarioService.putUsuario(usuario).then(updateUsuario => {
                this.toast.showToast("¡Usuario actualizado correctamente!", "tertiary");
                this.authService.currentUser = updateUsuario;
                console.log(updateUsuario);

              }).catch(error => {
                this.toast.showToast("¡Fallo al actualizar!", "danger");
              });
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

  public async updatePassword() {
    if (this.inputNewPass && this.inputConfirmPass) {
      if (this.inputNewPass == this.inputConfirmPass) {
        this.miLoading.showLoading();
        if (await this.authService.updatePass(this.inputNewPass)) {
          this.toast.showToast("Contraseña cambiada con éxito", "tertiary");
          this.miLoading.hideLoading();
        }else{
          this.miLoading.hideLoading();
        }
      } else {
        this.toast.showToast("Las contraseñas no coinciden", "danger");
      }
    } else {
      this.toast.showToast("Tiene que rellenar todos los campos", "warning");
    }
  }

}
