import { Component, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonInput, ModalController } from '@ionic/angular';
import * as L from 'leaflet';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ToastService } from 'src/app/services/toast.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {
  @ViewChild('password') password: IonInput;
  isOpen: boolean = false;
  map: any;
  public formUsuario: FormGroup;

  @Input() Usuario: Usuario;
  constructor(
    private modalController: ModalController,
    private renderer: Renderer2,
    private fb: FormBuilder,
    private toast: ToastService,
    private usuarioService: UsuariosService,
    private authService: AuthService,
    private miLoading: LoadingService
  ) {}

  ngOnInit() {
    this.formUsuario = this.fb.group({
      nombre_comercio: [
        this.Usuario.nombre_comercio,
        [Validators.required, Validators.minLength(2)],
      ],
      email: [
        this.Usuario.email,
        [Validators.required, Validators.minLength(2)],
      ],
      direccion: [
        this.Usuario.direccion,
        [Validators.required, Validators.minLength(2)],
      ],
      latitud: [
        this.Usuario.latitud,
        [Validators.required, Validators.minLength(2)],
      ],
      longitud: [
        this.Usuario.longitud,
        [Validators.required, Validators.minLength(2)],
      ],
      telefono: [
        this.Usuario.telefono,
        [Validators.required, Validators.minLength(2)],
      ],
      administrador: ['false', [Validators.required, Validators.minLength(2)]],
    });
  }

  ionViewDidEnter() {
    this.initMap();
  }

  initMap() {
    this.map = L.map('map').setView([37.66994, -4.72531], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
    setTimeout(() => {
      this.map.invalidateSize();
    }, 200);
    let marker = L.marker([37.66994, -4.72531], {
      draggable: true,
    }).addTo(this.map);
    marker.on('dragend', () => {
      this.formUsuario.get('latitud').setValue(marker.getLatLng().lat);
      this.formUsuario.get('longitud').setValue(marker.getLatLng().lng);
    });
  }

  public async updateUsuario() {
    if (this.validateEmail(this.formUsuario.get('email').value)) {
      this.miLoading.showLoading();
      let usuario: Usuario = {
        id: this.Usuario.id,
        nombre_comercio: this.formUsuario.get('nombre_comercio').value,
        direccion: this.formUsuario.get('direccion').value,
        email: this.formUsuario.get('email').value,
        latitud: this.formUsuario.get('latitud').value,
        longitud: this.formUsuario.get('longitud').value,
        participaciones: this.Usuario.participaciones,
        telefono: this.formUsuario.get('telefono').value,
        uid: this.Usuario.uid,
        admin: false,
        boletos: this.Usuario.boletos,
      };
      await this.usuarioService
        .putUsuario(usuario)
        .then(() => {
          this.miLoading.hideLoading();
          this.toast.showToast(
            'Usuario actualizado con éxito con éxito',
            'success'
          );
          this.cerrar();
        })
        .catch(() => {
          this.miLoading.hideLoading();
          this.toast.showToast('Error al actualizar el usuario', 'danger');
        });
    } else {
      //mal email
      this.toast.showToast('Has introducido un email inválido', 'warning');
    }
  }

  //cerrar modal
  public cerrar() {
    this.modalController.dismiss();
  }

  public clickMapButton() {
    this.isOpen = this.isOpen ? false : true;
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
      this.map.invalidateSize(true);
    }, 200);
  }

  hide() {
    const parent: HTMLElement = document.getElementById('map');
    this.renderer.setStyle(parent, 'display', 'none');
    setTimeout(() => {
      this.map.invalidateSize(true);
    }, 200);
  }

  public mostrarContrasena() {
    if (this.password.type == 'password') {
      this.password.type = 'text';
    } else {
      this.password.type = 'password';
    }
  }

  public get isPassword(): boolean {
    return this.password.type == 'password';
  }

  public validateEmail(email: string): boolean {
    let regexp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return regexp.test(email);
  }

  public validatePassword(pass: string): boolean {
    let validate: boolean = pass.length > 5 ? true : false;
    return validate;
  }
}
