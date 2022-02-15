import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-premio',
  templateUrl: './create-premio.page.html',
  styleUrls: ['./create-premio.page.scss'],
})
export class CreatePremioPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  /**
   * Cierra el modal
   */
 public cerrar() {
  this.modalController.dismiss();
}

}
