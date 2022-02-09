import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  // public getItem() {
  //   let endpoint = environment.endpoint + environment.apiUsuario;
  //   this.http.get(endpoint, {}, this.header)
  //     .then(d => {
  //       console.log(d);
  //     })
  //     .catch(err => console.log(err));
  // }

  // private get header(): any {
  //   return {
  //     'Access-Control-Allow-Origin': '*',
  //     'Content-Type': 'application/json'
  //   }
  // }

  public getAllUsuarios() {
    const path = `${environment.endpoint}${environment.apiUsuario}`;
    console.log(path);
    const listado = this.http.get<Usuario[]>(path);
  }
}
