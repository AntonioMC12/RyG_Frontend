import { Component } from '@angular/core';
import { Ticket } from '../model/Ticket';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public listado:Array<Ticket>;

  constructor(private api:TicketService) {}

  public async getAllTicket(){

    //loading
   try {
   // this.listado = await this.api.getAllTickets(); //asincrono
   await this.api.getAllTickets();
   } catch (err) {
     console.log(err);
     this.listado=null;
   }
    
    //actualizar la vista
    //ocultar loading
  }

}
