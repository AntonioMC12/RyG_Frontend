import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Premio } from '../model/Premio';

@Injectable({
  providedIn: 'root'
})
export class PremioService {
  private last:any=null;
  constructor(private http: HttpClient) { }

  public cargarPremios(all?):Promise<Premio[]|null>{

    return new Promise(async (resolve, reject) => {
      let endpoint = null;
      if(this.last){
        endpoint =(environment.apiEnviroment.endpoint + environment.apiEnviroment.apiPremio,
          ref => ref.limit(2).starAfter(this.last));
      }else{
        endpoint =(environment.apiEnviroment.endpoint + environment.apiEnviroment.apiPremio,
          ref => ref.limit(2));
      }
      try {
        let result: any = await this.http.get(endpoint).toPromise();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }
  /**
   * Método que obtiene todos los premios almacenados en la BD o
   * si le pasas un id como argumento te hace la búsqueda de ese premio
   * @param id 
   * @returns premio por id o lista de todos los premios
   */
  public getAllPremios(id?: Number): Promise<Premio[] | null> {

    return new Promise(async (resolve, reject) => {
      let endpoint = environment.apiEnviroment.endpoint + environment.apiEnviroment.apiPremio;
      if (id) {
        endpoint += id;
      }
      try {
        let result: any = await this.http.get(endpoint).toPromise();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  public getPremio(id: Number): Promise<Premio | null> {

    return new Promise(async (resolve, reject) => {
      let endpoint = environment.apiEnviroment.endpoint + environment.apiEnviroment.apiPremio + id;
      
      try {
        let result: any = await this.http.get(endpoint).toPromise();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }
  /**
   * Método que crea premios en la BD
   * @param premio 
   * @returns el premio creado
   */
  public createPremio(premio: Premio): Promise<Premio> {

    return new Promise(async (resolve, reject) => {
      const endpoint = environment.apiEnviroment.endpoint + environment.apiEnviroment.apiPremio;
      try {
        let result: any = await this.http.post(endpoint, premio).toPromise();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Método que actualiza un premio en la BD
   * @param premio 
   * @returns  el premio actualizado
   */
  public updatePremio(premio: Premio): Promise<Premio> {

    return new Promise(async (resolve, reject) => {
      const endpoint = environment.apiEnviroment.endpoint + environment.apiEnviroment.apiPremio;
      try {
        let result: any = await this.http.put(endpoint, premio).toPromise();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Método que borra un premio de la BD
   * @param id 
   * @returns 
   */
  public deletePremio(id: Number): Promise<void> {

    return new Promise(async (resolve, reject) => {
      const endpoint = environment.apiEnviroment.endpoint + environment.apiEnviroment.apiPremio + id;
      try {
        let result: any = this.http.delete(endpoint).toPromise();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });

  }

  /**
   * Método que obtiene un premio en la BD según su descripción
   * @param descripcion 
   * @returns una lista de premios que contiene la descripción
   */
  public getPremioByDescription(descripcion: string): Promise<Premio[]> {

    return new Promise(async (resolve, reject) => {
      const endpoint = environment.apiEnviroment.endpoint + environment.apiEnviroment.apiPremio + environment.apiEnviroment.descripcion + descripcion;
      try {
        let result: any = await this.http.get(endpoint).toPromise();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Método que obtiene todo los premios que han sido entregados
   * @returns lista de premios entregados
   */
  public getPremiosEntregados(): Promise<Premio[]> {

    return new Promise(async (resolve, reject) => {
      const endpoint = environment.apiEnviroment.endpoint + environment.apiEnviroment.apiPremio + environment.apiEnviroment.entregado;
      try {
        let premios: Premio[] = [];
        let premio: Premio;
        let result: any = await this.http.get(endpoint).toPromise();
        for (premio of result) {
          if (premio.entregado == true) {
            premios.push(premio);
          }
        }
        resolve(premios);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Método que obtiene todo los premios que no han sido entregados
   * @returns lista de premios no entregados
   */
  public getPremiosNoEntregados(): Promise<Premio[]> {

    return new Promise(async (resolve, reject) => {
      const endpoint = environment.apiEnviroment.endpoint + environment.apiEnviroment.apiPremio + environment.apiEnviroment.noEntregado;
      try {
        let premios: Premio[] = [];
        let premio: Premio;
        let result: any = await this.http.get(endpoint).toPromise();
        for (premio of result) {
          if (premio.entregado == false) {
            premios.push(premio);
          }
        }
        resolve(premios);
      } catch (error) {
        reject(error);
      }
    });
  }

}
