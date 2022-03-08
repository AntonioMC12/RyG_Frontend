import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Boleto } from 'src/app/model/Boleto';
import { Usuario } from 'src/app/model/Usuario';
import { ToastService } from 'src/app/services/toast.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-crear-participaciones',
  templateUrl: './crear-participaciones.page.html',
  styleUrls: ['./crear-participaciones.page.scss'],
})
export class CrearParticipacionesPage implements OnInit {

  @Input() nBoletos: number;
  @Input() allboletos:Boleto[];

  public usuarios: Usuario[] = [];
  public usuario:Usuario;
  private isDisabled: boolean=false;

  public boletos:Boleto[]=[]
  public formParticipaciones: FormGroup;

  constructor(private modalController:ModalController,
    public api:UsuariosService,
    private fb:FormBuilder,
    public toast:ToastService) { }
 
  ngOnInit() {
    
    this.modalController.dismiss(); //Cierra el modal anterior
    this.formParticipaciones = this.fb.group({
      participacion: [""]
    });
  }

  async ionViewDidEnter() {
    await this.getAllUsuarios();
    
  }
  async validador(){
    let result: boolean = false;
    if(this.nBoletos>0){
      result=true;
      this.setParticipaciones();
    }else{
      result = false;
      await this.toast.showToast("El nº participaciones tiene que ser MENOR que el nº de boletos", "danger");
    }
    return result;
  }

  /**
   * Método para setear el número de participaciones que le corresponde a cada comercio
   */
  public async setParticipaciones(){

    this.usuarios = await this.api.getUsuarios();

    for(let i=0; i<this.usuarios.length; i++){
      if(this.allboletos[0].usuario.nombre_comercio==this.usuarios[i].nombre_comercio){

      }else{
        let  participacion:number= this.formParticipaciones.get("participacion").value;
        let updateUsuario:Usuario = this.usuarios[i];
        updateUsuario.participaciones = updateUsuario.participaciones +participacion; 
        this.usuario=await this.api.putUsuario(updateUsuario);
      }
   
    }
  }

  public sumar() {
    if(this.nBoletos>0){
      this.nBoletos--;
    }
     
    
    
  }

  /**
   * Cierra el modal
   */
  public cerrar(){
    this.modalController.dismiss();
  }

  public async getAllUsuarios():Promise<Usuario[]> {
    try {
      this.usuarios = await this.api.getUsuarios();
    } catch (error) {
      console.log(error);
    }
    return this.usuarios;
  }

}
