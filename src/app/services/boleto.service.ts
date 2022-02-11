import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Boleto } from '../model/Boleto';

@Injectable({
  providedIn: 'root'
})
export class BoletoService {

  constructor(private http: HttpClient) { }

  public async getBoletos(id_boleto?: Number) {
    if (id_boleto != undefined) {
      let endpoint = environment.endpoint + environment.apiBoletos + "/" + id_boleto;
      let boleto;
      try {
        boleto = await this.http.get(endpoint).toPromise();
        console.log(boleto);

      } catch (error) {
        console.error(error);
      }
    } else {
      let endpoint = environment.endpoint + environment.apiBoletos;
      let boletos;
      try {
        boletos = await this.http.get(endpoint).toPromise();
        console.log(boletos);
      } catch (error) {
        console.error(error);
      }
    }
  }

  public async getBoletosEntregados() {
    let endpoint = environment.endpoint + environment.apiBoletos + "/" + environment.apiBoletosEntregados;
    let boletos;
    try {
      boletos = await this.http.get(endpoint).toPromise();
      console.log(boletos);
    } catch (error) {
      console.error(error);
    }
  }

  public async getBoletosCanjeados() {
    let endpoint = environment.endpoint + environment.apiBoletos + "/" + environment.apiBoletoscanjeados;
    let boletos;
    try {
      boletos = await this.http.get(endpoint).toPromise();
      console.log(boletos);
    } catch (error) {
      console.error(error);
    }
  }

  public async getBoletosByUsuario(id_usuario: Number) {
    if(id_usuario != null && id_usuario != undefined && id_usuario > -1){
      let endpoint = environment.endpoint + environment.apiBoletos + "/" + environment.apiBoletosUsuarios + "/" + id_usuario;
      let boletos;
      try {
        boletos = await this.http.get(endpoint).toPromise();
        console.log(boletos);
      } catch (error) {
        console.error(error);
      }
    }else{
      console.log("id_usuario mal introducido");
    }
  }

  public async getBoletoSorteo(id_usuario: Number) {
    if(id_usuario != null && id_usuario != undefined && id_usuario > -1){
      let endpoint = environment.endpoint + environment.apiBoletos + "/" + environment.apiBoletosSorteo + "/" + id_usuario;
      let boletos;
      try {
        boletos = await this.http.get(endpoint).toPromise();
        console.log(boletos);
      } catch (error) {
        console.error(error);
      }
    }else{
      console.log("id_usuario mal introducido");
    }
  }

  public async postBoleto(boleto:Boleto) {
    let endpoint = environment.endpoint + environment.apiBoletos;
    let response;
    try {
      response = await this.http.post(endpoint,boleto).toPromise();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  public async putBoleto(boleto:Boleto) {
    let endpoint = environment.endpoint + environment.apiBoletos;
    let response;
    try {
      response = await this.http.put(endpoint,boleto).toPromise();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  public async deleteBoleto(id_boleto: Number) {
    if(id_boleto != null && id_boleto != undefined && id_boleto > -1){
      let endpoint = environment.endpoint + environment.apiBoletos + "/" + id_boleto;
      let boletos;
      try {
        boletos = await this.http.delete(endpoint).toPromise();
        console.log(boletos);
      } catch (error) {
        console.error(error);
      }
    }else{
      console.log("id_boleto mal introducido");
    }
  }

  private get header(): any {
    return {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  }
}
