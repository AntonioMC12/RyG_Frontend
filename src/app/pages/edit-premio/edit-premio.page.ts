import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Premio } from 'src/app/model/Premio';
import { PremioService } from 'src/app/services/premio.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-edit-premio',
  templateUrl: './edit-premio.page.html',
  styleUrls: ['./edit-premio.page.scss'],
})
export class EditPremioPage implements OnInit {

  @Input() premio:Premio;

  public formPremio: FormGroup;

  constructor(private modalController:ModalController,
    private api:PremioService,
    private fb:FormBuilder,
    private toast:ToastService) { }

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
   * Edita un haciendo uso del servicio -> PremioService
   */
  public async editPremio() {

    let newPremio:Premio = {
      id: this.premio.id,
      description: this.formPremio.get("description").value,
      entregado: this.premio.entregado
    }

    try {
      await this.api.updatePremio(newPremio);
      await this.formPremio.reset();
      await this.toast.showToast("Premio editado correctamente","success");
      this.cerrar();
    } catch (err) {
      console.log(err);
    }

  }

}
