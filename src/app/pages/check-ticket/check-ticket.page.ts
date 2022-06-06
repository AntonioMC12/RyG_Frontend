import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
import { NavController } from '@ionic/angular';
import { Boleto } from 'src/app/model/Boleto';
import { Ticket } from 'src/app/model/Ticket';
import { Usuario } from 'src/app/model/Usuario';
import { BoletoService } from 'src/app/services/boleto.service';
import { EncryptionService } from 'src/app/services/encryption.service';
import { TicketService } from 'src/app/services/ticket.service';
import { ToastService } from 'src/app/services/toast.service';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-check-ticket',
  templateUrl: './check-ticket.page.html',
  styleUrls: ['./check-ticket.page.scss'],
})
export class CheckTicketPage {
  // @ViewChild("nombre") password: IonInput;
  tempImg: String;

  public listado: Array<Usuario>;
  public usuarios: Usuario[] = [];
  public usuario: Usuario;
  public formTicket: FormGroup;
  form: FormGroup;
  file: Photo;

  private boleto: Boleto;

  constructor(
    private usuarioService: UsuariosService,
    private activatedRoute: ActivatedRoute,
    public fb: FormBuilder,
    private ticketService: TicketService,
    private boletoService: BoletoService,
    private encrypter: EncryptionService,
    private router: Router,
    public navCtrl: NavController,
    private toastService : ToastService
  ) {
    this.form = this.fb.group({
      multipartFile: [null],
    });
    this.formTicket = this.fb.group({
      fecha: ['', [Validators.required, Validators.minLength(2)]],
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      telefono: ['', [Validators.required, Validators.minLength(2)]],
      nticket: ['', [Validators.required, Validators.minLength(2)]],
      comercio: ['', [Validators.required, Validators.minLength(2)]],
      fechayhora: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  async ionViewDidEnter() {
    await this.getUsuarios();

    this.boleto = await this.boletoService.getBoleto(await this.getURLBoleto());
    console.log(await this.getURLBoleto())
    console.log(this.boleto)

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
      source: CameraSource.Camera,
    });
    console.log(this.file);
  };

  public async getURLBoleto(): Promise<Number> {

    return Number(
     await this.decryptIdBoleto(this.activatedRoute.snapshot.paramMap.get('boleto'))

    );
  }

  public async guardar() {
    let ticket: Ticket = {
      id: -1,
      nombreCliente: this.formTicket.get('nombre').value,
      telefono: this.formTicket.get('telefono').value,
      numeroTicket: Number(this.formTicket.get('nticket').value),
      fechaTicket: this.formatterFecha(this.formTicket.get('fechayhora').value),
      nombreComercio: this.formTicket.get('comercio').value,
      foto: '',
      boleto: this.boleto,
    };

    if(this.file == null){
      this.toastService.showToast('Debe tomar una foto del ticket', 'danger');
      return;
    }

    let multipartFile = await this.urltoFile(
      this.file.dataUrl,
      'foto',
      'image/png'
    );
    console.log(multipartFile);

    var formData: any = new FormData();
    formData.append(
      'ticket',
      new Blob([JSON.stringify(ticket)], {
        type: 'application/json',
      })
    );
    formData.append('multipartFile', multipartFile);
    await this.ticketService.createTicket(formData).then((response) => {
      console.log(response);
    }).catch((error) => {
      this.toastService.showToast('Error al guardar el ticket', 'danger');
      this.toastService.showToast('Póngase en contacto con el administrador.', 'danger');
    });

    const dato: NavigationExtras = {state: {example: this.boleto}};
    // this.router.navigate(['/movimientos-sua'], dato);
    console.log('entro');

    this.router.navigate(['rascaygana'],dato)
  }

  public urltoFile(url, filename, mimeType) {
    return fetch(url)
      .then(function (res) {
        return res.arrayBuffer();
      })
      .then(function (buf) {
        return new File([buf], filename, { type: mimeType });
      });
  }

  formatterFecha(fecha: string) {
    return fecha.split('T')[0];
  }

  public async decryptIdBoleto(idBoleto: string) {
    return this.encrypter.decrypt(idBoleto);
  }
}
