import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastController: ToastController) { }
  async presentToast(message: any) {
    const toast = await this.toastController.create({
      message: 'Успешный вход в систему',
      duration: 2000,
      position: 'bottom',
      color: 'dark'
    });
    toast.present();
  }
  async presenToast(message: any) {
    const toast = await this.toastController.create({
      message: 'Нет соединение с интернетом',
      duration: 2000,
      position: 'bottom',
      color: 'dark'
    });
    toast.present();
  }
}
