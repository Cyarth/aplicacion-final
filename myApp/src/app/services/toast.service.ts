import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }
  
  async presentToast(infoMessage: string){
    const toast = await this.toastController.create({
      message: infoMessage,
      duration : 3000
    });
    toast.present();
  }
}
