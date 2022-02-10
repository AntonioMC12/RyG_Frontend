import { Component, OnInit } from '@angular/core';
import { Boleto } from '../model/Boleto';
import { BoletoService } from '../services/boleto.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private boletosService: BoletoService) { }

  ngOnInit() {
  }

  public getBoletos(id?: any) {
    if (id != undefined && id > -1) {
      console.log(id);
      this.boletosService.getBoletos(id);
    } else {
      console.log(id);
      this.boletosService.getBoletos();
    }
  }

  public getBoletosEntregados() {
    this.boletosService.getBoletosEntregados();
  }

  public getBoletosCanjeados() {
    this.boletosService.getBoletosCanjeados();
  }

  public getBoletosByUsuario(id_usuario: Number) {
    this.boletosService.getBoletosByUsuario(id_usuario);
  }

  public getBoletoSorteo(id_usuario: Number) {
    this.boletosService.getBoletoSorteo(id_usuario);
  }

  
  public postBoleto() {
    let boleto: Boleto = {
      id: -1,
      descripcion: "Esto es una descripción desde Ionic",
      entregado: false,
      canjeado: false,
      premio: null,
      usuario: null
    }
    this.boletosService.postBoleto(boleto);
  }

  public putBoleto() {
    let boleto: Boleto = {
      id: 20,
      descripcion: "Esto es una descripción actualizada desde Ionic",
      entregado: false,
      canjeado: false,
      premio: null,
      usuario: null
    }
    this.boletosService.putBoleto(boleto);
  }
  
  public deleteBoleto(id_usuario: Number) {
    this.boletosService.deleteBoleto(id_usuario);
  }
}
