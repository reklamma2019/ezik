import { Component, OnInit } from '@angular/core';
import {Api,ToastNotify} from '../../providers/providers';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.page.html',
  styleUrls: ['./partner.page.scss'],
})
export class PartnerPage {
  partn: Array<any> = [];

  constructor(
    public api: Api,
  ) {}
  ionViewDidEnter(){
		let self = this;
		self.api.showMask()
		.then(() => {
      self.api.getPartner()
			.then((response: any) => {
				self.api.hideMask()
				.then(() => {
          self.partn = response;
				});
			});
    })
  }
}
