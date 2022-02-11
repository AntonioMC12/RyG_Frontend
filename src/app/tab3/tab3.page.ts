import { Component } from '@angular/core';
import { Premio } from '../model/Premio';
import { PremioService } from '../services/premio.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public listado: Array<Premio>;
  public premio: Premio;

  constructor(private api: PremioService) { }

  public async getAllPremio() {
    try {
      this.listado = await this.api.getAllPremios();
      console.log(this.listado);
    } catch (error) {
      console.log(error);
      this.listado = null;
    }

  }

  public async createPremio() {

    let newPremio: Premio = {
      id: -1,
      description: "hola soy un premio",
      entregado: false
    };

    try {
      this.premio = await this.api.createPremio(newPremio);
      console.log(this.premio);
    } catch (error) {
      console.log(error);
    }
  }

  public async updatePremio() {

    let newPremio: Premio = {
      id: 8,
      description: "hola soy un premio editado",
      entregado: false
    };

    try {
      this.premio = await this.api.updatePremio(newPremio);
      console.log(this.premio);
    } catch (error) {
      console.log(error);
    }
  }

  public async deletePremio() {
    try {
      await this.api.deletePremio(6);
      console.log(this.premio);
    } catch (error) {
      console.log(error);
      this.premio = null;
    }

  }

  public async getByDescription() {
    try {
      this.listado = await this.api.getPremioByDescription("telepollo");
      console.log(this.listado);
    } catch (error) {
      console.log(error);
    }
  }

  public async getPremiosEntregados() {
    try {
      this.listado = await this.api.getPremiosEntregados();
      console.log(this.listado);
    } catch (error) {
      console.log(error);
    }
  }

  public async getPremiosNoEntregados() {
    try {
      this.listado = await this.api.getPremiosNoEntregados();
      console.log(this.listado);
    } catch (error) {
      console.log(error);
    }
  }



}
