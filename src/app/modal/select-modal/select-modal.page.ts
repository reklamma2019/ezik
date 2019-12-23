import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-select-modal',
    templateUrl: './select-modal.page.html',
    styleUrls: ['./select-modal.page.scss']
})
export class SelectModalComponent {
    @Input() items: Array<any>;
    title: Text;
    constructor(
        public modalCtrl: ModalController
    ) {
    }
    closeModal() {
        this.modalCtrl.dismiss();
    }

    select(item: any) {
        let self = this;
        this.modalCtrl.dismiss(item);
    }
}
