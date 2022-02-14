import { Component } from '@angular/core';
import { Ticket } from '../model/Ticket';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public listado: Array<Ticket>;
  public ticket: Ticket;
  constructor(private api: TicketService) { }

  public async getAllTicket() {
    try {
      this.listado = await this.api.getAllTickets();
      console.log(this.listado);
      //this.listado = await this.api.getAllTickets(2);
      //this.ticket = await this.api.getTicket(2);
      //console.log(this.ticket);
    } catch (error) {
      console.log(error);
      // this.listado=null;
      this.ticket = null;
    }

  }
  public async createTicket() {

    let date: Date = new Date("2022-09-18");
    let newTicket: Ticket = {
      id: -1,
      nombreCliente: "testing",
      telefono: 1234,
      numeroTicket: 1123,
      fechaTicket: date,
      nombreComercio: "desde ionic"

    };
    try {
      this.ticket = await this.api.createTicket(newTicket);
      // this.ticket = await this.api.uptadeTicket(newTicket);
      console.log(this.ticket);
    } catch (error) {
      console.log(error);
    }
  }

  public async deleteTicket() {
    try {

      await this.api.deleteTicket(10);
      console.log(this.ticket);
    } catch (error) {
      console.log(error);
      // this.listado=null;
      this.ticket = null;
    }

  }

  public async getByTelephone() {
    try {
      this.listado = await this.api.getTicketByTelephone(1234);
      console.log(this.listado);
    } catch (error) {
      console.log(error);
    }
  }

  public async getByDate() {
    try {
      const date: string = "2022-03-16";
      this.listado = await this.api.getTicketByDate(date);
      console.log(this.listado);
    } catch (error) {
      console.log(error);
    }
  }

}
