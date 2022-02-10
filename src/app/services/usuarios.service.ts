import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  public async getUsuarios(id_usuario?: Number) {
    if (id_usuario != undefined) {
      let endpoint = environment.endpoint + environment.apiUsuario + id_usuario;
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

  public async postUsuario(usuario: Usuario) {
    let endpoint = environment.endpoint + environment.apiUsuario;
    let response;
    try {
      response = await this.http.post(endpoint, usuario).toPromise();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  public async putUsuario(usuario: Usuario) {
    let endpoint = environment.endpoint + environment.apiUsuario;
    let response;
    try {
      response = await this.http.put(endpoint, usuario).toPromise();
    } catch (error) {
      console.error(error);
    }
  }

  public async deleteUsuario(id_usuario: Number) {
    if (id_usuario != null && id_usuario != undefined && id_usuario > -1) {
      let endpoint = environment.endpoint + environment.apiUsuario + id_usuario;
      let usuarios;
      try {
        usuarios = await this.http.delete(endpoint).toPromise();
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("id_usuario incorrecto");
    }
  }

  private get header(): any {
    return {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  }

}
