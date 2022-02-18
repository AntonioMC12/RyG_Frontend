import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private isLoading:any;

  constructor(private loading:LoadingController) { }

  public async showLoading() {
    if(this.isLoading){
      this.loading.dismiss();
    }
    this.isLoading = await this.loading.create({
      cssClass: 'my-custom-class',
      message: 'Por favor espere...'
    }); //{} -> mensaje, spinner..
    await this.isLoading.present();
  }

  public async hideLoading() {
    await this.loading.dismiss();
    this.isLoading = null;
  }
}
