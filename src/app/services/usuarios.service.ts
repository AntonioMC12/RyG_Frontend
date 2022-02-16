import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  /**
   * Método que obtiene todos los usuarios almacenados en la BD o
   * un usuario en concreto si le pasas un id
   * @param id
   * @returns usuario por id o lista de todos los usuarios
   */
  public async getUsuarios(id?: Number): Promise<Usuario[] | null> {
    return new Promise(async (resolve, reject) => {
      let endpoint = environment.apiEnviroment.endpoint + environment.apiEnviroment.apiUsuario;
      if (id) {
        endpoint += id;
      }
      try {
        let result: any = await this.http.get(endpoint).toPromise();
        console.log(result);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

/**
 * Método que obtiene un usuario de la BD según su latitud y longitud
 * @param latitud 
 * @param longitud 
 * @returns lista de usuarios que contiene la latitud y longitud
 */
  public getUsuarioByCoordinates(latitud: Number, longitud: Number): Promise<Usuario[]> {
    return new Promise(async (resolve, reject) => {
      const endpoint = environment.apiEnviroment.endpoint + environment.apiEnviroment.apiUsuario + environment.apiEnviroment.apiCoordenadas + latitud + "/" + longitud;
      try {
        let result: any = await this.http.get(endpoint).toPromise();
        console.log(result);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
    // if (latitud != undefined && longitud != undefined) {
    //   let endpoint = environment.endpoint + environment.apiUsuario + environment.apiCoordenadas + latitud + "/" + longitud;
    //   let usuario;
    //   try {
    //     usuario = await this.http.get(endpoint).toPromise();
    //     console.log(usuario);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  }

  /**
   * Método que crea usuarios en la BD
   * @param usuario 
   * @returns el usuario creado
   */
  public createUsuario(usuario: Usuario): Promise<Usuario> {
    return new Promise(async (resolve, reject) => {
      const endpoint = environment.apiEnviroment.endpoint + environment.apiEnviroment.apiUsuario;
      try {
        let result: any = await this.http.post(endpoint, usuario).toPromise();
        console.log(result);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    })
  }

  /**
   * Método que actualiza un usuario en la BD
   * @param usuario
   * @returns el usuario actualizado
   */
  public updateUsuario(usuario: Usuario): Promise<Usuario> {
    return new Promise(async (resolve, reject) => {
      const endpoint = environment.apiEnviroment.endpoint + environment.apiEnviroment.apiUsuario;
      try {
        let result: any = await this.http.put(endpoint, usuario).toPromise();
        console.log(result);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    })
  }

  /**
   * Método que borra un usuario de la BD
   * @param id 
   * @returns 
   */
  public deleteUsuario(id: Number): Promise<void> {

    return new Promise(async (resolve, reject) => {
      const endpoint = environment.apiEnviroment.endpoint + environment.apiEnviroment.apiUsuario + id;
      try {
        let result: any = this.http.delete(endpoint).toPromise();
        console.log(result);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }
}
