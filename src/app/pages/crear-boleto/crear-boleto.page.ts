import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, MaxValidator, Validators } from '@angular/forms';
import { ModalController, NumericValueAccessor } from '@ionic/angular';


import { Boleto } from 'src/app/model/Boleto';
import { Premio } from 'src/app/model/Premio';
import { Usuario } from 'src/app/model/Usuario';
import { BoletoService } from 'src/app/services/boleto.service';
import { PremioService } from 'src/app/services/premio.service';
import { ToastService } from 'src/app/services/toast.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { CrearParticipacionesPage } from '../crear-participaciones/crear-participaciones.page';

@Component({
  selector: 'app-crear-boleto',
  templateUrl: './crear-boleto.page.html',
  styleUrls: ['./crear-boleto.page.scss'],
})
export class CrearBoletoPage implements OnInit {

  @Input() newPremio: Premio;

  public usuarios: Usuario[] = [];
  //  public usuario:Usuario;
  public premio: Premio;
  public premios: Premio[] = [];
  public boletos: Boleto[] = [];
  public formBoleto: FormGroup;




  constructor(private modalController: ModalController,
    public api: UsuariosService,
    private fb: FormBuilder,
    public toast: ToastService,
    public apiBoleto: BoletoService,
    public apiPremio: PremioService) { }

  ngOnInit() {

    this.formBoleto = this.fb.group({
      description: ["", Validators.required],
      comercio: ["", Validators.required],
      nBoletos: ["", Validators.required],
      nPremiados: ["", Validators.required]
    });

  }

  async validador() {
    let result: boolean = false;
    let nBoletos = this.formBoleto.get("nBoletos").value;
    let nPremiados = this.formBoleto.get("nPremiados").value;
    let usuarioBoleto: Usuario = await this.api.getUsuario(this.formBoleto.get("comercio").value);
    let premio1: Premio = this.newPremio;

    let premioPersistido: Premio;

    if (nBoletos > nPremiados && nBoletos > 0 && nPremiados > 0) {

      result = true;
     

      for (let j = 0; j < nPremiados; j++) {
        this.premio = premio1;
        premioPersistido = await this.apiPremio.createPremio(this.premio);
        let premio2 = this.convertPremio(premioPersistido);

        premioPersistido = premio2
        this.premios.push(premio2);

      }
      console.log(this.premios);

      for (let i = 0; i < nBoletos; i++) {

        let boleto: Boleto = {
          id: -1,
          descripcion: this.formBoleto.get("description").value,
          entregado: false,
          canjeado: false,
          premio: null,
          usuario: usuarioBoleto
        }
        let boletoPersistido: Boleto = await this.apiBoleto.postBoleto(boleto);
        this.boletos.push(boletoPersistido);

      }


      for (let i = 0; i < this.premios.length; i++) {

        let number: number = Math.floor(Math.random() * (this.boletos.length - 0) + 0);
        let boletoPremiado: Boleto = this.boletos[number];
        console.log(number);

        boletoPremiado = {
          id: boletoPremiado.id,
          descripcion: boletoPremiado.descripcion,
          entregado: boletoPremiado.entregado,
          canjeado: boletoPremiado.canjeado,
          premio: this.premios[i],
          usuario: boletoPremiado.usuario
        }
        await this.apiBoleto.putBoleto(boletoPremiado);
        
      
      }
      console.log(this.boletos)
      this.siguiente();
    } else {
      result = false;
      await this.toast.showToast("El nº premios tiene que ser MENOR que el nº de boletos", "danger");
      await this.formBoleto.reset();
    }
    return result;
  }



  /**
   * Cierra el modal
   */
  public cerrar() {
    this.modalController.dismiss();
  }

  /**
   * Método que trae todos los comercios para el ion-select
   */
  public async getAllUsuarios() {
    try {
      this.usuarios = await this.api.getUsuarios();
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Método para pasar al siguiente modal -> reparto de participaciones
   * 
   */
  public async siguiente() {
    this.modalController.dismiss(); // Cierra el modal anterior
    let nBoletos:number=this.formBoleto.get("nBoletos").value
   
    let allboletos:Boleto[] = this.boletos;
    console.log(allboletos);
    const modal = await this.modalController.create({
      component: CrearParticipacionesPage,
      cssClass: 'my-custom-class',
      componentProps: { nBoletos,
      allboletos}
    });

    await modal.present();
    await modal.onDidDismiss();
    // await this.getAllPremio();
  }

  public convertPremio(premio: Premio) {
    let premioConvert = {
      id: premio.id,
      description: premio.description,
      entregado: premio.entregado
    }
    return premioConvert;
  }
}
