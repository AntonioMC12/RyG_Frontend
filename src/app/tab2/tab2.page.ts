import { Component } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { ToastService } from '../services/toast.service';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private usuarioService: UsuariosService, private toast: ToastService) { }

  ngOnInit() {

  }

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
      contrasena: "prueba contraseña",
      direccion: "calle prueba nº3",
      email: "prueba@hotmail.com",
      latitud: 12,
      longitud: 11,
      nombre_comercio: "empresa prueba",
      participaciones: 0,
      telefono: "616123456"
    }
    this.usuarioService.postUsuario(usuario);
  }

  public putUsuario() {
    let usuario: Usuario = {
      id: 20,
      contrasena: "prueba contraseña",
      direccion: "calle prueba nº3",
      email: "prueba@hotmail.com",
      latitud: 12,
      longitud: 11,
      nombre_comercio: "empresa prueba",
      participaciones: 0,
      telefono: "616123456"
    }
    this.usuarioService.putUsuario(usuario);
  }

  public deleteUsuario(id_usuario: Number) {
    this.usuarioService.deleteUsuario(id_usuario);
  }

  public testToast(msg: string, color: string) {
    this.toast.showToast(msg, color);

    //en un caso práctico, en el catch del método se pondría this.toast.showToast(error, 'danger');
  }
}