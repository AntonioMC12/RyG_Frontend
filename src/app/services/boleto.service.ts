import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Boleto } from '../model/Boleto';

@Injectable({
  providedIn: 'root'
})
export class BoletoService {

  apiEndpoint = environment.apiEnviroment.endpoint + environment.apiEnviroment.apiBoletos + "/";


  constructor(private http: HttpClient) { }

  public async getBoletos(id_boleto?: Number): Promise<Boleto[]> {
    return new Promise(async (resolve, reject) => {
      let endpoint = this.apiEndpoint;
      let boleto: Boleto[];
      if (id_boleto) {
        endpoint += id_boleto;
      }
      try {
        boleto = await this.http.get(endpoint).toPromise() as Boleto[];
        resolve(boleto);
      } catch (error) {
        reject(error);
      }
    });
  }

  public async getBoletosEntregados(): Promise<Boleto[]> {
    return new Promise(async (resolve, reject) => {
      let endpoint = this.apiEndpoint + environment.apiEnviroment.apiBoletosEntregados;
      let boletos;
      try {
        boletos = await this.http.get(endpoint).toPromise();
        resolve(boletos);
      } catch (error) {
        reject(error);
      }
    });
  }


  public async getBoletosCanjeados(): Promise<Boleto[]> {
    return new Promise(async (resolve, reject) => {
      let endpoint = this.apiEndpoint + environment.apiEnviroment.apiBoletoscanjeados;
      let boletos: Boleto[];
      try {
        boletos = await this.http.get(endpoint).toPromise() as Boleto[];
        resolve(boletos);
      } catch (error) {
        reject(error);
      }
    });
  }


  public async getBoletosByUsuario(id_usuario: Number): Promise<Boleto[]> {
    return new Promise(async (resolve, reject) => {
      if (id_usuario && id_usuario > -1) {
        let endpoint = this.apiEndpoint + id_usuario;
        let boletos: Boleto[];
        try {
          boletos = await this.http.get(endpoint).toPromise() as Boleto[];
          resolve(boletos);
        } catch (error) {
          reject(error);
        }
      } else {
        reject();
      }
    });
  }

  public async getBoletoSorteo(id_usuario: Number): Promise<Boleto[]> {
    return new Promise(async (resolve, reject) => {
      if (id_usuario && id_usuario > -1) {
        let endpoint = this.apiEndpoint + environment.apiEnviroment.apiBoletosSorteo + "/" + id_usuario;
        let boletos: Boleto[];
        try {
          boletos = await this.http.get(endpoint).toPromise() as Boleto[];
          resolve(boletos);
        } catch (error) {
          reject(error);
        }
      } else {
        reject("id_usuario mal introducido");
      }
    });
  }

  public async postBoleto(boleto: Boleto): Promise<Boleto[]> {
    return new Promise(async (resolve, reject) => {
      let endpoint = this.apiEndpoint;
      let boletos: Boleto[];
      try {
        boletos = await this.http.post(endpoint, boleto).toPromise() as Boleto[];
        resolve(boletos);
      } catch (error) {
        reject(error);
      }
    });
  }

  public async putBoleto(boleto: Boleto): Promise<Boleto[]> {
    return new Promise(async (resolve, reject) => {
      let endpoint = this.apiEndpoint;
      let boleto: Boleto[];
      try {
        boleto = await this.http.put(endpoint, boleto).toPromise() as Boleto[];
        resolve(boleto);
      } catch (error) {
        reject(error);
      }
    });
  }

  public async deleteBoleto(id_boleto: Number): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      if (id_boleto && id_boleto > -1) {
        let endpoint = this.apiEndpoint + id_boleto;
        try {
          await this.http.delete(endpoint).toPromise();
          resolve(true);
        } catch (error) {
          reject(false);
        }
      } else {
        reject(false);
      }
    });
  }
}
