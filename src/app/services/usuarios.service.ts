import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public currentUser:Usuario;

  constructor(private http: HttpClient) { }

  public async getUsuarios(id_usuario?: Number): Promise<Usuario[]> {
    return new Promise(async (resolve, reject) => {
      let usuarios: Usuario[] = [];
      let endpoint = environment.apiEnviroment.endpoint + environment.apiEnviroment.apiUsuario;
      if (id_usuario) {
        endpoint += id_usuario;
      }
      try {
        usuarios = await this.http.get(endpoint).toPromise() as Usuario[];
        resolve(usuarios);
      } catch (error) {
        reject(error);
      }
    });
  }

  
  public async getUsuario(id_usuario: Number): Promise<Usuario> {
    return new Promise(async (resolve, reject) => {
      let usuario: Usuario;
      let endpoint = environment.apiEnviroment.endpoint + environment.apiEnviroment.apiUsuario + id_usuario;
     
      try {
        usuario = await this.http.get(endpoint).toPromise() as Usuario;
        resolve(usuario);
      } catch (error) {
        reject(error);
      }
    });
  }

  public async getUsuarioByCoordinates(latitud: Number, longitud: Number): Promise<Usuario[]> {
    return new Promise(async (resolve, reject) => {
      let endpoint = environment.apiEnviroment.endpoint + environment.apiEnviroment.apiUsuario + environment.apiEnviroment.apiCoordenadas + latitud + "/" + longitud;
      let usuario: Usuario[];
      if (latitud && longitud) {
        try {
          usuario = await this.http.get(endpoint).toPromise() as Usuario[];
          resolve(usuario);
        } catch (error) {
          reject(error);
        }
      }
    });
  }

  public async postUsuario(newUsuario: Usuario): Promise<Usuario> {
    return new Promise(async (resolve, reject) => {
      let endpoint = environment.apiEnviroment.endpoint + environment.apiEnviroment.apiUsuario;
      let respuesta: Usuario[];
      try {
        respuesta = await this.http.post(endpoint, usuario).toPromise() as Usuario[];
        resolve(respuesta);
      } catch (error) {
        reject(error);
      }

    });
  }

  public async putUsuario(usuario: Usuario): Promise<Usuario> {
    return new Promise(async (resolve, reject) => {
      let endpoint = environment.apiEnviroment.endpoint + environment.apiEnviroment.apiUsuario;
    //  let usuario: Usuario[];
      try {
        usuario = await this.http.put(endpoint, usuario).toPromise() as Usuario;
        resolve(usuario);
      } catch (error) {
        reject(error);
      }
    });
  }

  public async deleteUsuario(id_usuario: Number): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      if (id_usuario && id_usuario > -1) {
        let endpoint = environment.apiEnviroment.endpoint + environment.apiEnviroment.apiUsuario + id_usuario;
        let usuarios;
        try {
          await this.http.delete(endpoint).toPromise();
          resolve(true);
        } catch (error) {
          reject(false);
        }
      } else {
        reject(false);
      }
    })
  }
}
