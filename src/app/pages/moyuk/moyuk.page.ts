import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import {Api,ToastNotify} from '../../providers/providers';
@Component({
  selector: 'app-moyuk',
  templateUrl: './moyuk.page.html',
  styleUrls: ['./moyuk.page.scss'],
})
export class MoyukPage  {
  user: User;

  constructor(
    public api: Api,
  ) {}
  ionViewDidEnter(){
		let self = this;
		self.api.showMask()
		.then(() => {
      self.api.getMyuk()
			.then((response: any) => {
				self.api.hideMask()
				.then(() => {
          self.user = response;
				});
			});
    })
  }
}