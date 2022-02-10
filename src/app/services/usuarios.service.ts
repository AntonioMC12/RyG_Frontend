import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  public async getUsuarios(id?: Number) {
    if (id != undefined) {
      let endpoint = environment.endpoint + environment.apiUsuario + id;
      let usuario;
      try {
        usuario = await this.http.get(endpoint).toPromise();
        console.log(usuario);
      } catch (error) {
        console.error(error);
      }
    } else {
      let endpoint = environment.endpoint + environment.apiUsuario;
      let usuarios;
      try {
        usuarios = await this.http.get(endpoint).toPromise();
        console.log(usuarios);
      } catch (error) {
        console.error(error);
      }
    }
  }

  public async getUsuarioByCoordinates(latitud: Number, longitud: Number) {
    if (latitud != undefined && longitud != undefined) {
      let endpoint = environment.endpoint + environment.apiUsuario + latitud + "/" + longitud;
      let usuario;
      try {
        usuario = await this.http.get(endpoint).toPromise();
        console.log(usuario);
      } catch (error) {
        console.log(error);
      }
    }
  }

}
