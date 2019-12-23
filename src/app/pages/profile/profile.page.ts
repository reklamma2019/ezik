import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import {Api,ToastNotify} from '../../providers/providers';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage  {
  user: User;
  events: any;

  constructor(
    public api: Api,
  ) {}
  ionViewDidEnter(){
		let self = this;
		self.api.showMask()
		.then(() => {
      self.api.getUser()
			.then((response: any) => {
				self.api.hideMask()
				.then(() => {
          self.user = response;
				});
			});
    })
  }
}