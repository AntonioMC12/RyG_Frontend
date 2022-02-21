import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import * as L from 'leaflet';
import { Usuario } from 'src/app/model/Usuario';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  isOpen: boolean = false;
  map: any;
  public formUsuario: FormGroup;

  constructor(private modalController: ModalController, private renderer: Renderer2, private fb: FormBuilder,
    private toast: ToastService) { }

  ngOnInit() {
    this.formUsuario = this.fb.group({
      nombre_comercio: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.minLength(2)]],
      direccion: ['', [Validators.required, Validators.minLength(2)]],
      latitud: ['', [Validators.required, Validators.minLength(2)]],
      longitud: ['', [Validators.required, Validators.minLength(2)]],
      telefono: ['', [Validators.required, Validators.minLength(2)]],
      administrador: ['', [Validators.required, Validators.minLength(2)]]
    });
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
    let marker = L.marker([37.66994, -4.72531], {
      draggable: true
    }).addTo(this.map);
    marker.on('dragend', () => {
      this.formUsuario.get('latitud').setValue(marker.getLatLng().lat);
      this.formUsuario.get('longitud').setValue(marker.getLatLng().lng);
    });
  }

  public saveUsuario() {
    console.log(this.formUsuario.value);
  }

  //cerrar modal
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