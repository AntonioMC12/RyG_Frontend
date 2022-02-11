import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Premio } from '../model/Premio';

@Injectable({
  providedIn: 'root'
})
export class PremioService {

  constructor(private http: HttpClient) { }

  /**
   * Método que obtiene todos los premios almacenados en la BD o
   * si le pasas un id como argumento te hace la búsqueda de ese premio
   * @param id 
   * @returns premio por id o lista de todos los premios
   */
  public getAllPremios(id?: Number): Promise<Premio[] | null> {

    return new Promise(async (resolve, reject) => {
      let endpoint = environment.endpoint + environment.apiPremio;
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
   * Método que crea premios en la BD
   * @param premio 
   * @returns el premio creado
   */
  public createPremio(premio: Premio): Promise<Premio> {

    return new Promise(async (resolve, reject) => {
      const endpoint = environment.endpoint + environment.apiPremio;
      try {
        let result: any = await this.http.post(endpoint, premio).toPromise();
        console.log(result);
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
      const endpoint = environment.endpoint + environment.apiPremio;
      try {
        let result: any = await this.http.put(endpoint, premio).toPromise();
        console.log(result);
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
      const endpoint = environment.endpoint + environment.apiPremio + id;
      try {
        let result: any = this.http.delete(endpoint).toPromise();
        console.log(result);
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
      const endpoint = environment.endpoint + environment.apiPremio + environment.descripcion + descripcion;
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
   * Método que obtiene todo los premios que han sido entregados
   * @returns lista de premios entregados
   */
  public getPremiosEntregados(): Promise<Premio[]> {

    return new Promise(async (resolve, reject) => {
      const endpoint = environment.endpoint + environment.apiPremio + environment.entregado;
      try {
        let premios: Premio[] = [];
        let premio: Premio;
        let result: any = await this.http.get(endpoint).toPromise();
        for (premio of result) {
          if (premio.entregado == true) {
            premios.push(premio);
          }
        }
        console.log(premios);
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
      const endpoint = environment.endpoint + environment.apiPremio + environment.noEntregado;
      try {
        let premios: Premio[] = [];
        let premio: Premio;
        let result: any = await this.http.get(endpoint).toPromise();
        for (premio of result) {
          if (premio.entregado == false) {
            premios.push(premio);
          }
        }
        console.log(premios);
        resolve(premios);
      } catch (error) {
        reject(error);
      }
    });
  }

}
