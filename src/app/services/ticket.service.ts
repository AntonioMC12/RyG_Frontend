
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Ticket } from '../model/Ticket';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  /**
   * Método que obtiene todos los tickets almacenados en la BD o
   * si le pasas un id como argumento te hace la búsqueda de ese ticket
   * @param id 
   * @returns premio por id o lista de todos los tickets
   */
  public getAllTickets(id?: Number): Promise<Ticket[] | null> {

    return new Promise(async (resolve, reject) => {
      let endpoint = environment.apiEnviroment.endpoint + environment.apiEnviroment.apiTicket;
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

  //INUTILIZADO
  public getTicket(id: number): Promise<Ticket> {

    return new Promise(async (resolve, reject) => {
      const endpoint = environment.apiEnviroment.endpoint + environment.apiEnviroment.apiTicket + id;
      try {
        let result: any = await this.http.get(endpoint).toPromise();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
  * Método que crea ticket en la BD
  * @param ticket 
  * @returns el ticket creado
  */
  public createTicket(ticket: Ticket): Promise<Ticket> {

    return new Promise(async (resolve, reject) => {
      const endpoint = environment.apiEnviroment.endpoint + environment.apiEnviroment.apiTicket;
      try {
        let result: any = await this.http.post(endpoint, ticket).toPromise();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Método que actualiza un ticket en la BD
   * @param ticket 
   * @returns  el ticket actualizado
   */
  public uptadeTicket(ticket: Ticket): Promise<Ticket> {

    return new Promise(async (resolve, reject) => {
      const endpoint = environment.apiEnviroment.endpoint + environment.apiEnviroment.apiTicket;
      try {
        let result: any = await this.http.put(endpoint, ticket).toPromise();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
  * Método que borra un ticket de la BD
  * @param id 
  * @returns 
  */
  public deleteTicket(id: Number): Promise<void> {

    return new Promise(async (resolve, reject) => {
      const endpoint = environment.apiEnviroment.endpoint + environment.apiEnviroment.apiTicket + id;
      try {
        let result: any = this.http.delete(endpoint).toPromise();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });

  }

  /**
  * Método que obtiene un ticket en la BD según su telefono
  * @param telefono 
  * @returns una lista de tickets que contiene el telefono 
  */
  public getTicketByTelephone(telefono: Number): Promise<Ticket[]> {

    return new Promise(async (resolve, reject) => {
      const endpoint = environment.apiEnviroment.endpoint + environment.apiEnviroment.apiTicket + environment.apiEnviroment.telefono + telefono;
      try {
        let result: any = await this.http.get(endpoint).toPromise();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
  * Método que obtiene un ticket en la BD según su fecha
  * @param fechaTicket 
  * @returns una lista de tickets que contiene la descripción
  */
  public getTicketByDate(fechaTicket: string): Promise<Ticket[]> {

    return new Promise(async (resolve, reject) => {
      const endpoint = environment.apiEnviroment.endpoint + environment.apiEnviroment.apiTicket + environment.apiEnviroment.fecha + fechaTicket;
      try {
        let result: any = await this.http.get(endpoint).toPromise();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }




}




