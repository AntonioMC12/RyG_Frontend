import { Component } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  // public listado: Array<Usuario>;

  constructor(private api: UsuariosService) { }

  public async getUsuarios() {

    this.api.getUsuarios();

    //loading
    // try {
    //   this.listado = await this.api.getUsuarios(); //asincrono
    // } catch (err) {
    //   console.log(err);
    //   this.listado = null; //vista
    // }

    //actualizar la vista
    //ocultar loading
  }

}