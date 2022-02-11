import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(private toast: ToastController) { }

  public async showToast(msg: string, color: string) {
    const _toast = await this.toast.create({
      message: msg,
      duration: 2000,
      color: color,
      position: 'bottom'
    });
    await _toast.present();
  }
}
