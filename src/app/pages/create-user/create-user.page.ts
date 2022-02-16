import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  /**
   * cerrar el modal
   */
  public cerrar() {
    this.modalController.dismiss();
  }
}