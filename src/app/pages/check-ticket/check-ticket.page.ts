import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Boleto } from 'src/app/model/Boleto';
import { Premio } from 'src/app/model/Premio';
import { Ticket } from 'src/app/model/Ticket';
import { Usuario } from 'src/app/model/Usuario';
import { BoletoService } from 'src/app/services/boleto.service';
import { TicketService } from 'src/app/services/ticket.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-check-ticket',
  templateUrl: './check-ticket.page.html',
  styleUrls: ['./check-ticket.page.scss'],
})
export class CheckTicketPage {

  tempImg: String;

  public listado: Array<Usuario>;
  public usuarios: Usuario[] = [];
  public usuario: Usuario;
  form: FormGroup;
  file: Photo;

  private boleto:Boleto;

  constructor(private usuarioService: UsuariosService, private activatedRoute: ActivatedRoute, public fb: FormBuilder, private ticketService: TicketService, private boletoService: BoletoService) {
    this.form = this.fb.group({
      multipartFile: [null]
    })
  }

  async ionViewDidEnter() {
    await this.getUsuarios();
    this.boleto = await this.boletoService.getBoleto(Number(this.activatedRoute.snapshot.paramMap.get("boleto")));
  }

  public async getUsuarios(id?: any) {
    if (id != undefined && id > -1) {
      this.usuarioService.getUsuarios(id);
    } else {
      this.usuarios = await this.usuarioService.getUsuarios();
    }
  }

  takePicture = async () => {
    this.file = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    console.log(this.file);

  };

  public getURLBoleto() {
    return this.activatedRoute.snapshot.paramMap.get("boleto");
  }

  public async guardar() {

    let ticket: Ticket = {
      id: -1,
      nombreCliente: "test",
      telefono: 675834145,
      numeroTicket: 9999999,
      fechaTicket: "2022-02-02",
      nombreComercio: "Telepollo",
      foto: "",
      boleto: this.boleto
    }

    let multipartFile = await this.urltoFile(this.file.dataUrl, "foto", "image/png");
    console.log(multipartFile);


    var formData: any = new FormData();
    formData.append("ticket", new Blob([JSON.stringify(ticket)], {
      type: "application/json"
    }));
    formData.append("multipartFile", multipartFile);
    await this.ticketService.createTicket(formData).then(response => {
      console.log(response);
    })
  }

  public urltoFile(url, filename, mimeType) {
    return (fetch(url)
      .then(function (res) { return res.arrayBuffer(); })
      .then(function (buf) { return new File([buf], filename, { type: mimeType }); })
    );
  }

}
