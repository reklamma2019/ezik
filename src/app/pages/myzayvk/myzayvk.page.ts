import { Component, OnInit } from '@angular/core';
import {Api,ToastNotify} from '../../providers/providers';

@Component({
  selector: 'app-myzayvk',
  templateUrl: './myzayvk.page.html',
  styleUrls: ['./myzayvk.page.scss'],
})
export class MyzayvkPage  {
  myzayvki: any;
  allMyzayvk: Array<any> = [];
  allMyzayvknew: Array<any> = [];

  segmentChanged(event) {
    this.myzayvki = event;
  }

  constructor(
    public api: Api,
  ) {
    this.myzayvki = "official";
	}
   ionViewDidEnter(){
		let self = this;
		self.api.showMask()
		.then(() => {
      self.api.getMyzayvki()
			.then((response: any) => {
				self.api.hideMask()
				.then(() => {
          self.allMyzayvk = response;
				});
			});
    })
    .then(() => {
      self.api.getMyzayvkinew()
      .then((response: any) => {
        self.api.hideMask()
        .then(() => {
          self.allMyzayvknew = response;
        });
      });
    })
  }
  doRefresh(event) {
    this.ionViewDidEnter();
  

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }
}
