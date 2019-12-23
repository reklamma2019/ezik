import { Component, OnInit } from '@angular/core';
import {Api} from '../../providers/providers';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage {
  help: Array<any> = [];

  constructor(
    public api: Api,

  ) {}
  ionViewDidEnter(){
		let self = this;
		self.api.showMask()
		.then(() => {
      self.api.getHelp()
			.then((response: any) => {
				self.api.hideMask()
				.then(() => {
          self.help = response;
				});
			});
    })
  }
}