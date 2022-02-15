import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Boleto } from '../model/Boleto';
import { Premio } from '../model/Premio';
import { Ticket } from '../model/Ticket';
import { TicketWrapper } from '../model/TicketWrapper';
import { Usuario } from '../model/Usuario';
import { BoletoService } from '../services/boleto.service';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  form: FormGroup;

  constructor(private boletosService: BoletoService, private ticketService: TicketService, public fb: FormBuilder) {
    this.form = this.fb.group({
      multipartFile: [null]
    })
  }

  ngOnInit() {
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      multipartFile: file
    });
    this.form.get('multipartFile').updateValueAndValidity()
  }

  submitForm() {
    let usuario: Usuario = {
      id: 2,
      admin: false,
      direccion: "c/ test 234",
      email: "test@gmail.com",
      latitud: 0.0,
      longitud: 0.0,
      nombre_comercio: "Test",
      participaciones: 0,
      telefono: "123456789",
      uid: "1234test"
    }
    let premio: Premio = {
      id: 1,
      description: "Esto es un premio telepollo",
      entregado: false
    }
    let boleto: Boleto = {
      id: 1,
      descripcion: "Boleto de prueba",
      entregado: false,
      canjeado: false,
      premio: premio,
      usuario: usuario
    }
    let ticket: Ticket = {
      id: -1,
      nombreCliente: "test",
      telefono: 675834145,
      numeroTicket: 9999999,
      fechaTicket: "2022-02-02",
      nombreComercio: "Telepollo",
      foto: "",
      boleto: boleto
    }

    var formData: any = new FormData();
    formData.append("ticket", new Blob([JSON.stringify(ticket)], {
      type: "application/json"
    }));
    formData.append("multipartFile", this.form.get('multipartFile').value);
    this.ticketService.createTicket(formData).then(response => {
      console.log(response);
    })
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
      id: 5,
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
