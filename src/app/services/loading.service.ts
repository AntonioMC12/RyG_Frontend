import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private isLoading:any;

  constructor(private loading:LoadingController) { }

  private async showLoading() {
    if(this.isLoading){
      this.loading.dismiss();
    }
    this.isLoading = await this.loading.create({}); //{} -> mensaje, spinner..
    await this.isLoading.present();
  }

  private async hideLoading() {
    await this.loading.dismiss();
    this.isLoading = null;
  }
}
