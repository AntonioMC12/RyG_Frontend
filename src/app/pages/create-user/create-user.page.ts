import { Component, OnInit, Renderer2 } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as L from 'leaflet';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  isOpen: boolean = false;
  map: any;

  constructor(private modalController: ModalController, private renderer: Renderer2) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.initMap();
  }

  initMap() {
    this.map = L.map('map').setView([37.66994, -4.72531], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    setTimeout(() => {
      this.map.invalidateSize()
    }, 200);
  }

  /**
   * cerrar el modal
   */
  public cerrar() {
    this.modalController.dismiss();
  }

  public clickMapButton() {
    this.isOpen = (this.isOpen ? false : true);
    if (this.isOpen) {
      this.show();
    } else {
      this.hide();
    }
    console.log(this.isOpen);
  }

  show() {
    const parent: HTMLElement = document.getElementById('map');
    this.renderer.setStyle(parent, 'display', 'block');
    setTimeout(() => {
      this.map.invalidateSize(true)
    }, 200);
  }

  hide() {
    const parent: HTMLElement = document.getElementById('map');
    this.renderer.setStyle(parent, 'display', 'none');
    setTimeout(() => {
      this.map.invalidateSize(true)
    }, 200);
  }
}