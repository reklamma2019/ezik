import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import {Api,ToastNotify} from '../../providers/providers';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  user: User;
  constructor(private menu: MenuController,
    public api: Api,
  ) { 
    this.menu.enable(true);
  }
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
