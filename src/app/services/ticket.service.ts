import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Ticket } from '../model/Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  /**public getAllTickets(): Promise<Ticket[]> {

    return new Promise((resolve, reject) => {
      const endpoint = environment.endpoint + environment.apiTicket;
      //http://localhost:8080/tickets
      this.http.get(endpoint, {}).toPromise()
        .then(d => {

          if (d) {
            resolve(null);
            console.log("eee");
          } else {
            resolve(null);
          }
         
        })
        .catch(err => reject(err));

    }); */
  

    public  getAllTickets(){
      const path =`${environment.endpoint}/tickets`;
      console.log("holas");
     const listado = this.http.get<Ticket[]>(path);
     
    }

  }


  


