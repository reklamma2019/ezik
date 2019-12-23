import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()
export class ToastNotify {
    toast: any;
    constructor(
        public toastCtrl: ToastController
    ) {
    }
    success(message: string) {
        let self = this,
            time = 0;
        if (self.toast) {
            self.toast.dismiss();
            self.toast = null;
            time = 500;
        }
        setTimeout(() => {
            self.doShow(message, 'success');
        }, time);
    }
    error(message: string) {
        let self = this,
            time = 0;
        if (self.toast) {
            self.toast.dismiss();
            self.toast = null;
            time = 500;
        }
        setTimeout(() => {
            self.doShow(message, 'failure');
        }, time);
    }
    async doShow(message, cssClass) {
        let self = this;
        self.toast = await self.toastCtrl.create({
            message: message,
            duration: 3000,
            cssClass: cssClass,
            position: 'top'
        });
        self.toast.present();
        self.toast.onDidDismiss(() => {
            self.toast = null;
        });
    }
}
