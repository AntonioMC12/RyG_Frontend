import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Boleto } from 'src/app/model/Boleto';
import { Usuario } from 'src/app/model/Usuario';
import { LoadingService } from 'src/app/services/loading.service';
import { ToastService } from 'src/app/services/toast.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-crear-participaciones',
  templateUrl: './crear-participaciones.page.html',
  styleUrls: ['./crear-participaciones.page.scss'],
})
export class CrearParticipacionesPage implements OnInit {
  @Input() nBoletos: number;
  @Input() allboletos: Boleto[];

  public usuarios: Usuario[] = [];
  public usuario: Usuario;
  private isDisabled: boolean = false;
  public _NParticipaciones: number;
  public number:number = 0;

  public boletos: Boleto[] = [];
  public formParticipaciones: FormGroup;

  constructor(
    private modalController: ModalController,
    public api: UsuariosService,
    private fb: FormBuilder,
    public toast: ToastService,
    private loading: LoadingService
  ) {}

  ngOnInit() {
    this.modalController.dismiss(); //Cierra el modal anterior
    this.formParticipaciones = this.fb.group({
      participacion: ['',Validators.max(this.nBoletos)],
    });
    this._NParticipaciones = this.nBoletos;
  }

  async ionViewDidEnter() {
    this.loading.showLoading();
    await this.getAllUsuarios();
    this.loading.hideLoading();
  }

  async validador() {
    let result: boolean = false;
    if (this.nBoletos === 0) {
      result = true;
      await this.setParticipaciones();
      this.toast.showToast('Participaciones actualizadas', 'tertiary');
      this.cerrar();
    } else {
      result = false;
      this.toast.showToast(
        'Asegúrese de repartir '+this._NParticipaciones+' de participaciones.',
        'danger'
      );
    }
    return result;
  }

  /**
   * Método para setear el número de participaciones que le corresponde a cada comercio
   */
  public async setParticipaciones() {
    this.loading.showLoading();
    this.usuarios = await this.api.getUsuarios();
    for (let i = 0; i < this.usuarios.length; i++) {
      if (
        this.allboletos[0].usuario.nombre_comercio ==
        this.usuarios[i].nombre_comercio
      ) {
      } else {
        let participacion: number =
          this.formParticipaciones.get('participacion').value;
        let updateUsuario: Usuario = this.usuarios[i];
        updateUsuario.participaciones =
          updateUsuario.participaciones + participacion;
        this.usuario = await this.api.putUsuario(updateUsuario);
      }
    }
    this.loading.hideLoading();
  }


  /**
   * Cierra el modal
   */
  public cerrar() {
    this.modalController.dismiss();
  }

  public async getAllUsuarios(): Promise<Usuario[]> {
    try {
      this.usuarios = await this.api.getUsuarios();
    } catch (error) {
      console.log(error);
    }
    return this.usuarios;
  }
}
