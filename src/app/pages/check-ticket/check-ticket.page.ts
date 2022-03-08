import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Usuario } from 'src/app/model/Usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-check-ticket',
  templateUrl: './check-ticket.page.html',
  styleUrls: ['./check-ticket.page.scss'],
})
export class CheckTicketPage {

  tempImg: String;

  public listado: Array<Usuario>;
  public usuarios: Usuario[] = [];
  public usuario: Usuario;

  constructor(private usuarioService: UsuariosService, private activatedRoute: ActivatedRoute) { }

  async ionViewDidEnter() {
    await this.getUsuarios();
    // console.log(this.getURLBoleto());
  }

  public async getUsuarios(id?: any) {
    if (id != undefined && id > -1) {
      this.usuarioService.getUsuarios(id);
    } else {
      this.usuarios = await this.usuarioService.getUsuarios();
    }
  }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

  };

  public getURLBoleto() {
    return this.activatedRoute.snapshot.paramMap.get("boleto");
  }

}
