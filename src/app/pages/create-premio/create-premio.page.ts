import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Premio } from 'src/app/model/Premio';
import { PremioService } from 'src/app/services/premio.service';
import { CrearBoletoPage } from '../crear-boleto/crear-boleto.page';



@Component({
  selector: 'app-create-premio',
  templateUrl: './create-premio.page.html',
  styleUrls: ['./create-premio.page.scss'],
})
export class CreatePremioPage implements OnInit {

 // @Input() premio:Premio;
  public premio:Premio;
  public formPremio: FormGroup;

  constructor(private modalController:ModalController,
    private fb:FormBuilder,
    public apiPremio:PremioService) { }

  ngOnInit() {
    this.formPremio = this.fb.group({
      description: ["", Validators.required]
    });
  }

  /**
   * Cierra el modal
   */
 public cerrar() {
  this.modalController.dismiss();
}


 /**
 * Pasar a la pag siguiente
 * 
 */

  public async siguiente() {
    let newPremio:Premio = {
     id: -1,
      description: this.formPremio.get("description").value,
     entregado: false
    }
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: CrearBoletoPage,
      cssClass: 'my-custom-class',
      componentProps: {newPremio}
    });

    await modal.present();
    await modal.onDidDismiss();
   // await this.getAllPremio();
  }

}
