import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Premio } from '../model/Premio';
import { PremioService } from '../services/premio.service';
import { ToastService } from '../services/toast.service';
import { UsuariosService } from '../services/usuarios.service';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { CreatePremioPage } from '../pages/create-premio/create-premio.page';
import { EditPremioPage } from '../pages/edit-premio/edit-premio.page';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public listado: Array<Premio>;
  public premios: Premio[] = [];
  public premio:Premio;
  constructor(private usuarioService: UsuariosService,
    public alertController: AlertController, 
    private api:PremioService,
    private modalController:ModalController,
    public miLoading:LoadingService) { }

  ngOnInit() {
  
  }

  async ionViewDidEnter() {
    await this.getAllPremio();
  }

  public async getAllPremio() {
    try {
      this.premios = await this.api.getAllPremios();
    } catch (error) {
      console.log(error);
      this.listado = null;
    }
  }

  public async deletePremio(premio:Premio) {

    const alert = await this.alertController.create({
      header:'Confirmación',
      message:'Estas seguro de que quieres eliminar',
      buttons: [
        {
          text:'Cancelar',
          handler:(blah)=>{
            //nada
          }
        },
        {
          text:'Eliminar',
          handler: async()=>{
            try {
              await this.miLoading.showLoading();
              await this.api.deletePremio(premio.id);
              console.log(this.premio);
              //Para recargar la lista
              let i = this.premios.indexOf(premio,0);
              if(i>-1){
                this.premios.splice(i,1);
              }
              await this.miLoading.hideLoading();
            } catch (error) {
              console.log(error);
              
            }
          }
        }
      ]
    });
    await alert.present();
  }

  public async crear() {

    const modal = await this.modalController.create({
      component: CreatePremioPage,
      cssClass: 'my-custom-class',
      componentProps: {  }
    });
    await modal.present();
    await modal.onDidDismiss();
    await this.getAllPremio();
  }

  public async editar(premio:Premio) {
    const modal = await this.modalController.create({
      component: EditPremioPage,
      cssClass: 'my-custom-class',
      componentProps: { premio }
    });
    await modal.present();
    await modal.onDidDismiss();
    await this.getAllPremio();
  }

  /**
   * Busca filtrando descripción
   * @param $event 
   */
  public async buscar($event) {

    let premios: Premio[] = []
    const filtro: string = $event.detail.value;
    if (filtro.length > 1) {

      for (let premio of this.premios) {
        if (premio.description.includes(filtro)) {
          premios.push(premio);
        }
      };
      this.premios = premios;
    } else if (filtro.length == 0) {
      await this.getAllPremio();

    }
  }








   /** 
  public getUsuarios(id?: any) {
    if (id != undefined && id > -1) {
      console.log(id);
      this.usuarioService.getUsuarios(id);
    } else {
      console.log(id);
      this.usuarioService.getUsuarios();
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
      id: -1,
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
    this.usuarioService.createUsuario(usuario);
  }

  public putUsuario() {
    let usuario: Usuario = {
      id: -1,
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
    this.usuarioService.updateUsuario(usuario);
  }

  public deleteUsuario(id_usuario: Number) {
    this.usuarioService.deleteUsuario(id_usuario);
  }

  public testToast(msg: string, color: string) {
    //this.toast.showToast(msg, color);

    //en un caso práctico, en el catch del método se pondría this.toast.showToast(error, 'danger');
  }
  */
}